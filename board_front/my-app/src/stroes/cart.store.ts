// cart.store.ts

import { create } from "zustand";

//# interface : 

//% 장바구니 아이템의 interface 정의
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

//& 스토어(전역 저장소)의 interface 정의
interface CartStoreType {
  items: CartItem[];
  
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStoreType>((set) => ({
  // 상태 필드 초기회
  items:[],

  // 상태 업데이트 함수 정의
  addItem: (item) => set((state) => ({
    items: [...state.items, item]
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id)
  })),
  clearCart: () => set({items:[] })
}));

export default useCartStore;