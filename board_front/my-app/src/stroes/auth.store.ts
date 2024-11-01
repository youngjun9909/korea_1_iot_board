// zustand 파일명 권장
// : 전역상태관리할데이명.store.ts
// EX) user.store.ts

import { create } from "zustand";

//* 인터페이스 정의
interface User {
  id: number, 
  name: string
}

interface AuthStoreType {

  // 상태 필드 정의
  isAuthenticated: boolean; //인증여부
  user: User | null;

  // 상태 업데이트 함수
  login: (user: User) => void;
  logout: () => void;
}

// 저장소 생성 함수
const useAuthStore = create<AuthStoreType>((set) => ({
  // 상태 필드 초기화
  isAuthenticated: false,
  user: null,

  // 상태 업데이트 함수
  login: (user) => set({isAuthenticated: true, user}),
  logout: () => set({isAuthenticated: false, user:null})
}));

export default useAuthStore;