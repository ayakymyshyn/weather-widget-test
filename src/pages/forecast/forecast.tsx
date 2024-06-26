import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useQueryClient } from "@tanstack/react-query";

import { WeatherCard } from "@/components/containers/weather-card";
import { buttonVariants } from "@/components/ui/button";
import { ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Daytime } from "@/types/daytime";
import { Weather } from "@/types/weather";
import { useCityStore } from "@/zustand/use-city-store";
import { useUserStore } from "@/zustand/use-user-store";

export const Forecast = () => {
  const city = useCityStore((state) => state.city);
  const email = useUserStore((state) => state.email);
  const queryClient = useQueryClient();
  const forecastData: Array<Partial<Record<Daytime, Weather>>> | undefined =
    queryClient.getQueryData(["forecast"]);

  return (
    <>
      <span
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        {email}
      </span>
      {forecastData?.map((day, i) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        return (
          // In real-world we would get some unique ID's, which can be used here
          // Currently, I'm "constructing" keys in some weird way
          // I know, thats not the best solution
          // But since we are not using real API
          // I figured we can stick with it for now
          <div
            key={Object.values(day)
              .map((value) => value.temperature)
              .join("")}
            className="overflow-x-scroll"
          >
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 p-5 pb-10">
              {i === 0 ? "Today" : "Tomorrow"}
            </h2>
            <ScrollArea className="w-96 whitespace-nowrap rounded-md ">
              <div className="flex w-max space-x-4 p-4 overflow-x-scroll">
                {Object.entries(day).map(([daytime, weather]) => (
                  <figure
                    key={weather.temperature + weather.type}
                    className="shrink-0"
                  >
                    <WeatherCard
                      city={city}
                      key={weather.temperature + weather.type}
                      temperature={weather.temperature}
                      weather={weather.type}
                      daytime={daytime as Daytime}
                      date={i === 0 ? new Date().getTime() : tomorrow.getTime()}
                    />
                  </figure>
                ))}
                <ScrollBar orientation="horizontal" />
              </div>
            </ScrollArea>
          </div>
        );
      })}
    </>
  );
};
