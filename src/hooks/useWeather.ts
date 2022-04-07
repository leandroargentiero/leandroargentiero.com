import useSWR from "swr";

import { HOMETOWN_LAT, HOMETOWN_LON } from "@/constants/coordinates";
import { fetcher } from "./fetcher";

export const useGetWeather = (city: string) => {
  if (!city) {
    throw new Error("City name is required");
  }

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${HOMETOWN_LAT}&lon=${HOMETOWN_LON}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
    fetcher
  );

  const temp = Math.round(data?.main?.temp);
  const currentWeather = data?.weather[0]?.main;
  const icon = mapWeatherToIconName(currentWeather);
  console.log(data?.main?.temp);
  return { city, temp, icon, error };
};

// maps to naming of the feather icon set
const mapWeatherToIconName = (weather: string) => {
  switch (weather) {
    // group 2xx
    case "Thunderstorm":
      return "FiCloudLightning";
    // group 3xx
    case "Drizzle":
      return "FiCloudDrizzle";
    // group 5xx
    case "Rain":
      return "FiCloudRain";
    // group 6xx
    case "Snow":
      return "FiCloudSnow";
    // group 7xx
    case "Mist":
      return "FiCloud";
    // group 7xx
    case "Fog":
      return "FiCloud";
    // group 8xx
    case "Clouds":
      return "FiCloud";
    // group 8xx
    default:
      return "FiSun";
  }
};
