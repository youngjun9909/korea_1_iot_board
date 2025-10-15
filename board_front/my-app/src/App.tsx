import React from 'react'
import RootLayout from "./component/rootLayout/LootLayout";
import RootContainer from "./component/rootContainer/RootContainer";
import Todo from './views/Todo';
import { Route, Routes } from 'react-router-dom';
import MyPage from './views/myPage/MyPage';
import Test from './views/Test';

export default function App() {
  return (
    <>
        <Routes>
          <Route path='/todo' element={<Todo />} />
          <Route path='/' element={<MyPage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
    </>
    // <RootLayout>
    //   <RootContainer>
    //   </RootContainer>
    // </RootLayout>
  )
}
