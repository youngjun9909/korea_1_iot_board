/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react'
import * as s from "./style";

interface RootLayOutProps {
  children : ReactNode;
}

export default function LootLayout({ children} : RootLayOutProps) {
  return (
    <>
      <div css={s.backGround}></div>
      <div css={s.layout}>{children}</div>
    </>
  )
}
