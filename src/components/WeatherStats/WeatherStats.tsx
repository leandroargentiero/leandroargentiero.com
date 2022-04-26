import * as FeatherIcons from 'react-icons/fi';

import { useGetWeather } from '@/hooks/useWeather';
import { Tooltip } from '../Tooltip';

export const WeatherStats = ({ cityName }: { cityName: string }) => {
  const { city, temp, icon, currentWeather } = useGetWeather(cityName);
  // @ts-expect-error
  const WeatherIcon = FeatherIcons[icon];

  return (
    <Tooltip content={currentWeather?.description} side="bottom">
      <div className="grid grid-flow-col items-center gap-4 font-display text-xs text-gray-800 sm:text-sm">
        <span>{city ? city : '-'}</span>
        <span>{temp ? temp : '-'}°C</span>
        {icon && <WeatherIcon />}
      </div>
    </Tooltip>
  );
};
