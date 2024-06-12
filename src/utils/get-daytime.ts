import { Daytime } from "@/types/daytime";

export const getDaytime = (date: number): Daytime => {
  const hour = new Date(date).getHours();

  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else if (hour >= 18 && hour < 22) {
    return "evening";
  } else {
    return "night";
  }
};
