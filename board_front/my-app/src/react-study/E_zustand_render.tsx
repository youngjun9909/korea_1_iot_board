import React, { useState } from "react";
import useCountStore from "../stroes/count.store";
import { btn } from "./C_StateEffect";
import useCartStore from "../stroes/cart.store";

const input = {
  marginBottom: "10px",
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#fff"
}

export default function ZustandRender() {
  // state
  const [newItem, setNewItem] = useState( {
    id: 0,
    name: '',
    price: 0,
    quantity: 1
  });


  // zustand: count 값을 전역 상태 관리

  const { increment, decrement } = useCountStore();

  // zustandL cart 값을 전역상태관리
  const { addItem, clearCart } = useCartStore();

  // 이벤트 핸들러
  const handleCartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value
    }));
  }

  //% 이벤트 핸들러 : 새로운 장바구니 아이템 생성 버튼 클릭 이벤트 핸들러
  const handleAddItem = () => {
    if(newItem.name && newItem.price > 0) {
      addItem({
        ...newItem,
        id: Date.now(),
      })

      setNewItem({
        id: 0,
        name: '',
        price: 0,
        quantity: 1
      })
    }
  }

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <h2>Zustand Render: 상태를 변경하는 버튼</h2>
      <button style={btn} onClick={increment}>
        증가
      </button>
      <button style={btn} onClick={decrement}>
        감소
      </button>

      <h2>Zustand Render: Cart 상태를 변경하는 input</h2>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "0" }}>
        <h3>Shopping Cart</h3>
        <div style={{ marginBottom: "20px", display:'flex' , flexDirection:'column'}}>
          <input
            type="text"
            name="name"
            placeholder="메뉴명"
            value={newItem.name}
            onChange={handleCartInputChange}
            style={input}
          />
          <input
            type="number"
            name="price"
            placeholder="메뉴 가격"
            value={newItem.price}
            onChange={handleCartInputChange}
            style={input}
          />
          <input
            type="number"
            name="quantity"
            placeholder="메뉴 수량"
            value={newItem.quantity}
            onChange={handleCartInputChange}
            style={input}
          />
          <br />
          <button style={btn} onClick={handleAddItem}>
            상품 추가
          </button>
          <button style={btn} onClick={clearCart}>
            전체 삭제
          </button>
        </div>
      </div>
    </div>
  );
}
