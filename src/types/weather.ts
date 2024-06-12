export type WeatherTypes = "rain" | "sunny" | "clouds";

export type Weather = {
  type: WeatherTypes;
  temperature: number;
};
