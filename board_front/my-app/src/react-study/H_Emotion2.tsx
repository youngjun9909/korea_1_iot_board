/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'

const containerSt = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  background-color: #f5f5f5;
`;

const section = (isReverse: boolean) => css`
  display: flex;
  flex-direction: row;
  justify-content: ${isReverse? "flex-end" : "flex-start"};
  gap: 10px;
  align-items: center;
  width: 80%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${isReverse ? "white" : "gray"};
  transition: flex-direction 0.3s;

  @media(max-width: 600px){
    flex-direction: column;
  }
`;

const itemSt = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width:80px;
  height: 80px;
  background-color: #bbdefb;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const dataSt = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: #bbdefb;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 1.5s, background-color 0.3s;
  cursor: pointer;

  &:hover {
    transform: rotateX(360deg);
  }
`;

const idSt = css`
  font-style: 1.2em;
  color: #1565c0;
  margin-bottom: 8px;
`;

const contentSt = css`
  font-size: 1em;
  color: #555;
`;

export default function H_Emotion2() {

  const data = [
    {id:1, content: "보라두비"},
    {id:2, content: "뚜비"},
    {id:3, content: "나나"},
    {id:4, content: "뽀"}
  ];
  

  return (
    <div css={containerSt}>
      <div css={section(true)}>
        <div css={itemSt}>a1</div>
        <div css={itemSt}>a2</div>
        <div css={itemSt}>a3</div>
      </div>
      <div css={section(false)}>
        <div  css={itemSt}>b1</div>
        <div  css={itemSt}>b2</div>
        <div  css={itemSt}>b3</div>
        <div  css={itemSt}>b4</div>
        <div  css={itemSt}>b5</div>
      </div>
      <div css={section(true)}>
        <div  css={itemSt}>c1</div>
        <div  css={itemSt}>c2</div>
        <div  css={itemSt}>c3</div>
        <div  css={itemSt}>c4</div>
      </div>
      

      {data.map((item) => (
        <div css={dataSt}>
          <div css={idSt}>ID: {item.id}</div>
          <div css={contentSt}>{item.content}</div>
        </div>
      ))}
    </div>
  )
}
