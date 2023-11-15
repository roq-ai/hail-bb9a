/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type { Prisma, business, location, user, user_preference, weather_alert, weather_data } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface BusinessSDK {
  create: <
    T extends Prisma.businessCreateArgs,
    R extends CheckSelect<T, business, Prisma.businessGetPayload<T>>,
    U extends Omit<Prisma.businessCreateArgs, 'data'> & {
      data: Omit<Prisma.businessUncheckedCreateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.businessCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.businessCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.businessUpdateArgs,
    R extends Prisma.businessGetPayload<T>,
    U extends Omit<Prisma.businessUpdateArgs, 'data'> & {
      data: Omit<Prisma.businessUncheckedUpdateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.businessUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.businessUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.businessUpsertArgs, R extends Prisma.businessGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.businessUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.businessDeleteArgs, R extends Prisma.businessGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.businessDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.businessDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.businessDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.businessFindManyArgs, R extends GetFindResult<Prisma.$businessPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.businessFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.businessCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.businessCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.businessFindManyArgs,
    R extends GetFindResult<Prisma.$businessPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.businessFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.businessFindFirstArgs, R extends GetFindResult<Prisma.$businessPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.businessFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface LocationSDK {
  create: <
    T extends Prisma.locationCreateArgs,
    R extends CheckSelect<T, location, Prisma.locationGetPayload<T>>,
    U extends Omit<Prisma.locationCreateArgs, 'data'> & {
      data: Omit<Prisma.locationUncheckedCreateInput, 'weather_data'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.locationCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.locationCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.locationUpdateArgs,
    R extends Prisma.locationGetPayload<T>,
    U extends Omit<Prisma.locationUpdateArgs, 'data'> & {
      data: Omit<Prisma.locationUncheckedUpdateInput, 'weather_data'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.locationUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.locationUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.locationUpsertArgs, R extends Prisma.locationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.locationUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.locationDeleteArgs, R extends Prisma.locationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.locationDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.locationDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.locationDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.locationFindManyArgs, R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.locationFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.locationCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.locationCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.locationFindManyArgs,
    R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.locationFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.locationFindFirstArgs, R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.locationFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <
    T extends Prisma.userCreateArgs,
    R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
    U extends Omit<Prisma.userCreateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedCreateInput, 'location' | 'user_preference' | 'weather_alert'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.userUpdateArgs,
    R extends Prisma.userGetPayload<T>,
    U extends Omit<Prisma.userUpdateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedUpdateInput, 'location' | 'user_preference' | 'weather_alert'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface User_preferenceSDK {
  create: <
    T extends Prisma.user_preferenceCreateArgs,
    R extends CheckSelect<T, user_preference, Prisma.user_preferenceGetPayload<T>>,
    U extends Omit<Prisma.user_preferenceCreateArgs, 'data'> & {
      data: Prisma.user_preferenceUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.user_preferenceCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.user_preferenceCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.user_preferenceUpdateArgs,
    R extends Prisma.user_preferenceGetPayload<T>,
    U extends Omit<Prisma.user_preferenceUpdateArgs, 'data'> & {
      data: Prisma.user_preferenceUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.user_preferenceUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.user_preferenceUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.user_preferenceUpsertArgs, R extends Prisma.user_preferenceGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.user_preferenceUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.user_preferenceDeleteArgs, R extends Prisma.user_preferenceGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.user_preferenceDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.user_preferenceDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.user_preferenceDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.user_preferenceFindManyArgs,
    R extends GetFindResult<Prisma.$user_preferencePayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.user_preferenceFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.user_preferenceCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.user_preferenceCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.user_preferenceFindManyArgs,
    R extends GetFindResult<Prisma.$user_preferencePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.user_preferenceFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.user_preferenceFindFirstArgs,
    R extends GetFindResult<Prisma.$user_preferencePayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.user_preferenceFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Weather_alertSDK {
  create: <
    T extends Prisma.weather_alertCreateArgs,
    R extends CheckSelect<T, weather_alert, Prisma.weather_alertGetPayload<T>>,
    U extends Omit<Prisma.weather_alertCreateArgs, 'data'> & {
      data: Prisma.weather_alertUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.weather_alertCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.weather_alertCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.weather_alertUpdateArgs,
    R extends Prisma.weather_alertGetPayload<T>,
    U extends Omit<Prisma.weather_alertUpdateArgs, 'data'> & {
      data: Prisma.weather_alertUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.weather_alertUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.weather_alertUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.weather_alertUpsertArgs, R extends Prisma.weather_alertGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.weather_alertUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.weather_alertDeleteArgs, R extends Prisma.weather_alertGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.weather_alertDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.weather_alertDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.weather_alertDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.weather_alertFindManyArgs,
    R extends GetFindResult<Prisma.$weather_alertPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.weather_alertFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.weather_alertCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.weather_alertCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.weather_alertFindManyArgs,
    R extends GetFindResult<Prisma.$weather_alertPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.weather_alertFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.weather_alertFindFirstArgs,
    R extends GetFindResult<Prisma.$weather_alertPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.weather_alertFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Weather_dataSDK {
  create: <
    T extends Prisma.weather_dataCreateArgs,
    R extends CheckSelect<T, weather_data, Prisma.weather_dataGetPayload<T>>,
    U extends Omit<Prisma.weather_dataCreateArgs, 'data'> & {
      data: Prisma.weather_dataUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.weather_dataCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.weather_dataCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.weather_dataUpdateArgs,
    R extends Prisma.weather_dataGetPayload<T>,
    U extends Omit<Prisma.weather_dataUpdateArgs, 'data'> & {
      data: Prisma.weather_dataUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.weather_dataUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.weather_dataUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.weather_dataUpsertArgs, R extends Prisma.weather_dataGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.weather_dataUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.weather_dataDeleteArgs, R extends Prisma.weather_dataGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.weather_dataDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.weather_dataDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.weather_dataDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.weather_dataFindManyArgs,
    R extends GetFindResult<Prisma.$weather_dataPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.weather_dataFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.weather_dataCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.weather_dataCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.weather_dataFindManyArgs,
    R extends GetFindResult<Prisma.$weather_dataPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.weather_dataFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.weather_dataFindFirstArgs,
    R extends GetFindResult<Prisma.$weather_dataPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.weather_dataFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public business!: BusinessSDK;

  public location!: LocationSDK;

  public user!: UserSDK;

  public user_preference!: User_preferenceSDK;

  public weather_alert!: Weather_alertSDK;

  public weather_data!: Weather_dataSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.business = {
      create: async function createBusiness<
        T extends Prisma.businessCreateArgs,
        R extends CheckSelect<T, business, Prisma.businessGetPayload<T>>,
        U extends Omit<Prisma.businessCreateArgs, 'data'> & {
          data: Omit<Prisma.businessUncheckedCreateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyBusiness<
        T extends Prisma.businessCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.businessCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/business/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateBusiness<
        T extends Prisma.businessUpdateArgs,
        R extends Prisma.businessGetPayload<T>,
        U extends Omit<Prisma.businessUpdateArgs, 'data'> & {
          data: Omit<Prisma.businessUncheckedUpdateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyBusiness<
        T extends Prisma.businessUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.businessUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/business/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertBusiness<
        T extends Prisma.businessUpsertArgs,
        R extends Prisma.businessGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.businessUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteBusiness<
        T extends Prisma.businessDeleteArgs,
        R extends Prisma.businessGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.businessDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyBusiness<
        T extends Prisma.businessDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.businessDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyBusiness<
        T extends Prisma.businessFindManyArgs,
        R extends GetFindResult<Prisma.$businessPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.businessFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countBusiness<T extends Prisma.businessCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.businessCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/business/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountBusiness<
        T extends Prisma.businessFindManyArgs,
        R extends GetFindResult<Prisma.$businessPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.businessFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.business.findMany(args, options),
          ctx.business.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstBusiness<
        T extends Prisma.businessFindFirstArgs,
        R extends GetFindResult<Prisma.$businessPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.businessFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.location = {
      create: async function createLocation<
        T extends Prisma.locationCreateArgs,
        R extends CheckSelect<T, location, Prisma.locationGetPayload<T>>,
        U extends Omit<Prisma.locationCreateArgs, 'data'> & {
          data: Omit<Prisma.locationUncheckedCreateInput, 'weather_data'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/location/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyLocation<
        T extends Prisma.locationCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.locationCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/location/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateLocation<
        T extends Prisma.locationUpdateArgs,
        R extends Prisma.locationGetPayload<T>,
        U extends Omit<Prisma.locationUpdateArgs, 'data'> & {
          data: Omit<Prisma.locationUncheckedUpdateInput, 'weather_data'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/location/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyLocation<
        T extends Prisma.locationUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.locationUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/location/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertLocation<
        T extends Prisma.locationUpsertArgs,
        R extends Prisma.locationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.locationUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/location/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteLocation<
        T extends Prisma.locationDeleteArgs,
        R extends Prisma.locationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.locationDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/location/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyLocation<
        T extends Prisma.locationDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.locationDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/location/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyLocation<
        T extends Prisma.locationFindManyArgs,
        R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.locationFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/location/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countLocation<T extends Prisma.locationCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.locationCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/location/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountLocation<
        T extends Prisma.locationFindManyArgs,
        R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.locationFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.location.findMany(args, options),
          ctx.location.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstLocation<
        T extends Prisma.locationFindFirstArgs,
        R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.locationFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/location/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
        U extends Omit<Prisma.userCreateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedCreateInput, 'location' | 'user_preference' | 'weather_alert'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<
        T extends Prisma.userUpdateArgs,
        R extends Prisma.userGetPayload<T>,
        U extends Omit<Prisma.userUpdateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedUpdateInput, 'location' | 'user_preference' | 'weather_alert'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user_preference = {
      create: async function createUser_preference<
        T extends Prisma.user_preferenceCreateArgs,
        R extends CheckSelect<T, user_preference, Prisma.user_preferenceGetPayload<T>>,
        U extends Omit<Prisma.user_preferenceCreateArgs, 'data'> & {
          data: Prisma.user_preferenceUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user_preference/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser_preference<
        T extends Prisma.user_preferenceCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.user_preferenceCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user_preference/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser_preference<
        T extends Prisma.user_preferenceUpdateArgs,
        R extends Prisma.user_preferenceGetPayload<T>,
        U extends Omit<Prisma.user_preferenceUpdateArgs, 'data'> & {
          data: Prisma.user_preferenceUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user_preference/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser_preference<
        T extends Prisma.user_preferenceUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.user_preferenceUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user_preference/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser_preference<
        T extends Prisma.user_preferenceUpsertArgs,
        R extends Prisma.user_preferenceGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.user_preferenceUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user_preference/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser_preference<
        T extends Prisma.user_preferenceDeleteArgs,
        R extends Prisma.user_preferenceGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.user_preferenceDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user_preference/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser_preference<
        T extends Prisma.user_preferenceDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.user_preferenceDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user_preference/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser_preference<
        T extends Prisma.user_preferenceFindManyArgs,
        R extends GetFindResult<Prisma.$user_preferencePayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.user_preferenceFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user_preference/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser_preference<T extends Prisma.user_preferenceCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.user_preferenceCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user_preference/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser_preference<
        T extends Prisma.user_preferenceFindManyArgs,
        R extends GetFindResult<Prisma.$user_preferencePayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.user_preferenceFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user_preference.findMany(args, options),
          ctx.user_preference.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser_preference<
        T extends Prisma.user_preferenceFindFirstArgs,
        R extends GetFindResult<Prisma.$user_preferencePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.user_preferenceFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user_preference/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.weather_alert = {
      create: async function createWeather_alert<
        T extends Prisma.weather_alertCreateArgs,
        R extends CheckSelect<T, weather_alert, Prisma.weather_alertGetPayload<T>>,
        U extends Omit<Prisma.weather_alertCreateArgs, 'data'> & {
          data: Prisma.weather_alertUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/weather_alert/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyWeather_alert<
        T extends Prisma.weather_alertCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.weather_alertCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/weather_alert/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateWeather_alert<
        T extends Prisma.weather_alertUpdateArgs,
        R extends Prisma.weather_alertGetPayload<T>,
        U extends Omit<Prisma.weather_alertUpdateArgs, 'data'> & {
          data: Prisma.weather_alertUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/weather_alert/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyWeather_alert<
        T extends Prisma.weather_alertUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.weather_alertUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/weather_alert/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertWeather_alert<
        T extends Prisma.weather_alertUpsertArgs,
        R extends Prisma.weather_alertGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.weather_alertUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/weather_alert/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteWeather_alert<
        T extends Prisma.weather_alertDeleteArgs,
        R extends Prisma.weather_alertGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.weather_alertDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_alert/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyWeather_alert<
        T extends Prisma.weather_alertDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.weather_alertDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_alert/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyWeather_alert<
        T extends Prisma.weather_alertFindManyArgs,
        R extends GetFindResult<Prisma.$weather_alertPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.weather_alertFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_alert/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countWeather_alert<T extends Prisma.weather_alertCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.weather_alertCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/weather_alert/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountWeather_alert<
        T extends Prisma.weather_alertFindManyArgs,
        R extends GetFindResult<Prisma.$weather_alertPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.weather_alertFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.weather_alert.findMany(args, options),
          ctx.weather_alert.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstWeather_alert<
        T extends Prisma.weather_alertFindFirstArgs,
        R extends GetFindResult<Prisma.$weather_alertPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.weather_alertFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_alert/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.weather_data = {
      create: async function createWeather_data<
        T extends Prisma.weather_dataCreateArgs,
        R extends CheckSelect<T, weather_data, Prisma.weather_dataGetPayload<T>>,
        U extends Omit<Prisma.weather_dataCreateArgs, 'data'> & {
          data: Prisma.weather_dataUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/weather_data/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyWeather_data<
        T extends Prisma.weather_dataCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.weather_dataCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/weather_data/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateWeather_data<
        T extends Prisma.weather_dataUpdateArgs,
        R extends Prisma.weather_dataGetPayload<T>,
        U extends Omit<Prisma.weather_dataUpdateArgs, 'data'> & {
          data: Prisma.weather_dataUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/weather_data/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyWeather_data<
        T extends Prisma.weather_dataUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.weather_dataUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/weather_data/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertWeather_data<
        T extends Prisma.weather_dataUpsertArgs,
        R extends Prisma.weather_dataGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.weather_dataUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/weather_data/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteWeather_data<
        T extends Prisma.weather_dataDeleteArgs,
        R extends Prisma.weather_dataGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.weather_dataDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_data/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyWeather_data<
        T extends Prisma.weather_dataDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.weather_dataDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_data/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyWeather_data<
        T extends Prisma.weather_dataFindManyArgs,
        R extends GetFindResult<Prisma.$weather_dataPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.weather_dataFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_data/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countWeather_data<T extends Prisma.weather_dataCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.weather_dataCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/weather_data/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountWeather_data<
        T extends Prisma.weather_dataFindManyArgs,
        R extends GetFindResult<Prisma.$weather_dataPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.weather_dataFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.weather_data.findMany(args, options),
          ctx.weather_data.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstWeather_data<
        T extends Prisma.weather_dataFindFirstArgs,
        R extends GetFindResult<Prisma.$weather_dataPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.weather_dataFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/weather_data/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
