import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import axios from "axios";

interface UserInfo {
  email: string; // 사용자 이메일
  password: string; // 사용자 비밀번호
  confirmPassword: string; // 비밀번호 확인 필드
}

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  form?: string; // 전체 폼 오류 메시지(EX: 서버 오류 등)
}

// 환경 변수로 부터  API URL 가져옴
const API_URL = process.env.REACT_APP_API_URL;

export default function SignUp() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // errors: 유효성 검사 오류 메시지를 관리
  const [errors, setErrors] = useState<Errors>({});

  // useNavigate() 훅 : 페이지 전환 기능을 사용
  const navigate = useNavigate();

  //! ====== 이벤트 핸들러 ======
  // 사용자 입력 필드 변경 이벤트 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target;

    setUserInfo({
      // 스프레드 연산자
      // : 배열, 객체 내부의 요소만 복사
      ...userInfo, 
      [element.name] : element.value

    })
  };

  // 회원가입 버튼 클릭 시 이벤트 핸들러
  const handleSignUp = async() => {
    const isValidation = validateForm();

    if(isValidation) {
      try{
        // 서버에 회원가입 요청 POST
        const response = await axios.post(`http://localhost:8080/api/v1/auth/signUp`, userInfo);

        if(response.data) {
          navigate('/');
        }else{
          setErrors(prev => ({
            ...prev,
            form: '회원가입 실패'
          }))
        }

      }catch {  
        setErrors(prev => ({
          ...prev,
          form: '서버 에러 발생'
        }))
      }
    }


  };

  //! === 폼 유효성 검사 함수 
  const validateForm = () => {
    let tempErrors: Errors = {};

    tempErrors.email = userInfo.email ? "" : "이메일을 입력하세요"
    tempErrors.password = userInfo.password.length >= 8 ? "" : "비밀번호는 8자리 이상"
    tempErrors.confirmPassword = userInfo.password === userInfo.confirmPassword ? "" : "비밀번호가 일치하지 않습니다."

    // 오류 상태 업데이트

    setErrors(tempErrors);

    // 모든 입력이 유효한지 확인하여 true || false 반환
    return Object.values(tempErrors).every(x => x === '');
  }

  return (
    <Card variant="outlined" sx={{ width: 360, m: "auto", mt: 4 }}>
      <CardContent>
        {/* 회원 가입 제목 표시 */}
        <Typography variant="h5" mb={2}>
          회원가입
        </Typography>
        {/* 입력 필드 */}
        <TextField
          label="email"
          type="email"
          name="email"
          variant="outlined"
          value={userInfo.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          // !!데이터값
          // : 값을 boolean 타입으로 변환하는 방식
          // : 값이 존재하면 true
          // - 값이 존재하지 않으면 false
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="password"
          type="password"
          name="password"
          variant="outlined"
          value={userInfo.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          // !!데이터값
          // : 값을 boolean 타입으로 변환하는 방식
          // : 값이 존재하면 true
          // - 값이 존재하지 않으면 false
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          label="confirmPassword"
          type="password"
          name="confirmPassword"
          variant="outlined"
          value={userInfo.confirmPassword}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          // !!데이터값
          // : 값을 boolean 타입으로 변환하는 방식
          // : 값이 존재하면 true
          // - 값이 존재하지 않으면 false
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />

        {/* 전체 폼 오류 메시지가 있을 경우 표시 */}
        {errors.form && (
          <Typography color="error" mt={2}>
            {errors.form}
          </Typography>
        )}
      </CardContent>
      {/* 회원가입 버튼 */}
      <CardActions>
        <Button
          onClick={handleSignUp}
          fullWidth
          variant="contained"
          color="primary"
        >
          가입
        </Button>
      </CardActions>
    </Card>
  );
}
