import { User } from "firebase/auth";
import { create } from "zustand";

type StoreType = {
  currentUser: User | undefined | null;
  setCurrentUser: (user: User | null) => void;
  setLogout: () => void;
};

const initialState = {
  currentUser: null,
};

export const useUserStore = create<StoreType>((set) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
  setLogout: () => set(initialState),
}));