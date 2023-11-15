import * as yup from 'yup';

export const weatherAlertValidationSchema = yup.object().shape({
  alert_type: yup.string().required(),
  severity: yup.string().required(),
  weather_alert_location: yup.string().required(),
  alert_time: yup.date().required(),
  alert_message: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
