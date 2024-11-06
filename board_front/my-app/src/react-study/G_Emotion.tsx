/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled';
import React from 'react'
/*
  emotion 라이브러리
  : CSS-in-JS 스탕일링을 제공하여 React 컴포넌트 스타일을 적용하는 방법

  cf) CSS-in-JS
    : JS 안에서 스타일을 작성하게 해주는 방식

  2. Emotion 사용 방법

  : npm install @emotion/react @emotion/styled
  - npm install @emotion/react @emotion/styled @emotion/babel-plugin

  3. emotion 기본 구성
  : @emotion/react: Emotion의 핵심 패키지, css 함수와 테마 기능 등을 제공
  : @emotion/styled: styled-components와 유사하게 스타일링 할 수 있게 도와주는 패키지

  4. 기본 사용법
    1) css 함수
      : css 헬퍼를 사용하여 스타일을 작성

    2) styled함수
      : styled 함수를 사용하여 스타일을 작성
      : 해당 스타일의 컴포넌트를 반환
  
*/

const divStyle = css`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  margin: 4px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

const DivSt = styled.div`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  margin: 4px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

  // 5. 동적 스탕일링 - TS로 타입을 정의하여 동적 스타일
const btnSt = (status: boolean) => css`
  background-color: ${status ? 'green' : 'red'};
  color: white;
`;


/*
  6. 프로젝트 초기 스타일링
  : Global styled를 사용하여 초기 컴포넌트에 대한 스타일을 지정
*/

const globalSt = css`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: gray;
  }
`;

export default function G_Emotion() {
  return (
    <>
      <Global styles={globalSt}/>
      <div css={divStyle}>
        Hello, Emotion
      </div>
      <DivSt>
        Hello, Emotion
      </DivSt>

      <hr />

      <button css={btnSt(true)}>Hello</button>
      <button css={btnSt(false)}>Hello</button>

      <hr />
    </>
  )
}
