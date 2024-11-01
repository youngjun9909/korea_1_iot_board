import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../stroes/auth.store';

// 사용자 입력 정보의 상태를 나타냄
// Credentials
// : 자격증, 신원 정보
interface Credentials {
  email: string;
  password: string;
}

// 로그인 후 전역 상태에 저장될 사용자 데이터
interface UserAuthData {
  id: number;
  email: string;
}

// 서버에서 반환하는 로그인 응답 데이터의 형태를 나타냄
interface SignInResponseDto {
  token: string;
  user: UserAuthData;
  exprTime: number;
}

// * MainComponent 로그인 컴포넌트
export default function SignIn() {
  // == 로그인 된 사용자 상태를 컴포넌트 내에서 관리하는 state ==
  // const [user, setUser] = useState<Credentials>({
  //   email: '',
  //   password: ''
  // });

  //* state: 로그인 입력필드 상태
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  });

  //* 오류 메시지 저장 상태
  const [errors, setErrors] = useState<string>('');

  //* state : React Cookie 훅을 사용하여 쿠키를 설정하는 함수
  const [, setCookies] = useCookies(['token']);

  // state: useUserStore() 훅을 사용하여 사용자 정보를 전역 상태에 저장
  const { login, logout } = useAuthStore();



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target;

    setCredentials({
      ...credentials,
      [element.name]: element.value
    });
  }


  
  const handleSignIn = async() => {
      const {email, password} = credentials;
      // 이메일 O / 비밀번호 O : true >> 실행 X
      // 이메일 X / 비밀번호 O : false >> 실행 O
      // 이메일 O / 비밀번호 X : false >> 실행 O
      // 이메일 X / 비밀번호 X : false >> 실행 O
      
      if(!email || !password) {   
        setErrors('아이디와 비밀번호를 모두 입력해주세요')
        return;
      }

      try{
        const response = await axios.post('http://localhost:8080/api/v1/auth/signIn', credentials);
        
        if(response.data) {
          signInSuccessResponse(response.data.data);
        }

      }catch{
        setErrors("로그인 실패")
      }
  }

  const navigate = useNavigate();


  //* function : 로그인 성공 시 실행되는 함수
  // 로그인 성공 시 실행
  // 서버응답이 성공일 경우 토큰과 사용자 정보를 젖ㅇ & 페이지 이동
  const signInSuccessResponse = (data: SignInResponseDto) => {
    if(data) {
      const { token, exprTime, user } = data;
      setToken(token, exprTime); 
      login({
        id: user.id,
        name: user.email
      });
      navigate('/');
    }else {
      setErrors("로그인 실패: 인증 정보를 확인해주세요.")
    }
  }

  const setToken = (token: string, exprTime: number) => {
    const expires = new Date(Date.now() + exprTime);
    setCookies('token', token, {
      path: '/',
      expires
    });
  };



  // render: 로그인 컴포넌트 렌더링
  return (
    <Card variant='outlined' sx={{
      width: 360,
      m: 'auto',
      mt: 4
    }}>
      <CardContent>
        <Typography variant='h5' mb={2}>
          로그인
        </Typography>
        {/* <Header>{user.email}</Header> */}

        <TextField
          label="email"
          type="email"
          name="email"
          variant="outlined"
          value={credentials.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="password"
          type="password"
          name="password"
          variant="outlined"
          value={credentials.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {errors && (
          <Typography color='error' mt={2}>
            {errors}
          </Typography>
        )}
      </CardContent>
    {/* 회원가입 버튼 */}
    <CardActions>
        <Button
          onClick={handleSignIn}
          fullWidth
          variant="contained"
          color="primary"
        >
          로그인
        </Button>
      </CardActions>
    </Card>
  )
}
