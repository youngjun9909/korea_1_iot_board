import React from 'react'
import UseState from '../../react-study/A_useState';
import UseEffect from '../../react-study/B_UseEffect';
import StateEffect from '../../react-study/C_StateEffect'
import Cookie from '../../react-study/D_react_cookie'
import Zustand from '../../react-study/E_Zustand';
import ZustandRender from '../../react-study/E_zustand_render';
import Emotion1 from '../../react-study/G_Emotion';
import Emotion2 from '../../react-study/H_Emotion2';

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
      <h2>Zustand</h2>
      <Zustand />
      <ZustandRender/>

      <h2>Emotion : 스타일 라이브러리</h2>
      <Emotion1 />
      <Emotion2 />
    </>
  )
}
