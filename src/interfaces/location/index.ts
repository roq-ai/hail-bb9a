import { WeatherDataInterface } from 'interfaces/weather-data';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  user_id: string;
  latitude: string;
  longitude: string;
  city: string;
  state: string;
  country: string;
  created_at?: any;
  updated_at?: any;
  weather_data?: WeatherDataInterface[];
  user?: UserInterface;
  _count?: {
    weather_data?: number;
  };
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  latitude?: string;
  longitude?: string;
  city?: string;
  state?: string;
  country?: string;
}
