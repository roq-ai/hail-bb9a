import { LocationInterface } from 'interfaces/location';
import { GetQueryInterface } from 'interfaces';

export interface WeatherDataInterface {
  id?: string;
  location_id: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  precipitation: number;
  weather_condition: string;
  created_at?: any;
  updated_at?: any;

  location?: LocationInterface;
  _count?: {};
}

export interface WeatherDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  location_id?: string;
  weather_condition?: string;
}
