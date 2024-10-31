import React from 'react'
import UseState from '../../react-study/A_useState';
import UseEffect from '../../react-study/B_UseEffect';
import StateEffect from '../../react-study/C_StateEffect'
import Cookie from '../../react-study/D_react_cookie'
import Book from '../../react-study/Book';

export default function ReactStudy() {
  return (
    <>
      <h2>UseState: 상태관리</h2>
      <UseState />
      <h2>UseEffect: 부수효과</h2>
      <UseEffect/>
      <h2>State & Effect Menu 검색 구현</h2>
      <StateEffect />
      <h2>React-Cookie 상태관리</h2>
      <Cookie />
      <h2>Book</h2>
      <Book />
    </>
  )
}
