import { css } from '@emotion/react';

export const backGround = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
  width: 100%;
  height: 100%;
  background-color: #666666;
`;

export const layout = css`
  width: 800px;
  height: 600px;
  box-sizing: border-box;
  position: relative;
  margin: 100px auto;
  border: 2px solid #fafafa;
  border-radius: 30px;
  padding: 10px;
  overflow: hidden;
  background-color: black;
`;