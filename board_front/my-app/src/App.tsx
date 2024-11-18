import React from 'react'
import RootLayout from "./component/rootLayout/LootLayout";
import RootContainer from "./component/rootContainer/RootContainer";
import Todo from './views/Todo';
import { Route, Routes } from 'react-router-dom';
import MyPage from './views/myPage/MyPage';

export default function App() {
  return (
    <RootLayout>
      <RootContainer>
        <Routes>
          <Route path='/todo' element={<Todo />} />
          <Route path='/' element={<MyPage />} />
        </Routes>
      </RootContainer>
    </RootLayout>
  )
}
