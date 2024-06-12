import { Weather, WeatherTypes } from "@/types/weather";

export const getRandomWeather = (): Weather => {
  const weatherTypes: WeatherTypes[] = ["rain", "sunny", "clouds"];
  const type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
  const temperature = Math.floor(Math.random() * 35); // Random temperature between 0 and 34 degrees
  
  return { type, temperature };
}
