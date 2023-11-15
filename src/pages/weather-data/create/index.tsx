import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { weatherDataValidationSchema } from 'validationSchema/weather-data';
import { LocationInterface } from 'interfaces/location';
import { WeatherDataInterface } from 'interfaces/weather-data';

function WeatherDataCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: WeatherDataInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.weather_data.create({ data: values as RoqTypes.weather_data });
      resetForm();
      router.push('/weather-data');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<WeatherDataInterface>({
    initialValues: {
      temperature: 0,
      humidity: 0,
      wind_speed: 0,
      precipitation: 0,
      weather_condition: '',
      location_id: (router.query.location_id as string) ?? null,
    },
    validationSchema: weatherDataValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Weather Data',
              link: '/weather-data',
            },
            {
              label: 'Create Weather Data',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Weather Data
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Temperature"
            formControlProps={{
              id: 'temperature',
              isInvalid: !!formik.errors?.temperature,
            }}
            name="temperature"
            error={formik.errors?.temperature}
            value={formik.values?.temperature}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('temperature', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Humidity"
            formControlProps={{
              id: 'humidity',
              isInvalid: !!formik.errors?.humidity,
            }}
            name="humidity"
            error={formik.errors?.humidity}
            value={formik.values?.humidity}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('humidity', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Wind Speed"
            formControlProps={{
              id: 'wind_speed',
              isInvalid: !!formik.errors?.wind_speed,
            }}
            name="wind_speed"
            error={formik.errors?.wind_speed}
            value={formik.values?.wind_speed}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('wind_speed', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Precipitation"
            formControlProps={{
              id: 'precipitation',
              isInvalid: !!formik.errors?.precipitation,
            }}
            name="precipitation"
            error={formik.errors?.precipitation}
            value={formik.values?.precipitation}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('precipitation', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.weather_condition}
            label={'Weather Condition'}
            props={{
              name: 'weather_condition',
              placeholder: 'Weather Condition',
              value: formik.values?.weather_condition,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<LocationInterface>
            formik={formik}
            name={'location_id'}
            label={'Select Location'}
            placeholder={'Select Location'}
            fetcher={() => roqClient.location.findManyWithCount({})}
            labelField={'latitude'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/weather-data')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'weather_data',
    operation: AccessOperationEnum.CREATE,
  }),
)(WeatherDataCreatePage);
