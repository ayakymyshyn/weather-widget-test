import { create } from "zustand";

interface User {
  // Assume if it's null - user is not authenticated
  // Lets keep it simple for now
  email: string | null;
}

interface Action {
  updateUserEmail: (email: User['email']) => void;
}

export const useUserStore = create<User & Action>((set) => ({
  email: null,
  updateUserEmail: (email) => set(() => ({ email })),
}));
