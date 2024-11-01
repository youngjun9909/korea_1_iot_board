import React from "react";
import useCountStore from "../stroes/count.store";
import useCartStore from "../stroes/cart.store";
import { btn } from "./C_StateEffect";

/* 
  ! Zustand 전역 상태 관리
  1. 개념: 상태(state)를 의미 - React에서 사용되는 전역 상태 관리 라이브러리 중 하나

  2. 장점
  - 간결성, 구독 최적화, 유연성, 접근성

  3. zustand 형태 (ts 기준)
  :create 함수를 사용하여 스토어(store) 생성
    - 해당 스토어를 통해 프로젝트 전역에서 데이터에 접근 가능

  : create 함수에 제네릭<>을 사용하여 함수 구조를 정의
    - 전역 상태값(필드), 전역 상태 설정 함수 (메서드)
  
  : create 함수 내의 구조
  - set 설정 함수를 통해 상태를 업데이트
  - (set) =>({해당 구조 내에서 제네릭 구조를 작성})
*/

export default function E_Zustand() {
  //% state
  //& state: count 값에 대한 전역 상태 관리
  const { count } = useCountStore();

  const {items, removeItem } = useCartStore();

  // return: zustand 전역 상태 관리에 대한 출력
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h2>Zustand: Counter Example</h2>
      <p>{`count: ${count}`}</p>

      <h2>Zustand: Cart Example</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} >
            {item.name} - ${item.price} X {item.quantity} : ${item.price * item.quantity}
            <button style={btn} onClick={() => removeItem(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
