import * as yup from 'yup';

export const weatherDataValidationSchema = yup.object().shape({
  temperature: yup.number().integer().required(),
  humidity: yup.number().integer().required(),
  wind_speed: yup.number().integer().required(),
  precipitation: yup.number().integer().required(),
  weather_condition: yup.string().required(),
  location_id: yup.string().nullable().required(),
});
