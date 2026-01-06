import { create } from "zustand";

export const useUserStore = create(() => ({
  user: "User_" + Math.floor(Math.random() * 1000),
}));
