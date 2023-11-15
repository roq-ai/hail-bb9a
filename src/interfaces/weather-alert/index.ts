import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface WeatherAlertInterface {
  id?: string;
  user_id: string;
  alert_type: string;
  severity: string;
  weather_alert_location: string;
  alert_time: any;
  alert_message: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface WeatherAlertGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  alert_type?: string;
  severity?: string;
  weather_alert_location?: string;
  alert_message?: string;
}
