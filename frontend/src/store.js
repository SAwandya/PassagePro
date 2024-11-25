import { create } from "zustand";

const useGameQueryStore = create((set) => ({
  isRegisterOpen: null,
  SetIsRegisterOpen: (isRegisterOpen) =>
    set({ isRegisterOpen: isRegisterOpen }),
}));

export default useGameQueryStore;
