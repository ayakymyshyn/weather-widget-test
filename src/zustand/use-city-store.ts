import { create } from "zustand";

// Currently I don't see any point of
// storing API data here
// since we are using react-query

interface City {
  city: string;
}

interface Action {
  updateCity: (city: string) => void;
}

export const useCityStore = create<City & Action>((set) => ({
  city: "",
  updateCity: (city) => set(() => ({ city })),
}));
