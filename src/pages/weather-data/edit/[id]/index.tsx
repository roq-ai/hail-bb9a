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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useWeatherDataFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { weatherDataValidationSchema } from 'validationSchema/weather-data';
import { WeatherDataInterface } from 'interfaces/weather-data';
import { LocationInterface } from 'interfaces/location';

function WeatherDataEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'weather_data',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useWeatherDataFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: WeatherDataInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.weather_data.update({
        data: values as RoqTypes.weather_data,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/weather-data');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<WeatherDataInterface>({
    initialValues: data,
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
              label: 'Update Weather Data',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Weather Data
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
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
    operation: AccessOperationEnum.UPDATE,
  }),
)(WeatherDataEditPage);
