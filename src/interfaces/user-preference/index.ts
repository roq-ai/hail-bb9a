import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface UserPreferenceInterface {
  id?: string;
  user_id: string;
  weather_alert_type: string;
  alert_frequency: number;
  alert_delivery_method: string;
  alert_time_preference: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface UserPreferenceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  weather_alert_type?: string;
  alert_delivery_method?: string;
}
