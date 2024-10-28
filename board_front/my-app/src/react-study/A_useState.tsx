import React, { useState } from "react";

//! useState
// 1. 함수형 컴포넌트
// 2. 상태 관리
// 3. Hook

// cf) Hook
// : 리액트 함수형 컴포넌트에서 사용할 수 있는 기능의 모음
// : 문법 체계가 "use-" 로 시작

//! useState 사용법
// const [state, setState] = useState<타입>(초기값);

// useState 의 리턴값
// : [상태변수, 상태업데이트 함수]

// const 상태변수 = 초기값;
// const setState = () => {
// }

// cf) 구조 분해 할당
// : 배열이나, 객체의 속성을 변수로 쉽게 추출할 수 있도록 하는 기능

// 배열
const [a, b] = [1, 2];

// 객체
const { name, age } = {
  name: "박영준",
  age: 30,
};

// const a = 0 ;
// const name = '홍길동';

interface LoginState {
  email: string;
  password: string;
}

export default function A_useState() {
  const [count, setCount] = useState<number>(0);

  const [loginState, setLoginState] = useState<LoginState>({
    email: '',
    password: ''
  });

  const {email, password} = loginState;

  const handleIncrementButton = () => {
    // set 상태 설정 함수에 전달되는 인자 값으로 count값이 업데이트

    // - 이전의 상태값과 연관이 없는 경우
    // setCount(count + 1)

    // - 이전의 상태값과 연관이 있는 경우
    // : prev상태변수명
    // : 최신의 상태값을 가져옴
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrementButton = () => {
    setCount(count - 1);
  };

  // REACT의 체계
  // : TSX 문법 체계
  // : TS(JS) 내에서 HTML을 작성
  // - 함수형 컴포넌트의 반환을 HTML문서로 반환

  // 1. TS내에서 HTML작성: () 소괄호
  // 2. HTML내에서 TS작성: {} 중괄호

  // 여러 input 창을 관리하는 이벤트 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setLoginState((prevState) => ({
      ...prevState,
      [name]: value
    }));

  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrementButton}>증가</button>
      <button onClick={handleDecrementButton}>감소</button>

      <hr />
      <form>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="이메일을 입력하세요."
            required
          />
        </div>
        <div>
          <label htmlFor="password">패스워드</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="비밀번호를 입력하세요."
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
