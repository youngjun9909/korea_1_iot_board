/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react'
import image from './a.png'
import { useNavigate } from "react-router-dom";


export default function MyPage() {

  const [principalData , setPrincipalData] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <div css={s.layout}>
      <div css={s.header}>
        <div css={s.image}>
          <div css={s.profileImg}>
            <img src={image} alt="프로필" />
          </div>
        </div>

        <div css={s.info}>
          <div css={s.infoText}>
            사용자 이름: 박영준
          </div>
          <div css={s.infoText}>
            닉네임: 박영준
          </div>
          <div css={s.emailBox}>
            <div css={s.infoText}>
              이메일: example123@example.com
            </div>
            {principalData ? (
              <div css={s.emailCheck}>✅</div>
            ) : (
              <button  css={s.infoBtn}>인증</button>
            )}
          </div>
          <div css={s.infoBtns}>
            <button css={s.infoBtn} >정보 수정</button>
            <button css={s.infoBtn} onClick={() => navigate('/todo')}>비밀번호 수정</button>
          </div>
        </div>
      </div>

      <div css={s.bottom}>
        하위 영역
      </div>
    </div>
  )
}
