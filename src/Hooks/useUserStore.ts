import { User } from "firebase/auth";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type StoreType = {
  currentUser: User | undefined | null;
  setCurrentUser: (user: User | null) => void;
  setLogout: () => void;
};

const initialState = {
  currentUser: null,
};

export const useUserStore = create<StoreType>()(
  devtools(
    persist(
      (set) => ({
        currentUser: null,
        setCurrentUser: (user) => set({ currentUser: user }),
        setLogout: () => set(initialState),
      }),
      { name: "user" }
    )
  )
);
