import * as FeatherIcons from 'react-icons/fi';

import { useGetWeather } from '@/hooks/useWeather';

export const WeatherStats = ({ cityName }: { cityName: string }) => {
  const { city, temp, icon } = useGetWeather(cityName);
  // @ts-expect-error
  const WeatherIcon = FeatherIcons[icon];

  return (
    <div className="grid grid-flow-col items-center gap-4 font-display text-sm">
      <span>{city ? city : '-'}</span>
      <span>{temp ? temp : '-'}°C</span>
      {icon && <WeatherIcon />}
    </div>
  );
};
