import * as yup from 'yup';

export const userPreferenceValidationSchema = yup.object().shape({
  weather_alert_type: yup.string().required(),
  alert_frequency: yup.number().integer().required(),
  alert_delivery_method: yup.string().required(),
  alert_time_preference: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
