import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { requestForecast } from "@/api/requestForecast";
import { CitySelector } from "@/components/containers/city-selector";
import { StartScreenLayout } from "@/components/layouts/start-screen-layout";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useCityStore } from "@/zustand/use-city-store";

export const SelectCity = () => {
  const updateCity = useCityStore((state) => state.updateCity);
  const selectedCity = useCityStore((state) => state.city);
  const navigate = useNavigate();

  const { refetch: getForecast, isFetching } = useQuery({
    queryKey: ["forecast"],
    queryFn: () => requestForecast(new Date().getTime()),
    enabled: false,
  });

  return (
    <StartScreenLayout backgroundUrl="/countries.jpg">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Pick your city
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter city name to get weather forecast
          </p>
        </div>
        <CitySelector value={selectedCity} onSelect={updateCity} />
        <Button
          onClick={() => getForecast().then(() => navigate(ROUTES.forecast))}
          disabled={selectedCity === "" || isFetching}
        >
          {isFetching ? "Loading..." : "Get Forecast"}
        </Button>
      </div>
    </StartScreenLayout>
  );
};
