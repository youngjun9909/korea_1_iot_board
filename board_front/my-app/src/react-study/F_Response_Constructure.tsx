import axios from 'axios'
import React, { useEffect } from 'react'


/*
  ! ==== Spring Boot 의 응답 구조 ====

  ResponseEntity<ResponseDto<실제응답데이터>>

  1) ResponseEntity 구조
  - HttpStatus: 응답의 성공, 실패 상태를 나타냄 (EX. 200 OK, 404 NOT FOUND, 500 INTERNER SERVER ERROR)
  - HttpHeaders: 응답에 포함할 추가 정보 (EX. Content-Type, Authorization 등)
  - Body(본문): 클라이언트에 전달할 실제 데이터, 객체나 문자열 또는 DTO 등 다양한 데이터 설정 가능
    >> ResponseDto 형식의 "구조화 된 본문을 전달 (응답 데이터를 감싸흔 형태의 응답 구조)"

  2) ResponseDto 구조
  - result (boolean): 성공, 실패에 대한 boolean 타입의 데이터
  - message (string): 성공, 실패에 대한 구체적인 메시지 전달
  - data (D): 클라이언트에게 전달할 실제 데이터 

  ! ==== 프론트엔드의 Axios 의 응답 처리 ====

  response.data.data

  1) response 구조
  - axios가 HTTP 응답을 처리한 후 반환하는 객체
  - response.status: HTTP 상태 코드 (200, 204)
  - response.statusText: 상태 텍스트 ("OK", "NOT FOUND" 등)
  - response.headers: 응답 헤더 정보
  - response.config: 응답 설정 정보
  - response.data: 서버에서 전송한 응답 데이터

  2) response.data 구조
  : 백엔드의 전체 ResponseDto 객체를 가리킴
  - 실제 데이터를 data 필드로 감싸고 있음

*/

export default function F_Response_Constructure() {

  //* function : 로그인 성공 시 실행되는 함수
  const signInSuccessResponse = (data: any) => {
    
  }

  // 로그인 버튼 클릭 이벤트 처리 함수
  const handleSignIn = async() => {
    const credentials = {
      email: "gktpdy12",
      password: "dkssud12"
    };
    
    if(!credentials.email || !credentials.password) {
      console.error("아이디, 비밀번호를 모두 입력해주세요");
      return;
    }

    try{
      const response = await axios.post(`http://localhost:8080/api/v1/auth/signIn`, credentials)
      if(response.status === 200) {
        // 응답에 대한 상태가 200 ok 일 경우
        signInSuccessResponse(response.data.data);
      }
    }catch(e) {
      console.error("로그인 에러", e);
    }
  }

  return (
    <div>F_Response_Constructure</div>
  )
}
