import React from 'react'


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

  1) 구조

*/

export default function F_Response_Constructure() {
  return (
    <div>F_Response_Constructure</div>
  )
}
