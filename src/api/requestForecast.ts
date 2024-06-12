import { Daytime } from "@/types/daytime";
import { Weather } from "@/types/weather";
import { getDaytime } from "@/utils/get-daytime";
import { getRandomWeather } from "@/utils/get-random-weather";

const MOCK_TODAY_FORECAST: Record<
  Daytime,
  Partial<Record<Daytime, Weather>>
> = {
  morning: {
    morning: getRandomWeather(),
    afternoon: getRandomWeather(),
    evening: getRandomWeather(),
    night: getRandomWeather(),
  },
  afternoon: {
    afternoon: getRandomWeather(),
    evening: getRandomWeather(),
    night: getRandomWeather(),
  },
  evening: {
    evening: getRandomWeather(),
    night: getRandomWeather(),
  },
  night: {
    night: getRandomWeather(),
  },
};

const MOCK_NEXT_DAY_FORECAST: Partial<Record<Daytime, Weather>> = {
  morning: getRandomWeather(),
  afternoon: getRandomWeather(),
  evening: getRandomWeather(),
  night: getRandomWeather(),
};

export function requestForecast(
  date: number
): Promise<Array<Partial<Record<Daytime, Weather>>>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentDaytime = getDaytime(date);
      resolve([MOCK_TODAY_FORECAST[currentDaytime], MOCK_NEXT_DAY_FORECAST]);
    }, 1000);
  });
}
