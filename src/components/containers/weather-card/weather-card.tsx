import { CloudRain, SunIcon, Cloud } from "lucide-react";

import { Card } from "@/components/ui/card";
import { WeatherTypes } from "@/types/weather";
import { Daytime } from "@/types/daytime";

interface WeatherCardProps {
  date: number;
  city: string;
  temperature: number;
  weather: WeatherTypes;
  daytime: Daytime;
}

const iconByWeather: Record<
WeatherTypes,
  JSX.Element
> = {
  rain: <CloudRain />,
  sunny: <SunIcon />,
  clouds: <Cloud />,
};

export function WeatherCard({
  date,
  city,
  temperature,
  weather,
  daytime
}: WeatherCardProps) {
  return (
    <>
      <Card className="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:h-[25rem] p-2">
        <div className="absolute " />
        <div>
          <div className="flex justify-between text-lg gap-x-3">
            <span>
              {new Date(date).toLocaleDateString("en-US")}
            </span>
            <span className="uppercase">{daytime}</span>
          </div>
          <div className="text-md mt-2 flex">
            <span>{city}</span>
          </div>
        </div>
        <div className="flex justify-center py-7 text-8xl md:py-10">
          {temperature}&deg;
        </div>
        <div>
          {iconByWeather[weather]}
          <div>{weather}</div>
        </div>
      </Card>
    </>
  );
}
