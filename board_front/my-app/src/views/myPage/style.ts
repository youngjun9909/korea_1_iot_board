import { css } from '@emotion/react';

export const layout = css`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const header = css`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
  padding: 10px 30px;
  width: 100%;
  height: 200px;
  background-color: white;
`;

export const image = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  height: 100%;
`;

export const profileImg = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > img {
    height: 100%;
  }
`;

export const info = css`
  box-sizing: border-box;
  margin-left: 30px;
  padding-top: 30px;
`;

export const infoText = css`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const emailBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > div:nth-of-type(1) {
    margin: 0 10px 0 0;
  }
`;

export const infoBtn = css`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  font-size: 12px;
  cursor: pointer;

  &:hover{
    background-color: #fafafa;
  }

  &:active{
    background-color: #eee;
  }
`;

export const emailCheck = css`
  display: flex;
  align-items: center;
  color: #008734;
  font-weight: 600;
`;

export const infoBtns = css`
  box-sizing: border-box;
  display: flex;
  padding-top: 5px;

  & > button:nth-of-type(1) {
    margin-right: 10px;
  }
`;

export const bottom = css`
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  height: 250px;
  background-color: white;
`;