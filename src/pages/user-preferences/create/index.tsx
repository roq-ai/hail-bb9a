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

import { userPreferenceValidationSchema } from 'validationSchema/user-preferences';
import { UserInterface } from 'interfaces/user';
import { UserPreferenceInterface } from 'interfaces/user-preference';

function UserPreferenceCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: UserPreferenceInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.user_preference.create({ data: values as RoqTypes.user_preference });
      resetForm();
      router.push('/user-preferences');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<UserPreferenceInterface>({
    initialValues: {
      weather_alert_type: '',
      alert_frequency: 0,
      alert_delivery_method: '',
      alert_time_preference: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: userPreferenceValidationSchema,
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
              label: 'User Preferences',
              link: '/user-preferences',
            },
            {
              label: 'Create User Preference',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create User Preference
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.weather_alert_type}
            label={'Weather Alert Type'}
            props={{
              name: 'weather_alert_type',
              placeholder: 'Weather Alert Type',
              value: formik.values?.weather_alert_type,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Alert Frequency"
            formControlProps={{
              id: 'alert_frequency',
              isInvalid: !!formik.errors?.alert_frequency,
            }}
            name="alert_frequency"
            error={formik.errors?.alert_frequency}
            value={formik.values?.alert_frequency}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('alert_frequency', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.alert_delivery_method}
            label={'Alert Delivery Method'}
            props={{
              name: 'alert_delivery_method',
              placeholder: 'Alert Delivery Method',
              value: formik.values?.alert_delivery_method,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="alert_time_preference" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Alert Time Preference
            </FormLabel>
            <DatePicker
              selected={formik.values?.alert_time_preference ? new Date(formik.values?.alert_time_preference) : null}
              onChange={(value: Date) => formik.setFieldValue('alert_time_preference', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
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
              onClick={() => router.push('/user-preferences')}
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
    entity: 'user_preference',
    operation: AccessOperationEnum.CREATE,
  }),
)(UserPreferenceCreatePage);
