import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, REACT_STUDY_PATH, USER_PATH, TODO_PATH, BOARD_LIST_PATH } from '../../constants';
import Container from '../../layouts/Container';
import Main from '../Main';
import Authentication from '.';
import Board from '../Board';
import User from '../User';
import ReactStudy from '../ReactStudy';
import Todo from "../Todo";
import BoardList from "../Board"


function indexx() {
  return (
    <>
      <Routes>
        <Route element={<Container />}>
          {/* 
            Route 컴포넌트의 index 속성
            : 상위 컴포넌트의 경로로 출력 (기본 자식 라우트)
          */}
          <Route path={MAIN_PATH} element={<Main />}/>

          {/* 로그인 + 회원가입 페이지 */}
          <Route path={AUTH_PATH} element={<Authentication />}/>

          {/* 게시물 리스트 화면 */}
          <Route path={BOARD_LIST_PATH} element={<BoardList />} />

          {/* 게시물 상세 보기 */}
          <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<Board />}/>

          {/* 게시글 작성 화면 */}
          <Route path={BOARD_WRITE_PATH} element={<Board />}/>

          {/* 게시글 수정 화면 */}
          <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<Board />}/>

          {/* 마이페이지 */}
          <Route path={USER_PATH} element={<User />}/>

          {/* 리액트 학습 */}
          <Route path={REACT_STUDY_PATH} element={<ReactStudy/>}/>

          {/* 할 일 목록 화면 */}
          <Route path={TODO_PATH} element={<Todo />} />
        </Route>
      </Routes>
    </>
  );
}

export default indexx;
