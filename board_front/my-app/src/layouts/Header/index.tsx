import React, { useState } from "react";
import useAuthStore from "../../stroes/auth.store";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import useThemeStore from "../../stroes/theme.store";

export default function Header() {
  
  // 사용자의 인증 상태를 전역 상태 관리
  const { user, isAuthenticated, logout } = useAuthStore();
  const {toggleTheme, theme} = useThemeStore();

  // 사용자의 토큰을 관리하는 쿠키
  const [, setCookies] = useCookies(['token'])

  // 이벤트 핸들러
  const handleLogoutClick = () => {
    setCookies('token', '', {expires: new Date()});
    logout();
  }

  return (
    <div>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box flex={1} display='flex' alignItems='center'>
          <Button variant="contained" onClick={toggleTheme}>
            {theme === 'light' ? "다크 모드" : "라이트 모드"}
          </Button>
        </Box>
        <Box flex={1} display="flex" justifyContent="center" alignItems='center' textAlign='center'>
          <Link to={""} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h3">코리아 IT</Typography>
          </Link>
        </Box>
        <Box flex={1} display="flex" justifyContent="flex-end">
          {isAuthenticated ? (
            <div style={{display:'flex', alignItems:'center'}}>
              <p style={{border: '1px solid black', padding: '5px', borderRadius:'5px'}}>{user?.name}님</p>
            <Typography variant="subtitle1" m={2} onClick={handleLogoutClick} style={{cursor:'pointer'}}>
              로그아웃
            </Typography>
            </div>
          ): (
            <Link to={'/auth'} style={{textDecoration: "none", color: "inherit"}}>
            <Typography variant="subtitle1" m={2} >
              로그인
            </Typography>
            </Link>
          )}
        </Box>
      </Box>
    </div>
  );
}
