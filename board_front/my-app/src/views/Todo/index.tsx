import React, { useEffect, useState } from 'react'
import '../../styles/Main.css';
import { createTask, deleteTask, fetchTasks, updateTaskStatus } from '../../apis';
import { Task } from '../../types/Task';
import Clock from '../../component/Clock';
import ProgressBar from '../../component/ProgressBar';
import TaskForm from '../../component/TaskForm';
import TaskList from '../../component/TaskList';

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task: string) => {
    const newTask = await createTask(task);
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  const toggleTaskStatus = async (task: Task) => {
    await updateTaskStatus(task.id, !task.status);
    setTasks(tasks.map(t => (t.id === task.id ? { ...t, status: !t.status } : t)));
  };

  const removeTask = async (task: Task) => {
    await deleteTask(task.id);
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <div className='todo-container'>
      <Clock />
      <ProgressBar tasks={tasks} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={removeTask} />
    </div>
  )
}