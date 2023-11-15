/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model business
 *
 */
export type business = $Result.DefaultSelection<Prisma.$businessPayload>;
/**
 * Model location
 *
 */
export type location = $Result.DefaultSelection<Prisma.$locationPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model user_preference
 *
 */
export type user_preference = $Result.DefaultSelection<Prisma.$user_preferencePayload>;
/**
 * Model weather_alert
 *
 */
export type weather_alert = $Result.DefaultSelection<Prisma.$weather_alertPayload>;
/**
 * Model weather_data
 *
 */
export type weather_data = $Result.DefaultSelection<Prisma.$weather_dataPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Businesses
 * const businesses = await prisma.business.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **business** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   */
  get business(): Prisma.businessDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **location** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Locations
   * const locations = await prisma.location.findMany()
   * ```
   */
  get location(): Prisma.locationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.user_preference`: Exposes CRUD operations for the **user_preference** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_preferences
   * const user_preferences = await prisma.user_preference.findMany()
   * ```
   */
  get user_preference(): Prisma.user_preferenceDelegate<ExtArgs>;

  /**
   * `prisma.weather_alert`: Exposes CRUD operations for the **weather_alert** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Weather_alerts
   * const weather_alerts = await prisma.weather_alert.findMany()
   * ```
   */
  get weather_alert(): Prisma.weather_alertDelegate<ExtArgs>;

  /**
   * `prisma.weather_data`: Exposes CRUD operations for the **weather_data** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Weather_data
   * const weather_data = await prisma.weather_data.findMany()
   * ```
   */
  get weather_data(): Prisma.weather_dataDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    business: 'business';
    location: 'location';
    user: 'user';
    user_preference: 'user_preference';
    weather_alert: 'weather_alert';
    weather_data: 'weather_data';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'business' | 'location' | 'user' | 'user_preference' | 'weather_alert' | 'weather_data';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      business: {
        payload: Prisma.$businessPayload<ExtArgs>;
        fields: Prisma.businessFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.businessFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.businessFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findFirst: {
            args: Prisma.businessFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.businessFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findMany: {
            args: Prisma.businessFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[];
          };
          create: {
            args: Prisma.businessCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          createMany: {
            args: Prisma.businessCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.businessDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          update: {
            args: Prisma.businessUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          deleteMany: {
            args: Prisma.businessDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.businessUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.businessUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness>;
          };
          groupBy: {
            args: Prisma.businessGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BusinessGroupByOutputType>[];
          };
          count: {
            args: Prisma.businessCountArgs<ExtArgs>;
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number;
          };
        };
      };
      location: {
        payload: Prisma.$locationPayload<ExtArgs>;
        fields: Prisma.locationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.locationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.locationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload>;
          };
          findFirst: {
            args: Prisma.locationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.locationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload>;
          };
          findMany: {
            args: Prisma.locationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload>[];
          };
          create: {
            args: Prisma.locationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload>;
          };
          createMany: {
            args: Prisma.locationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.locationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload>;
          };
          update: {
            args: Prisma.locationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload>;
          };
          deleteMany: {
            args: Prisma.locationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.locationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.locationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$locationPayload>;
          };
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLocation>;
          };
          groupBy: {
            args: Prisma.locationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LocationGroupByOutputType>[];
          };
          count: {
            args: Prisma.locationCountArgs<ExtArgs>;
            result: $Utils.Optional<LocationCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      user_preference: {
        payload: Prisma.$user_preferencePayload<ExtArgs>;
        fields: Prisma.user_preferenceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_preferenceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_preferenceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload>;
          };
          findFirst: {
            args: Prisma.user_preferenceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_preferenceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload>;
          };
          findMany: {
            args: Prisma.user_preferenceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload>[];
          };
          create: {
            args: Prisma.user_preferenceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload>;
          };
          createMany: {
            args: Prisma.user_preferenceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.user_preferenceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload>;
          };
          update: {
            args: Prisma.user_preferenceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload>;
          };
          deleteMany: {
            args: Prisma.user_preferenceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.user_preferenceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.user_preferenceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_preferencePayload>;
          };
          aggregate: {
            args: Prisma.User_preferenceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_preference>;
          };
          groupBy: {
            args: Prisma.user_preferenceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_preferenceGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_preferenceCountArgs<ExtArgs>;
            result: $Utils.Optional<User_preferenceCountAggregateOutputType> | number;
          };
        };
      };
      weather_alert: {
        payload: Prisma.$weather_alertPayload<ExtArgs>;
        fields: Prisma.weather_alertFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.weather_alertFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.weather_alertFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload>;
          };
          findFirst: {
            args: Prisma.weather_alertFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.weather_alertFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload>;
          };
          findMany: {
            args: Prisma.weather_alertFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload>[];
          };
          create: {
            args: Prisma.weather_alertCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload>;
          };
          createMany: {
            args: Prisma.weather_alertCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.weather_alertDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload>;
          };
          update: {
            args: Prisma.weather_alertUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload>;
          };
          deleteMany: {
            args: Prisma.weather_alertDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.weather_alertUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.weather_alertUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_alertPayload>;
          };
          aggregate: {
            args: Prisma.Weather_alertAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWeather_alert>;
          };
          groupBy: {
            args: Prisma.weather_alertGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Weather_alertGroupByOutputType>[];
          };
          count: {
            args: Prisma.weather_alertCountArgs<ExtArgs>;
            result: $Utils.Optional<Weather_alertCountAggregateOutputType> | number;
          };
        };
      };
      weather_data: {
        payload: Prisma.$weather_dataPayload<ExtArgs>;
        fields: Prisma.weather_dataFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.weather_dataFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.weather_dataFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload>;
          };
          findFirst: {
            args: Prisma.weather_dataFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.weather_dataFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload>;
          };
          findMany: {
            args: Prisma.weather_dataFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload>[];
          };
          create: {
            args: Prisma.weather_dataCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload>;
          };
          createMany: {
            args: Prisma.weather_dataCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.weather_dataDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload>;
          };
          update: {
            args: Prisma.weather_dataUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload>;
          };
          deleteMany: {
            args: Prisma.weather_dataDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.weather_dataUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.weather_dataUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$weather_dataPayload>;
          };
          aggregate: {
            args: Prisma.Weather_dataAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWeather_data>;
          };
          groupBy: {
            args: Prisma.weather_dataGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Weather_dataGroupByOutputType>[];
          };
          count: {
            args: Prisma.weather_dataCountArgs<ExtArgs>;
            result: $Utils.Optional<Weather_dataCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    user: number;
  };

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BusinessCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    weather_data: number;
  };

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weather_data?: boolean | LocationCountOutputTypeCountWeather_dataArgs;
  };

  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountWeather_dataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: weather_dataWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    location: number;
    user_preference: number;
    weather_alert: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | UserCountOutputTypeCountLocationArgs;
    user_preference?: boolean | UserCountOutputTypeCountUser_preferenceArgs;
    weather_alert?: boolean | UserCountOutputTypeCountWeather_alertArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: locationWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_preferenceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_preferenceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeather_alertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: weather_alertWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  export type BusinessMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BusinessMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BusinessCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    country: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BusinessMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BusinessMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BusinessCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business to aggregate.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned businesses
     **/
    _count?: true | BusinessCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BusinessMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BusinessMaxAggregateInputType;
  };

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>;
  };

  export type businessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: businessWhereInput;
    orderBy?: businessOrderByWithAggregationInput | businessOrderByWithAggregationInput[];
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum;
    having?: businessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessCountAggregateInputType | true;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
  };

  export type BusinessGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  type GetBusinessGroupByPayload<T extends businessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BusinessGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
          : GetScalarType<T[P], BusinessGroupByOutputType[P]>;
      }
    >
  >;

  export type businessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        zip_code?: boolean;
        country?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | business$userArgs<ExtArgs>;
        _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business']
    >;

  export type businessSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    country?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type businessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | business$userArgs<ExtArgs>;
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $businessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        country: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business']
    >;
    composites: {};
  };

  type businessGetPayload<S extends boolean | null | undefined | businessDefaultArgs> = $Result.GetResult<
    Prisma.$businessPayload,
    S
  >;

  type businessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    businessFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BusinessCountAggregateInputType | true;
  };

  export interface businessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business']; meta: { name: 'business' } };
    /**
     * Find zero or one Business that matches the filter.
     * @param {businessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends businessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, businessFindUniqueArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {businessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends businessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends businessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends businessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     *
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends businessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business.
     * @param {businessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     *
     **/
    create<T extends businessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, businessCreateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Businesses.
     *     @param {businessCreateManyArgs} args - Arguments to create many Businesses.
     *     @example
     *     // Create many Businesses
     *     const business = await prisma.business.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends businessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business.
     * @param {businessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     *
     **/
    delete<T extends businessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, businessDeleteArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Business.
     * @param {businessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends businessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Businesses.
     * @param {businessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends businessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends businessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business.
     * @param {businessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     **/
    upsert<T extends businessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpsertArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
     **/
    count<T extends businessCountArgs>(
      args?: Subset<T, businessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BusinessAggregateArgs>(
      args: Subset<T, BusinessAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusinessAggregateType<T>>;

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends businessGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: businessGroupByArgs['orderBy'] }
        : { orderBy?: businessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, businessGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business model
     */
    readonly fields: businessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__businessClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends business$userArgs<ExtArgs> = {}>(
      args?: Subset<T, business$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business model
   */
  interface businessFieldRefs {
    readonly id: FieldRef<'business', 'String'>;
    readonly description: FieldRef<'business', 'String'>;
    readonly address: FieldRef<'business', 'String'>;
    readonly city: FieldRef<'business', 'String'>;
    readonly state: FieldRef<'business', 'String'>;
    readonly zip_code: FieldRef<'business', 'String'>;
    readonly country: FieldRef<'business', 'String'>;
    readonly name: FieldRef<'business', 'String'>;
    readonly created_at: FieldRef<'business', 'DateTime'>;
    readonly updated_at: FieldRef<'business', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business findUnique
   */
  export type businessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findUniqueOrThrow
   */
  export type businessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findFirst
   */
  export type businessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findFirstOrThrow
   */
  export type businessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findMany
   */
  export type businessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which businesses to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business create
   */
  export type businessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to create a business.
     */
    data: XOR<businessCreateInput, businessUncheckedCreateInput>;
  };

  /**
   * business createMany
   */
  export type businessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business update
   */
  export type businessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to update a business.
     */
    data: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
    /**
     * Choose, which business to update.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business updateMany
   */
  export type businessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>;
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput;
  };

  /**
   * business upsert
   */
  export type businessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The filter to search for the business to update in case it exists.
     */
    where: businessWhereUniqueInput;
    /**
     * In case the business found by the `where` argument doesn't exist, create a new business with this data.
     */
    create: XOR<businessCreateInput, businessUncheckedCreateInput>;
    /**
     * In case the business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
  };

  /**
   * business delete
   */
  export type businessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter which business to delete.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business deleteMany
   */
  export type businessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which businesses to delete
     */
    where?: businessWhereInput;
  };

  /**
   * business.user
   */
  export type business$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * business without action
   */
  export type businessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
  };

  /**
   * Model location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null;
    _min: LocationMinAggregateOutputType | null;
    _max: LocationMaxAggregateOutputType | null;
  };

  export type LocationMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    latitude: string | null;
    longitude: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LocationMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    latitude: string | null;
    longitude: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LocationCountAggregateOutputType = {
    id: number;
    user_id: number;
    latitude: number;
    longitude: number;
    city: number;
    state: number;
    country: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LocationMinAggregateInputType = {
    id?: true;
    user_id?: true;
    latitude?: true;
    longitude?: true;
    city?: true;
    state?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LocationMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    latitude?: true;
    longitude?: true;
    city?: true;
    state?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LocationCountAggregateInputType = {
    id?: true;
    user_id?: true;
    latitude?: true;
    longitude?: true;
    city?: true;
    state?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which location to aggregate.
     */
    where?: locationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: locationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned locations
     **/
    _count?: true | LocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LocationMaxAggregateInputType;
  };

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
    [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>;
  };

  export type locationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationWhereInput;
    orderBy?: locationOrderByWithAggregationInput | locationOrderByWithAggregationInput[];
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum;
    having?: locationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocationCountAggregateInputType | true;
    _min?: LocationMinAggregateInputType;
    _max?: LocationMaxAggregateInputType;
  };

  export type LocationGroupByOutputType = {
    id: string;
    user_id: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at: Date;
    updated_at: Date;
    _count: LocationCountAggregateOutputType | null;
    _min: LocationMinAggregateOutputType | null;
    _max: LocationMaxAggregateOutputType | null;
  };

  type GetLocationGroupByPayload<T extends locationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LocationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
          : GetScalarType<T[P], LocationGroupByOutputType[P]>;
      }
    >
  >;

  export type locationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        latitude?: boolean;
        longitude?: boolean;
        city?: boolean;
        state?: boolean;
        country?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        weather_data?: boolean | location$weather_dataArgs<ExtArgs>;
        _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['location']
    >;

  export type locationSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type locationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    weather_data?: boolean | location$weather_dataArgs<ExtArgs>;
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $locationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'location';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      weather_data: Prisma.$weather_dataPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        latitude: string;
        longitude: string;
        city: string;
        state: string;
        country: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['location']
    >;
    composites: {};
  };

  type locationGetPayload<S extends boolean | null | undefined | locationDefaultArgs> = $Result.GetResult<
    Prisma.$locationPayload,
    S
  >;

  type locationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    locationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: LocationCountAggregateInputType | true;
  };

  export interface locationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['location']; meta: { name: 'location' } };
    /**
     * Find zero or one Location that matches the filter.
     * @param {locationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends locationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, locationFindUniqueArgs<ExtArgs>>,
    ): Prisma__locationClient<
      $Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {locationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends locationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__locationClient<
      $Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends locationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindFirstArgs<ExtArgs>>,
    ): Prisma__locationClient<
      $Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends locationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__locationClient<
      $Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     *
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends locationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Location.
     * @param {locationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     *
     **/
    create<T extends locationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, locationCreateArgs<ExtArgs>>,
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Locations.
     *     @param {locationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends locationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Location.
     * @param {locationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     *
     **/
    delete<T extends locationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, locationDeleteArgs<ExtArgs>>,
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Location.
     * @param {locationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends locationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpdateArgs<ExtArgs>>,
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Locations.
     * @param {locationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends locationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends locationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Location.
     * @param {locationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     **/
    upsert<T extends locationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpsertArgs<ExtArgs>>,
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
     **/
    count<T extends locationCountArgs>(
      args?: Subset<T, locationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LocationAggregateArgs>(
      args: Subset<T, LocationAggregateArgs>,
    ): Prisma.PrismaPromise<GetLocationAggregateType<T>>;

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends locationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationGroupByArgs['orderBy'] }
        : { orderBy?: locationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, locationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the location model
     */
    readonly fields: locationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    weather_data<T extends location$weather_dataArgs<ExtArgs> = {}>(
      args?: Subset<T, location$weather_dataArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the location model
   */
  interface locationFieldRefs {
    readonly id: FieldRef<'location', 'String'>;
    readonly user_id: FieldRef<'location', 'String'>;
    readonly latitude: FieldRef<'location', 'String'>;
    readonly longitude: FieldRef<'location', 'String'>;
    readonly city: FieldRef<'location', 'String'>;
    readonly state: FieldRef<'location', 'String'>;
    readonly country: FieldRef<'location', 'String'>;
    readonly created_at: FieldRef<'location', 'DateTime'>;
    readonly updated_at: FieldRef<'location', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * location findUnique
   */
  export type locationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput;
  };

  /**
   * location findUniqueOrThrow
   */
  export type locationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput;
  };

  /**
   * location findFirst
   */
  export type locationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[];
  };

  /**
   * location findFirstOrThrow
   */
  export type locationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[];
  };

  /**
   * location findMany
   */
  export type locationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * Filter, which locations to fetch.
     */
    where?: locationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing locations.
     */
    cursor?: locationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` locations.
     */
    skip?: number;
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[];
  };

  /**
   * location create
   */
  export type locationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * The data needed to create a location.
     */
    data: XOR<locationCreateInput, locationUncheckedCreateInput>;
  };

  /**
   * location createMany
   */
  export type locationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationCreateManyInput | locationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * location update
   */
  export type locationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * The data needed to update a location.
     */
    data: XOR<locationUpdateInput, locationUncheckedUpdateInput>;
    /**
     * Choose, which location to update.
     */
    where: locationWhereUniqueInput;
  };

  /**
   * location updateMany
   */
  export type locationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyInput>;
    /**
     * Filter which locations to update
     */
    where?: locationWhereInput;
  };

  /**
   * location upsert
   */
  export type locationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * The filter to search for the location to update in case it exists.
     */
    where: locationWhereUniqueInput;
    /**
     * In case the location found by the `where` argument doesn't exist, create a new location with this data.
     */
    create: XOR<locationCreateInput, locationUncheckedCreateInput>;
    /**
     * In case the location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationUpdateInput, locationUncheckedUpdateInput>;
  };

  /**
   * location delete
   */
  export type locationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    /**
     * Filter which location to delete.
     */
    where: locationWhereUniqueInput;
  };

  /**
   * location deleteMany
   */
  export type locationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationWhereInput;
  };

  /**
   * location.weather_data
   */
  export type location$weather_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    where?: weather_dataWhereInput;
    orderBy?: weather_dataOrderByWithRelationInput | weather_dataOrderByWithRelationInput[];
    cursor?: weather_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Weather_dataScalarFieldEnum | Weather_dataScalarFieldEnum[];
  };

  /**
   * location without action
   */
  export type locationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    business_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      business_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      location?: boolean | user$locationArgs<ExtArgs>;
      business?: boolean | user$businessArgs<ExtArgs>;
      user_preference?: boolean | user$user_preferenceArgs<ExtArgs>;
      weather_alert?: boolean | user$weather_alertArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    business_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | user$locationArgs<ExtArgs>;
    business?: boolean | user$businessArgs<ExtArgs>;
    user_preference?: boolean | user$user_preferenceArgs<ExtArgs>;
    weather_alert?: boolean | user$weather_alertArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      location: Prisma.$locationPayload<ExtArgs>[];
      business: Prisma.$businessPayload<ExtArgs> | null;
      user_preference: Prisma.$user_preferencePayload<ExtArgs>[];
      weather_alert: Prisma.$weather_alertPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        business_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends user$locationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$locationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findMany'> | Null>;

    business<T extends user$businessArgs<ExtArgs> = {}>(
      args?: Subset<T, user$businessArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    user_preference<T extends user$user_preferenceArgs<ExtArgs> = {}>(
      args?: Subset<T, user$user_preferenceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'findMany'> | Null>;

    weather_alert<T extends user$weather_alertArgs<ExtArgs> = {}>(
      args?: Subset<T, user$weather_alertArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly business_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.location
   */
  export type user$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: locationInclude<ExtArgs> | null;
    where?: locationWhereInput;
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[];
    cursor?: locationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[];
  };

  /**
   * user.business
   */
  export type user$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    where?: businessWhereInput;
  };

  /**
   * user.user_preference
   */
  export type user$user_preferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    where?: user_preferenceWhereInput;
    orderBy?: user_preferenceOrderByWithRelationInput | user_preferenceOrderByWithRelationInput[];
    cursor?: user_preferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_preferenceScalarFieldEnum | User_preferenceScalarFieldEnum[];
  };

  /**
   * user.weather_alert
   */
  export type user$weather_alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    where?: weather_alertWhereInput;
    orderBy?: weather_alertOrderByWithRelationInput | weather_alertOrderByWithRelationInput[];
    cursor?: weather_alertWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Weather_alertScalarFieldEnum | Weather_alertScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model user_preference
   */

  export type AggregateUser_preference = {
    _count: User_preferenceCountAggregateOutputType | null;
    _avg: User_preferenceAvgAggregateOutputType | null;
    _sum: User_preferenceSumAggregateOutputType | null;
    _min: User_preferenceMinAggregateOutputType | null;
    _max: User_preferenceMaxAggregateOutputType | null;
  };

  export type User_preferenceAvgAggregateOutputType = {
    alert_frequency: number | null;
  };

  export type User_preferenceSumAggregateOutputType = {
    alert_frequency: number | null;
  };

  export type User_preferenceMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    weather_alert_type: string | null;
    alert_frequency: number | null;
    alert_delivery_method: string | null;
    alert_time_preference: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_preferenceMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    weather_alert_type: string | null;
    alert_frequency: number | null;
    alert_delivery_method: string | null;
    alert_time_preference: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_preferenceCountAggregateOutputType = {
    id: number;
    user_id: number;
    weather_alert_type: number;
    alert_frequency: number;
    alert_delivery_method: number;
    alert_time_preference: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type User_preferenceAvgAggregateInputType = {
    alert_frequency?: true;
  };

  export type User_preferenceSumAggregateInputType = {
    alert_frequency?: true;
  };

  export type User_preferenceMinAggregateInputType = {
    id?: true;
    user_id?: true;
    weather_alert_type?: true;
    alert_frequency?: true;
    alert_delivery_method?: true;
    alert_time_preference?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_preferenceMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    weather_alert_type?: true;
    alert_frequency?: true;
    alert_delivery_method?: true;
    alert_time_preference?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_preferenceCountAggregateInputType = {
    id?: true;
    user_id?: true;
    weather_alert_type?: true;
    alert_frequency?: true;
    alert_delivery_method?: true;
    alert_time_preference?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type User_preferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_preference to aggregate.
     */
    where?: user_preferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_preferences to fetch.
     */
    orderBy?: user_preferenceOrderByWithRelationInput | user_preferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_preferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_preferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_preferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_preferences
     **/
    _count?: true | User_preferenceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: User_preferenceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: User_preferenceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_preferenceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_preferenceMaxAggregateInputType;
  };

  export type GetUser_preferenceAggregateType<T extends User_preferenceAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_preference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_preference[P]>
      : GetScalarType<T[P], AggregateUser_preference[P]>;
  };

  export type user_preferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_preferenceWhereInput;
    orderBy?: user_preferenceOrderByWithAggregationInput | user_preferenceOrderByWithAggregationInput[];
    by: User_preferenceScalarFieldEnum[] | User_preferenceScalarFieldEnum;
    having?: user_preferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_preferenceCountAggregateInputType | true;
    _avg?: User_preferenceAvgAggregateInputType;
    _sum?: User_preferenceSumAggregateInputType;
    _min?: User_preferenceMinAggregateInputType;
    _max?: User_preferenceMaxAggregateInputType;
  };

  export type User_preferenceGroupByOutputType = {
    id: string;
    user_id: string;
    weather_alert_type: string;
    alert_frequency: number;
    alert_delivery_method: string;
    alert_time_preference: Date;
    created_at: Date;
    updated_at: Date;
    _count: User_preferenceCountAggregateOutputType | null;
    _avg: User_preferenceAvgAggregateOutputType | null;
    _sum: User_preferenceSumAggregateOutputType | null;
    _min: User_preferenceMinAggregateOutputType | null;
    _max: User_preferenceMaxAggregateOutputType | null;
  };

  type GetUser_preferenceGroupByPayload<T extends user_preferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_preferenceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof User_preferenceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], User_preferenceGroupByOutputType[P]>
          : GetScalarType<T[P], User_preferenceGroupByOutputType[P]>;
      }
    >
  >;

  export type user_preferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        weather_alert_type?: boolean;
        alert_frequency?: boolean;
        alert_delivery_method?: boolean;
        alert_time_preference?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user_preference']
    >;

  export type user_preferenceSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    weather_alert_type?: boolean;
    alert_frequency?: boolean;
    alert_delivery_method?: boolean;
    alert_time_preference?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type user_preferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $user_preferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user_preference';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        weather_alert_type: string;
        alert_frequency: number;
        alert_delivery_method: string;
        alert_time_preference: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user_preference']
    >;
    composites: {};
  };

  type user_preferenceGetPayload<S extends boolean | null | undefined | user_preferenceDefaultArgs> = $Result.GetResult<
    Prisma.$user_preferencePayload,
    S
  >;

  type user_preferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    user_preferenceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: User_preferenceCountAggregateInputType | true;
  };

  export interface user_preferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_preference']; meta: { name: 'user_preference' } };
    /**
     * Find zero or one User_preference that matches the filter.
     * @param {user_preferenceFindUniqueArgs} args - Arguments to find a User_preference
     * @example
     * // Get one User_preference
     * const user_preference = await prisma.user_preference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends user_preferenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_preferenceFindUniqueArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User_preference that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {user_preferenceFindUniqueOrThrowArgs} args - Arguments to find a User_preference
     * @example
     * // Get one User_preference
     * const user_preference = await prisma.user_preference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends user_preferenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_preferenceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User_preference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferenceFindFirstArgs} args - Arguments to find a User_preference
     * @example
     * // Get one User_preference
     * const user_preference = await prisma.user_preference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends user_preferenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_preferenceFindFirstArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User_preference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferenceFindFirstOrThrowArgs} args - Arguments to find a User_preference
     * @example
     * // Get one User_preference
     * const user_preference = await prisma.user_preference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends user_preferenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_preferenceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more User_preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_preferences
     * const user_preferences = await prisma.user_preference.findMany()
     *
     * // Get first 10 User_preferences
     * const user_preferences = await prisma.user_preference.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_preferenceWithIdOnly = await prisma.user_preference.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends user_preferenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_preferenceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User_preference.
     * @param {user_preferenceCreateArgs} args - Arguments to create a User_preference.
     * @example
     * // Create one User_preference
     * const User_preference = await prisma.user_preference.create({
     *   data: {
     *     // ... data to create a User_preference
     *   }
     * })
     *
     **/
    create<T extends user_preferenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_preferenceCreateArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many User_preferences.
     *     @param {user_preferenceCreateManyArgs} args - Arguments to create many User_preferences.
     *     @example
     *     // Create many User_preferences
     *     const user_preference = await prisma.user_preference.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends user_preferenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_preferenceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User_preference.
     * @param {user_preferenceDeleteArgs} args - Arguments to delete one User_preference.
     * @example
     * // Delete one User_preference
     * const User_preference = await prisma.user_preference.delete({
     *   where: {
     *     // ... filter to delete one User_preference
     *   }
     * })
     *
     **/
    delete<T extends user_preferenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_preferenceDeleteArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User_preference.
     * @param {user_preferenceUpdateArgs} args - Arguments to update one User_preference.
     * @example
     * // Update one User_preference
     * const user_preference = await prisma.user_preference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends user_preferenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_preferenceUpdateArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more User_preferences.
     * @param {user_preferenceDeleteManyArgs} args - Arguments to filter User_preferences to delete.
     * @example
     * // Delete a few User_preferences
     * const { count } = await prisma.user_preference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends user_preferenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_preferenceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_preferences
     * const user_preference = await prisma.user_preference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends user_preferenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_preferenceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User_preference.
     * @param {user_preferenceUpsertArgs} args - Arguments to update or create a User_preference.
     * @example
     * // Update or create a User_preference
     * const user_preference = await prisma.user_preference.upsert({
     *   create: {
     *     // ... data to create a User_preference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_preference we want to update
     *   }
     * })
     **/
    upsert<T extends user_preferenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_preferenceUpsertArgs<ExtArgs>>,
    ): Prisma__user_preferenceClient<
      $Result.GetResult<Prisma.$user_preferencePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of User_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferenceCountArgs} args - Arguments to filter User_preferences to count.
     * @example
     * // Count the number of User_preferences
     * const count = await prisma.user_preference.count({
     *   where: {
     *     // ... the filter for the User_preferences we want to count
     *   }
     * })
     **/
    count<T extends user_preferenceCountArgs>(
      args?: Subset<T, user_preferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_preferenceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_preferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends User_preferenceAggregateArgs>(
      args: Subset<T, User_preferenceAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_preferenceAggregateType<T>>;

    /**
     * Group by User_preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends user_preferenceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_preferenceGroupByArgs['orderBy'] }
        : { orderBy?: user_preferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, user_preferenceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUser_preferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_preference model
     */
    readonly fields: user_preferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_preference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_preferenceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user_preference model
   */
  interface user_preferenceFieldRefs {
    readonly id: FieldRef<'user_preference', 'String'>;
    readonly user_id: FieldRef<'user_preference', 'String'>;
    readonly weather_alert_type: FieldRef<'user_preference', 'String'>;
    readonly alert_frequency: FieldRef<'user_preference', 'Int'>;
    readonly alert_delivery_method: FieldRef<'user_preference', 'String'>;
    readonly alert_time_preference: FieldRef<'user_preference', 'DateTime'>;
    readonly created_at: FieldRef<'user_preference', 'DateTime'>;
    readonly updated_at: FieldRef<'user_preference', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user_preference findUnique
   */
  export type user_preferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    /**
     * Filter, which user_preference to fetch.
     */
    where: user_preferenceWhereUniqueInput;
  };

  /**
   * user_preference findUniqueOrThrow
   */
  export type user_preferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the user_preference
       */
      select?: user_preferenceSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: user_preferenceInclude<ExtArgs> | null;
      /**
       * Filter, which user_preference to fetch.
       */
      where: user_preferenceWhereUniqueInput;
    };

  /**
   * user_preference findFirst
   */
  export type user_preferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    /**
     * Filter, which user_preference to fetch.
     */
    where?: user_preferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_preferences to fetch.
     */
    orderBy?: user_preferenceOrderByWithRelationInput | user_preferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_preferences.
     */
    cursor?: user_preferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_preferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_preferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_preferences.
     */
    distinct?: User_preferenceScalarFieldEnum | User_preferenceScalarFieldEnum[];
  };

  /**
   * user_preference findFirstOrThrow
   */
  export type user_preferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the user_preference
       */
      select?: user_preferenceSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: user_preferenceInclude<ExtArgs> | null;
      /**
       * Filter, which user_preference to fetch.
       */
      where?: user_preferenceWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of user_preferences to fetch.
       */
      orderBy?: user_preferenceOrderByWithRelationInput | user_preferenceOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for user_preferences.
       */
      cursor?: user_preferenceWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` user_preferences from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` user_preferences.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of user_preferences.
       */
      distinct?: User_preferenceScalarFieldEnum | User_preferenceScalarFieldEnum[];
    };

  /**
   * user_preference findMany
   */
  export type user_preferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    /**
     * Filter, which user_preferences to fetch.
     */
    where?: user_preferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_preferences to fetch.
     */
    orderBy?: user_preferenceOrderByWithRelationInput | user_preferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_preferences.
     */
    cursor?: user_preferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_preferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_preferences.
     */
    skip?: number;
    distinct?: User_preferenceScalarFieldEnum | User_preferenceScalarFieldEnum[];
  };

  /**
   * user_preference create
   */
  export type user_preferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    /**
     * The data needed to create a user_preference.
     */
    data: XOR<user_preferenceCreateInput, user_preferenceUncheckedCreateInput>;
  };

  /**
   * user_preference createMany
   */
  export type user_preferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_preferences.
     */
    data: user_preferenceCreateManyInput | user_preferenceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_preference update
   */
  export type user_preferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    /**
     * The data needed to update a user_preference.
     */
    data: XOR<user_preferenceUpdateInput, user_preferenceUncheckedUpdateInput>;
    /**
     * Choose, which user_preference to update.
     */
    where: user_preferenceWhereUniqueInput;
  };

  /**
   * user_preference updateMany
   */
  export type user_preferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_preferences.
     */
    data: XOR<user_preferenceUpdateManyMutationInput, user_preferenceUncheckedUpdateManyInput>;
    /**
     * Filter which user_preferences to update
     */
    where?: user_preferenceWhereInput;
  };

  /**
   * user_preference upsert
   */
  export type user_preferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    /**
     * The filter to search for the user_preference to update in case it exists.
     */
    where: user_preferenceWhereUniqueInput;
    /**
     * In case the user_preference found by the `where` argument doesn't exist, create a new user_preference with this data.
     */
    create: XOR<user_preferenceCreateInput, user_preferenceUncheckedCreateInput>;
    /**
     * In case the user_preference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_preferenceUpdateInput, user_preferenceUncheckedUpdateInput>;
  };

  /**
   * user_preference delete
   */
  export type user_preferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
    /**
     * Filter which user_preference to delete.
     */
    where: user_preferenceWhereUniqueInput;
  };

  /**
   * user_preference deleteMany
   */
  export type user_preferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_preferences to delete
     */
    where?: user_preferenceWhereInput;
  };

  /**
   * user_preference without action
   */
  export type user_preferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preference
     */
    select?: user_preferenceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_preferenceInclude<ExtArgs> | null;
  };

  /**
   * Model weather_alert
   */

  export type AggregateWeather_alert = {
    _count: Weather_alertCountAggregateOutputType | null;
    _min: Weather_alertMinAggregateOutputType | null;
    _max: Weather_alertMaxAggregateOutputType | null;
  };

  export type Weather_alertMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    alert_type: string | null;
    severity: string | null;
    weather_alert_location: string | null;
    alert_time: Date | null;
    alert_message: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Weather_alertMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    alert_type: string | null;
    severity: string | null;
    weather_alert_location: string | null;
    alert_time: Date | null;
    alert_message: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Weather_alertCountAggregateOutputType = {
    id: number;
    user_id: number;
    alert_type: number;
    severity: number;
    weather_alert_location: number;
    alert_time: number;
    alert_message: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Weather_alertMinAggregateInputType = {
    id?: true;
    user_id?: true;
    alert_type?: true;
    severity?: true;
    weather_alert_location?: true;
    alert_time?: true;
    alert_message?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Weather_alertMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    alert_type?: true;
    severity?: true;
    weather_alert_location?: true;
    alert_time?: true;
    alert_message?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Weather_alertCountAggregateInputType = {
    id?: true;
    user_id?: true;
    alert_type?: true;
    severity?: true;
    weather_alert_location?: true;
    alert_time?: true;
    alert_message?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Weather_alertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weather_alert to aggregate.
     */
    where?: weather_alertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_alerts to fetch.
     */
    orderBy?: weather_alertOrderByWithRelationInput | weather_alertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: weather_alertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_alerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_alerts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned weather_alerts
     **/
    _count?: true | Weather_alertCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Weather_alertMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Weather_alertMaxAggregateInputType;
  };

  export type GetWeather_alertAggregateType<T extends Weather_alertAggregateArgs> = {
    [P in keyof T & keyof AggregateWeather_alert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeather_alert[P]>
      : GetScalarType<T[P], AggregateWeather_alert[P]>;
  };

  export type weather_alertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weather_alertWhereInput;
    orderBy?: weather_alertOrderByWithAggregationInput | weather_alertOrderByWithAggregationInput[];
    by: Weather_alertScalarFieldEnum[] | Weather_alertScalarFieldEnum;
    having?: weather_alertScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Weather_alertCountAggregateInputType | true;
    _min?: Weather_alertMinAggregateInputType;
    _max?: Weather_alertMaxAggregateInputType;
  };

  export type Weather_alertGroupByOutputType = {
    id: string;
    user_id: string;
    alert_type: string;
    severity: string;
    weather_alert_location: string;
    alert_time: Date;
    alert_message: string;
    created_at: Date;
    updated_at: Date;
    _count: Weather_alertCountAggregateOutputType | null;
    _min: Weather_alertMinAggregateOutputType | null;
    _max: Weather_alertMaxAggregateOutputType | null;
  };

  type GetWeather_alertGroupByPayload<T extends weather_alertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Weather_alertGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Weather_alertGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Weather_alertGroupByOutputType[P]>
          : GetScalarType<T[P], Weather_alertGroupByOutputType[P]>;
      }
    >
  >;

  export type weather_alertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        alert_type?: boolean;
        severity?: boolean;
        weather_alert_location?: boolean;
        alert_time?: boolean;
        alert_message?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['weather_alert']
    >;

  export type weather_alertSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    alert_type?: boolean;
    severity?: boolean;
    weather_alert_location?: boolean;
    alert_time?: boolean;
    alert_message?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type weather_alertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $weather_alertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'weather_alert';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        alert_type: string;
        severity: string;
        weather_alert_location: string;
        alert_time: Date;
        alert_message: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['weather_alert']
    >;
    composites: {};
  };

  type weather_alertGetPayload<S extends boolean | null | undefined | weather_alertDefaultArgs> = $Result.GetResult<
    Prisma.$weather_alertPayload,
    S
  >;

  type weather_alertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    weather_alertFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Weather_alertCountAggregateInputType | true;
  };

  export interface weather_alertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['weather_alert']; meta: { name: 'weather_alert' } };
    /**
     * Find zero or one Weather_alert that matches the filter.
     * @param {weather_alertFindUniqueArgs} args - Arguments to find a Weather_alert
     * @example
     * // Get one Weather_alert
     * const weather_alert = await prisma.weather_alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends weather_alertFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, weather_alertFindUniqueArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Weather_alert that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {weather_alertFindUniqueOrThrowArgs} args - Arguments to find a Weather_alert
     * @example
     * // Get one Weather_alert
     * const weather_alert = await prisma.weather_alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends weather_alertFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_alertFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Weather_alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_alertFindFirstArgs} args - Arguments to find a Weather_alert
     * @example
     * // Get one Weather_alert
     * const weather_alert = await prisma.weather_alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends weather_alertFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_alertFindFirstArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Weather_alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_alertFindFirstOrThrowArgs} args - Arguments to find a Weather_alert
     * @example
     * // Get one Weather_alert
     * const weather_alert = await prisma.weather_alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends weather_alertFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_alertFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Weather_alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_alertFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weather_alerts
     * const weather_alerts = await prisma.weather_alert.findMany()
     *
     * // Get first 10 Weather_alerts
     * const weather_alerts = await prisma.weather_alert.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const weather_alertWithIdOnly = await prisma.weather_alert.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends weather_alertFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_alertFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Weather_alert.
     * @param {weather_alertCreateArgs} args - Arguments to create a Weather_alert.
     * @example
     * // Create one Weather_alert
     * const Weather_alert = await prisma.weather_alert.create({
     *   data: {
     *     // ... data to create a Weather_alert
     *   }
     * })
     *
     **/
    create<T extends weather_alertCreateArgs<ExtArgs>>(
      args: SelectSubset<T, weather_alertCreateArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Weather_alerts.
     *     @param {weather_alertCreateManyArgs} args - Arguments to create many Weather_alerts.
     *     @example
     *     // Create many Weather_alerts
     *     const weather_alert = await prisma.weather_alert.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends weather_alertCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_alertCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Weather_alert.
     * @param {weather_alertDeleteArgs} args - Arguments to delete one Weather_alert.
     * @example
     * // Delete one Weather_alert
     * const Weather_alert = await prisma.weather_alert.delete({
     *   where: {
     *     // ... filter to delete one Weather_alert
     *   }
     * })
     *
     **/
    delete<T extends weather_alertDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, weather_alertDeleteArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Weather_alert.
     * @param {weather_alertUpdateArgs} args - Arguments to update one Weather_alert.
     * @example
     * // Update one Weather_alert
     * const weather_alert = await prisma.weather_alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends weather_alertUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, weather_alertUpdateArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Weather_alerts.
     * @param {weather_alertDeleteManyArgs} args - Arguments to filter Weather_alerts to delete.
     * @example
     * // Delete a few Weather_alerts
     * const { count } = await prisma.weather_alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends weather_alertDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_alertDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Weather_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_alertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weather_alerts
     * const weather_alert = await prisma.weather_alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends weather_alertUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, weather_alertUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Weather_alert.
     * @param {weather_alertUpsertArgs} args - Arguments to update or create a Weather_alert.
     * @example
     * // Update or create a Weather_alert
     * const weather_alert = await prisma.weather_alert.upsert({
     *   create: {
     *     // ... data to create a Weather_alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weather_alert we want to update
     *   }
     * })
     **/
    upsert<T extends weather_alertUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, weather_alertUpsertArgs<ExtArgs>>,
    ): Prisma__weather_alertClient<
      $Result.GetResult<Prisma.$weather_alertPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Weather_alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_alertCountArgs} args - Arguments to filter Weather_alerts to count.
     * @example
     * // Count the number of Weather_alerts
     * const count = await prisma.weather_alert.count({
     *   where: {
     *     // ... the filter for the Weather_alerts we want to count
     *   }
     * })
     **/
    count<T extends weather_alertCountArgs>(
      args?: Subset<T, weather_alertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Weather_alertCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Weather_alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Weather_alertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Weather_alertAggregateArgs>(
      args: Subset<T, Weather_alertAggregateArgs>,
    ): Prisma.PrismaPromise<GetWeather_alertAggregateType<T>>;

    /**
     * Group by Weather_alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_alertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends weather_alertGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: weather_alertGroupByArgs['orderBy'] }
        : { orderBy?: weather_alertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, weather_alertGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetWeather_alertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the weather_alert model
     */
    readonly fields: weather_alertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for weather_alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__weather_alertClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the weather_alert model
   */
  interface weather_alertFieldRefs {
    readonly id: FieldRef<'weather_alert', 'String'>;
    readonly user_id: FieldRef<'weather_alert', 'String'>;
    readonly alert_type: FieldRef<'weather_alert', 'String'>;
    readonly severity: FieldRef<'weather_alert', 'String'>;
    readonly weather_alert_location: FieldRef<'weather_alert', 'String'>;
    readonly alert_time: FieldRef<'weather_alert', 'DateTime'>;
    readonly alert_message: FieldRef<'weather_alert', 'String'>;
    readonly created_at: FieldRef<'weather_alert', 'DateTime'>;
    readonly updated_at: FieldRef<'weather_alert', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * weather_alert findUnique
   */
  export type weather_alertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * Filter, which weather_alert to fetch.
     */
    where: weather_alertWhereUniqueInput;
  };

  /**
   * weather_alert findUniqueOrThrow
   */
  export type weather_alertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * Filter, which weather_alert to fetch.
     */
    where: weather_alertWhereUniqueInput;
  };

  /**
   * weather_alert findFirst
   */
  export type weather_alertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * Filter, which weather_alert to fetch.
     */
    where?: weather_alertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_alerts to fetch.
     */
    orderBy?: weather_alertOrderByWithRelationInput | weather_alertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for weather_alerts.
     */
    cursor?: weather_alertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_alerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_alerts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of weather_alerts.
     */
    distinct?: Weather_alertScalarFieldEnum | Weather_alertScalarFieldEnum[];
  };

  /**
   * weather_alert findFirstOrThrow
   */
  export type weather_alertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * Filter, which weather_alert to fetch.
     */
    where?: weather_alertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_alerts to fetch.
     */
    orderBy?: weather_alertOrderByWithRelationInput | weather_alertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for weather_alerts.
     */
    cursor?: weather_alertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_alerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_alerts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of weather_alerts.
     */
    distinct?: Weather_alertScalarFieldEnum | Weather_alertScalarFieldEnum[];
  };

  /**
   * weather_alert findMany
   */
  export type weather_alertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * Filter, which weather_alerts to fetch.
     */
    where?: weather_alertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_alerts to fetch.
     */
    orderBy?: weather_alertOrderByWithRelationInput | weather_alertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing weather_alerts.
     */
    cursor?: weather_alertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_alerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_alerts.
     */
    skip?: number;
    distinct?: Weather_alertScalarFieldEnum | Weather_alertScalarFieldEnum[];
  };

  /**
   * weather_alert create
   */
  export type weather_alertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * The data needed to create a weather_alert.
     */
    data: XOR<weather_alertCreateInput, weather_alertUncheckedCreateInput>;
  };

  /**
   * weather_alert createMany
   */
  export type weather_alertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many weather_alerts.
     */
    data: weather_alertCreateManyInput | weather_alertCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * weather_alert update
   */
  export type weather_alertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * The data needed to update a weather_alert.
     */
    data: XOR<weather_alertUpdateInput, weather_alertUncheckedUpdateInput>;
    /**
     * Choose, which weather_alert to update.
     */
    where: weather_alertWhereUniqueInput;
  };

  /**
   * weather_alert updateMany
   */
  export type weather_alertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update weather_alerts.
     */
    data: XOR<weather_alertUpdateManyMutationInput, weather_alertUncheckedUpdateManyInput>;
    /**
     * Filter which weather_alerts to update
     */
    where?: weather_alertWhereInput;
  };

  /**
   * weather_alert upsert
   */
  export type weather_alertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * The filter to search for the weather_alert to update in case it exists.
     */
    where: weather_alertWhereUniqueInput;
    /**
     * In case the weather_alert found by the `where` argument doesn't exist, create a new weather_alert with this data.
     */
    create: XOR<weather_alertCreateInput, weather_alertUncheckedCreateInput>;
    /**
     * In case the weather_alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<weather_alertUpdateInput, weather_alertUncheckedUpdateInput>;
  };

  /**
   * weather_alert delete
   */
  export type weather_alertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
    /**
     * Filter which weather_alert to delete.
     */
    where: weather_alertWhereUniqueInput;
  };

  /**
   * weather_alert deleteMany
   */
  export type weather_alertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weather_alerts to delete
     */
    where?: weather_alertWhereInput;
  };

  /**
   * weather_alert without action
   */
  export type weather_alertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_alert
     */
    select?: weather_alertSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_alertInclude<ExtArgs> | null;
  };

  /**
   * Model weather_data
   */

  export type AggregateWeather_data = {
    _count: Weather_dataCountAggregateOutputType | null;
    _avg: Weather_dataAvgAggregateOutputType | null;
    _sum: Weather_dataSumAggregateOutputType | null;
    _min: Weather_dataMinAggregateOutputType | null;
    _max: Weather_dataMaxAggregateOutputType | null;
  };

  export type Weather_dataAvgAggregateOutputType = {
    temperature: number | null;
    humidity: number | null;
    wind_speed: number | null;
    precipitation: number | null;
  };

  export type Weather_dataSumAggregateOutputType = {
    temperature: number | null;
    humidity: number | null;
    wind_speed: number | null;
    precipitation: number | null;
  };

  export type Weather_dataMinAggregateOutputType = {
    id: string | null;
    location_id: string | null;
    temperature: number | null;
    humidity: number | null;
    wind_speed: number | null;
    precipitation: number | null;
    weather_condition: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Weather_dataMaxAggregateOutputType = {
    id: string | null;
    location_id: string | null;
    temperature: number | null;
    humidity: number | null;
    wind_speed: number | null;
    precipitation: number | null;
    weather_condition: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Weather_dataCountAggregateOutputType = {
    id: number;
    location_id: number;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Weather_dataAvgAggregateInputType = {
    temperature?: true;
    humidity?: true;
    wind_speed?: true;
    precipitation?: true;
  };

  export type Weather_dataSumAggregateInputType = {
    temperature?: true;
    humidity?: true;
    wind_speed?: true;
    precipitation?: true;
  };

  export type Weather_dataMinAggregateInputType = {
    id?: true;
    location_id?: true;
    temperature?: true;
    humidity?: true;
    wind_speed?: true;
    precipitation?: true;
    weather_condition?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Weather_dataMaxAggregateInputType = {
    id?: true;
    location_id?: true;
    temperature?: true;
    humidity?: true;
    wind_speed?: true;
    precipitation?: true;
    weather_condition?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Weather_dataCountAggregateInputType = {
    id?: true;
    location_id?: true;
    temperature?: true;
    humidity?: true;
    wind_speed?: true;
    precipitation?: true;
    weather_condition?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Weather_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weather_data to aggregate.
     */
    where?: weather_dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_data to fetch.
     */
    orderBy?: weather_dataOrderByWithRelationInput | weather_dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: weather_dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned weather_data
     **/
    _count?: true | Weather_dataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Weather_dataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Weather_dataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Weather_dataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Weather_dataMaxAggregateInputType;
  };

  export type GetWeather_dataAggregateType<T extends Weather_dataAggregateArgs> = {
    [P in keyof T & keyof AggregateWeather_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeather_data[P]>
      : GetScalarType<T[P], AggregateWeather_data[P]>;
  };

  export type weather_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weather_dataWhereInput;
    orderBy?: weather_dataOrderByWithAggregationInput | weather_dataOrderByWithAggregationInput[];
    by: Weather_dataScalarFieldEnum[] | Weather_dataScalarFieldEnum;
    having?: weather_dataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Weather_dataCountAggregateInputType | true;
    _avg?: Weather_dataAvgAggregateInputType;
    _sum?: Weather_dataSumAggregateInputType;
    _min?: Weather_dataMinAggregateInputType;
    _max?: Weather_dataMaxAggregateInputType;
  };

  export type Weather_dataGroupByOutputType = {
    id: string;
    location_id: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: string;
    created_at: Date;
    updated_at: Date;
    _count: Weather_dataCountAggregateOutputType | null;
    _avg: Weather_dataAvgAggregateOutputType | null;
    _sum: Weather_dataSumAggregateOutputType | null;
    _min: Weather_dataMinAggregateOutputType | null;
    _max: Weather_dataMaxAggregateOutputType | null;
  };

  type GetWeather_dataGroupByPayload<T extends weather_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Weather_dataGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Weather_dataGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Weather_dataGroupByOutputType[P]>
          : GetScalarType<T[P], Weather_dataGroupByOutputType[P]>;
      }
    >
  >;

  export type weather_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        location_id?: boolean;
        temperature?: boolean;
        humidity?: boolean;
        wind_speed?: boolean;
        precipitation?: boolean;
        weather_condition?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        location?: boolean | locationDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['weather_data']
    >;

  export type weather_dataSelectScalar = {
    id?: boolean;
    location_id?: boolean;
    temperature?: boolean;
    humidity?: boolean;
    wind_speed?: boolean;
    precipitation?: boolean;
    weather_condition?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type weather_dataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | locationDefaultArgs<ExtArgs>;
  };

  export type $weather_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'weather_data';
    objects: {
      location: Prisma.$locationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        location_id: string;
        temperature: number;
        humidity: number;
        wind_speed: number;
        precipitation: number;
        weather_condition: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['weather_data']
    >;
    composites: {};
  };

  type weather_dataGetPayload<S extends boolean | null | undefined | weather_dataDefaultArgs> = $Result.GetResult<
    Prisma.$weather_dataPayload,
    S
  >;

  type weather_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    weather_dataFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Weather_dataCountAggregateInputType | true;
  };

  export interface weather_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['weather_data']; meta: { name: 'weather_data' } };
    /**
     * Find zero or one Weather_data that matches the filter.
     * @param {weather_dataFindUniqueArgs} args - Arguments to find a Weather_data
     * @example
     * // Get one Weather_data
     * const weather_data = await prisma.weather_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends weather_dataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, weather_dataFindUniqueArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<
      $Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Weather_data that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {weather_dataFindUniqueOrThrowArgs} args - Arguments to find a Weather_data
     * @example
     * // Get one Weather_data
     * const weather_data = await prisma.weather_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends weather_dataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_dataFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<
      $Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Weather_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_dataFindFirstArgs} args - Arguments to find a Weather_data
     * @example
     * // Get one Weather_data
     * const weather_data = await prisma.weather_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends weather_dataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_dataFindFirstArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<
      $Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Weather_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_dataFindFirstOrThrowArgs} args - Arguments to find a Weather_data
     * @example
     * // Get one Weather_data
     * const weather_data = await prisma.weather_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends weather_dataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_dataFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<
      $Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Weather_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_dataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weather_data
     * const weather_data = await prisma.weather_data.findMany()
     *
     * // Get first 10 Weather_data
     * const weather_data = await prisma.weather_data.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const weather_dataWithIdOnly = await prisma.weather_data.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends weather_dataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_dataFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Weather_data.
     * @param {weather_dataCreateArgs} args - Arguments to create a Weather_data.
     * @example
     * // Create one Weather_data
     * const Weather_data = await prisma.weather_data.create({
     *   data: {
     *     // ... data to create a Weather_data
     *   }
     * })
     *
     **/
    create<T extends weather_dataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, weather_dataCreateArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<$Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Weather_data.
     *     @param {weather_dataCreateManyArgs} args - Arguments to create many Weather_data.
     *     @example
     *     // Create many Weather_data
     *     const weather_data = await prisma.weather_data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends weather_dataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_dataCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Weather_data.
     * @param {weather_dataDeleteArgs} args - Arguments to delete one Weather_data.
     * @example
     * // Delete one Weather_data
     * const Weather_data = await prisma.weather_data.delete({
     *   where: {
     *     // ... filter to delete one Weather_data
     *   }
     * })
     *
     **/
    delete<T extends weather_dataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, weather_dataDeleteArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<$Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Weather_data.
     * @param {weather_dataUpdateArgs} args - Arguments to update one Weather_data.
     * @example
     * // Update one Weather_data
     * const weather_data = await prisma.weather_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends weather_dataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, weather_dataUpdateArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<$Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Weather_data.
     * @param {weather_dataDeleteManyArgs} args - Arguments to filter Weather_data to delete.
     * @example
     * // Delete a few Weather_data
     * const { count } = await prisma.weather_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends weather_dataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, weather_dataDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Weather_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weather_data
     * const weather_data = await prisma.weather_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends weather_dataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, weather_dataUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Weather_data.
     * @param {weather_dataUpsertArgs} args - Arguments to update or create a Weather_data.
     * @example
     * // Update or create a Weather_data
     * const weather_data = await prisma.weather_data.upsert({
     *   create: {
     *     // ... data to create a Weather_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weather_data we want to update
     *   }
     * })
     **/
    upsert<T extends weather_dataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, weather_dataUpsertArgs<ExtArgs>>,
    ): Prisma__weather_dataClient<$Result.GetResult<Prisma.$weather_dataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Weather_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_dataCountArgs} args - Arguments to filter Weather_data to count.
     * @example
     * // Count the number of Weather_data
     * const count = await prisma.weather_data.count({
     *   where: {
     *     // ... the filter for the Weather_data we want to count
     *   }
     * })
     **/
    count<T extends weather_dataCountArgs>(
      args?: Subset<T, weather_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Weather_dataCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Weather_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Weather_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Weather_dataAggregateArgs>(
      args: Subset<T, Weather_dataAggregateArgs>,
    ): Prisma.PrismaPromise<GetWeather_dataAggregateType<T>>;

    /**
     * Group by Weather_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weather_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends weather_dataGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: weather_dataGroupByArgs['orderBy'] }
        : { orderBy?: weather_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, weather_dataGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetWeather_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the weather_data model
     */
    readonly fields: weather_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for weather_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__weather_dataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends locationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, locationDefaultArgs<ExtArgs>>,
    ): Prisma__locationClient<
      $Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the weather_data model
   */
  interface weather_dataFieldRefs {
    readonly id: FieldRef<'weather_data', 'String'>;
    readonly location_id: FieldRef<'weather_data', 'String'>;
    readonly temperature: FieldRef<'weather_data', 'Int'>;
    readonly humidity: FieldRef<'weather_data', 'Int'>;
    readonly wind_speed: FieldRef<'weather_data', 'Int'>;
    readonly precipitation: FieldRef<'weather_data', 'Int'>;
    readonly weather_condition: FieldRef<'weather_data', 'String'>;
    readonly created_at: FieldRef<'weather_data', 'DateTime'>;
    readonly updated_at: FieldRef<'weather_data', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * weather_data findUnique
   */
  export type weather_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * Filter, which weather_data to fetch.
     */
    where: weather_dataWhereUniqueInput;
  };

  /**
   * weather_data findUniqueOrThrow
   */
  export type weather_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * Filter, which weather_data to fetch.
     */
    where: weather_dataWhereUniqueInput;
  };

  /**
   * weather_data findFirst
   */
  export type weather_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * Filter, which weather_data to fetch.
     */
    where?: weather_dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_data to fetch.
     */
    orderBy?: weather_dataOrderByWithRelationInput | weather_dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for weather_data.
     */
    cursor?: weather_dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of weather_data.
     */
    distinct?: Weather_dataScalarFieldEnum | Weather_dataScalarFieldEnum[];
  };

  /**
   * weather_data findFirstOrThrow
   */
  export type weather_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * Filter, which weather_data to fetch.
     */
    where?: weather_dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_data to fetch.
     */
    orderBy?: weather_dataOrderByWithRelationInput | weather_dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for weather_data.
     */
    cursor?: weather_dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of weather_data.
     */
    distinct?: Weather_dataScalarFieldEnum | Weather_dataScalarFieldEnum[];
  };

  /**
   * weather_data findMany
   */
  export type weather_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * Filter, which weather_data to fetch.
     */
    where?: weather_dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of weather_data to fetch.
     */
    orderBy?: weather_dataOrderByWithRelationInput | weather_dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing weather_data.
     */
    cursor?: weather_dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` weather_data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` weather_data.
     */
    skip?: number;
    distinct?: Weather_dataScalarFieldEnum | Weather_dataScalarFieldEnum[];
  };

  /**
   * weather_data create
   */
  export type weather_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * The data needed to create a weather_data.
     */
    data: XOR<weather_dataCreateInput, weather_dataUncheckedCreateInput>;
  };

  /**
   * weather_data createMany
   */
  export type weather_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many weather_data.
     */
    data: weather_dataCreateManyInput | weather_dataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * weather_data update
   */
  export type weather_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * The data needed to update a weather_data.
     */
    data: XOR<weather_dataUpdateInput, weather_dataUncheckedUpdateInput>;
    /**
     * Choose, which weather_data to update.
     */
    where: weather_dataWhereUniqueInput;
  };

  /**
   * weather_data updateMany
   */
  export type weather_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update weather_data.
     */
    data: XOR<weather_dataUpdateManyMutationInput, weather_dataUncheckedUpdateManyInput>;
    /**
     * Filter which weather_data to update
     */
    where?: weather_dataWhereInput;
  };

  /**
   * weather_data upsert
   */
  export type weather_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * The filter to search for the weather_data to update in case it exists.
     */
    where: weather_dataWhereUniqueInput;
    /**
     * In case the weather_data found by the `where` argument doesn't exist, create a new weather_data with this data.
     */
    create: XOR<weather_dataCreateInput, weather_dataUncheckedCreateInput>;
    /**
     * In case the weather_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<weather_dataUpdateInput, weather_dataUncheckedUpdateInput>;
  };

  /**
   * weather_data delete
   */
  export type weather_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
    /**
     * Filter which weather_data to delete.
     */
    where: weather_dataWhereUniqueInput;
  };

  /**
   * weather_data deleteMany
   */
  export type weather_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weather_data to delete
     */
    where?: weather_dataWhereInput;
  };

  /**
   * weather_data without action
   */
  export type weather_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weather_data
     */
    select?: weather_dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: weather_dataInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BusinessScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    country: 'country';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum];

  export const LocationScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    latitude: 'latitude';
    longitude: 'longitude';
    city: 'city';
    state: 'state';
    country: 'country';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    business_id: 'business_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const User_preferenceScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    weather_alert_type: 'weather_alert_type';
    alert_frequency: 'alert_frequency';
    alert_delivery_method: 'alert_delivery_method';
    alert_time_preference: 'alert_time_preference';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type User_preferenceScalarFieldEnum =
    (typeof User_preferenceScalarFieldEnum)[keyof typeof User_preferenceScalarFieldEnum];

  export const Weather_alertScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    alert_type: 'alert_type';
    severity: 'severity';
    weather_alert_location: 'weather_alert_location';
    alert_time: 'alert_time';
    alert_message: 'alert_message';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Weather_alertScalarFieldEnum =
    (typeof Weather_alertScalarFieldEnum)[keyof typeof Weather_alertScalarFieldEnum];

  export const Weather_dataScalarFieldEnum: {
    id: 'id';
    location_id: 'location_id';
    temperature: 'temperature';
    humidity: 'humidity';
    wind_speed: 'wind_speed';
    precipitation: 'precipitation';
    weather_condition: 'weather_condition';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Weather_dataScalarFieldEnum =
    (typeof Weather_dataScalarFieldEnum)[keyof typeof Weather_dataScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type businessWhereInput = {
    AND?: businessWhereInput | businessWhereInput[];
    OR?: businessWhereInput[];
    NOT?: businessWhereInput | businessWhereInput[];
    id?: UuidFilter<'business'> | string;
    description?: StringNullableFilter<'business'> | string | null;
    address?: StringNullableFilter<'business'> | string | null;
    city?: StringNullableFilter<'business'> | string | null;
    state?: StringNullableFilter<'business'> | string | null;
    zip_code?: StringNullableFilter<'business'> | string | null;
    country?: StringNullableFilter<'business'> | string | null;
    name?: StringFilter<'business'> | string;
    created_at?: DateTimeFilter<'business'> | Date | string;
    updated_at?: DateTimeFilter<'business'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type businessOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type businessWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: businessWhereInput | businessWhereInput[];
      OR?: businessWhereInput[];
      NOT?: businessWhereInput | businessWhereInput[];
      description?: StringNullableFilter<'business'> | string | null;
      address?: StringNullableFilter<'business'> | string | null;
      city?: StringNullableFilter<'business'> | string | null;
      state?: StringNullableFilter<'business'> | string | null;
      zip_code?: StringNullableFilter<'business'> | string | null;
      country?: StringNullableFilter<'business'> | string | null;
      name?: StringFilter<'business'> | string;
      created_at?: DateTimeFilter<'business'> | Date | string;
      updated_at?: DateTimeFilter<'business'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type businessOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: businessCountOrderByAggregateInput;
    _max?: businessMaxOrderByAggregateInput;
    _min?: businessMinOrderByAggregateInput;
  };

  export type businessScalarWhereWithAggregatesInput = {
    AND?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    OR?: businessScalarWhereWithAggregatesInput[];
    NOT?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business'> | string;
    description?: StringNullableWithAggregatesFilter<'business'> | string | null;
    address?: StringNullableWithAggregatesFilter<'business'> | string | null;
    city?: StringNullableWithAggregatesFilter<'business'> | string | null;
    state?: StringNullableWithAggregatesFilter<'business'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'business'> | string | null;
    country?: StringNullableWithAggregatesFilter<'business'> | string | null;
    name?: StringWithAggregatesFilter<'business'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
  };

  export type locationWhereInput = {
    AND?: locationWhereInput | locationWhereInput[];
    OR?: locationWhereInput[];
    NOT?: locationWhereInput | locationWhereInput[];
    id?: UuidFilter<'location'> | string;
    user_id?: UuidFilter<'location'> | string;
    latitude?: StringFilter<'location'> | string;
    longitude?: StringFilter<'location'> | string;
    city?: StringFilter<'location'> | string;
    state?: StringFilter<'location'> | string;
    country?: StringFilter<'location'> | string;
    created_at?: DateTimeFilter<'location'> | Date | string;
    updated_at?: DateTimeFilter<'location'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    weather_data?: Weather_dataListRelationFilter;
  };

  export type locationOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    weather_data?: weather_dataOrderByRelationAggregateInput;
  };

  export type locationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: locationWhereInput | locationWhereInput[];
      OR?: locationWhereInput[];
      NOT?: locationWhereInput | locationWhereInput[];
      user_id?: UuidFilter<'location'> | string;
      latitude?: StringFilter<'location'> | string;
      longitude?: StringFilter<'location'> | string;
      city?: StringFilter<'location'> | string;
      state?: StringFilter<'location'> | string;
      country?: StringFilter<'location'> | string;
      created_at?: DateTimeFilter<'location'> | Date | string;
      updated_at?: DateTimeFilter<'location'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      weather_data?: Weather_dataListRelationFilter;
    },
    'id'
  >;

  export type locationOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: locationCountOrderByAggregateInput;
    _max?: locationMaxOrderByAggregateInput;
    _min?: locationMinOrderByAggregateInput;
  };

  export type locationScalarWhereWithAggregatesInput = {
    AND?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[];
    OR?: locationScalarWhereWithAggregatesInput[];
    NOT?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'location'> | string;
    user_id?: UuidWithAggregatesFilter<'location'> | string;
    latitude?: StringWithAggregatesFilter<'location'> | string;
    longitude?: StringWithAggregatesFilter<'location'> | string;
    city?: StringWithAggregatesFilter<'location'> | string;
    state?: StringWithAggregatesFilter<'location'> | string;
    country?: StringWithAggregatesFilter<'location'> | string;
    created_at?: DateTimeWithAggregatesFilter<'location'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'location'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    business_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    location?: LocationListRelationFilter;
    business?: XOR<BusinessNullableRelationFilter, businessWhereInput> | null;
    user_preference?: User_preferenceListRelationFilter;
    weather_alert?: Weather_alertListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    location?: locationOrderByRelationAggregateInput;
    business?: businessOrderByWithRelationInput;
    user_preference?: user_preferenceOrderByRelationAggregateInput;
    weather_alert?: weather_alertOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      business_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      location?: LocationListRelationFilter;
      business?: XOR<BusinessNullableRelationFilter, businessWhereInput> | null;
      user_preference?: User_preferenceListRelationFilter;
      weather_alert?: Weather_alertListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    business_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type user_preferenceWhereInput = {
    AND?: user_preferenceWhereInput | user_preferenceWhereInput[];
    OR?: user_preferenceWhereInput[];
    NOT?: user_preferenceWhereInput | user_preferenceWhereInput[];
    id?: UuidFilter<'user_preference'> | string;
    user_id?: UuidFilter<'user_preference'> | string;
    weather_alert_type?: StringFilter<'user_preference'> | string;
    alert_frequency?: IntFilter<'user_preference'> | number;
    alert_delivery_method?: StringFilter<'user_preference'> | string;
    alert_time_preference?: DateTimeFilter<'user_preference'> | Date | string;
    created_at?: DateTimeFilter<'user_preference'> | Date | string;
    updated_at?: DateTimeFilter<'user_preference'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type user_preferenceOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    weather_alert_type?: SortOrder;
    alert_frequency?: SortOrder;
    alert_delivery_method?: SortOrder;
    alert_time_preference?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type user_preferenceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: user_preferenceWhereInput | user_preferenceWhereInput[];
      OR?: user_preferenceWhereInput[];
      NOT?: user_preferenceWhereInput | user_preferenceWhereInput[];
      user_id?: UuidFilter<'user_preference'> | string;
      weather_alert_type?: StringFilter<'user_preference'> | string;
      alert_frequency?: IntFilter<'user_preference'> | number;
      alert_delivery_method?: StringFilter<'user_preference'> | string;
      alert_time_preference?: DateTimeFilter<'user_preference'> | Date | string;
      created_at?: DateTimeFilter<'user_preference'> | Date | string;
      updated_at?: DateTimeFilter<'user_preference'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type user_preferenceOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    weather_alert_type?: SortOrder;
    alert_frequency?: SortOrder;
    alert_delivery_method?: SortOrder;
    alert_time_preference?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: user_preferenceCountOrderByAggregateInput;
    _avg?: user_preferenceAvgOrderByAggregateInput;
    _max?: user_preferenceMaxOrderByAggregateInput;
    _min?: user_preferenceMinOrderByAggregateInput;
    _sum?: user_preferenceSumOrderByAggregateInput;
  };

  export type user_preferenceScalarWhereWithAggregatesInput = {
    AND?: user_preferenceScalarWhereWithAggregatesInput | user_preferenceScalarWhereWithAggregatesInput[];
    OR?: user_preferenceScalarWhereWithAggregatesInput[];
    NOT?: user_preferenceScalarWhereWithAggregatesInput | user_preferenceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user_preference'> | string;
    user_id?: UuidWithAggregatesFilter<'user_preference'> | string;
    weather_alert_type?: StringWithAggregatesFilter<'user_preference'> | string;
    alert_frequency?: IntWithAggregatesFilter<'user_preference'> | number;
    alert_delivery_method?: StringWithAggregatesFilter<'user_preference'> | string;
    alert_time_preference?: DateTimeWithAggregatesFilter<'user_preference'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'user_preference'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user_preference'> | Date | string;
  };

  export type weather_alertWhereInput = {
    AND?: weather_alertWhereInput | weather_alertWhereInput[];
    OR?: weather_alertWhereInput[];
    NOT?: weather_alertWhereInput | weather_alertWhereInput[];
    id?: UuidFilter<'weather_alert'> | string;
    user_id?: UuidFilter<'weather_alert'> | string;
    alert_type?: StringFilter<'weather_alert'> | string;
    severity?: StringFilter<'weather_alert'> | string;
    weather_alert_location?: StringFilter<'weather_alert'> | string;
    alert_time?: DateTimeFilter<'weather_alert'> | Date | string;
    alert_message?: StringFilter<'weather_alert'> | string;
    created_at?: DateTimeFilter<'weather_alert'> | Date | string;
    updated_at?: DateTimeFilter<'weather_alert'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type weather_alertOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    alert_type?: SortOrder;
    severity?: SortOrder;
    weather_alert_location?: SortOrder;
    alert_time?: SortOrder;
    alert_message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type weather_alertWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: weather_alertWhereInput | weather_alertWhereInput[];
      OR?: weather_alertWhereInput[];
      NOT?: weather_alertWhereInput | weather_alertWhereInput[];
      user_id?: UuidFilter<'weather_alert'> | string;
      alert_type?: StringFilter<'weather_alert'> | string;
      severity?: StringFilter<'weather_alert'> | string;
      weather_alert_location?: StringFilter<'weather_alert'> | string;
      alert_time?: DateTimeFilter<'weather_alert'> | Date | string;
      alert_message?: StringFilter<'weather_alert'> | string;
      created_at?: DateTimeFilter<'weather_alert'> | Date | string;
      updated_at?: DateTimeFilter<'weather_alert'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type weather_alertOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    alert_type?: SortOrder;
    severity?: SortOrder;
    weather_alert_location?: SortOrder;
    alert_time?: SortOrder;
    alert_message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: weather_alertCountOrderByAggregateInput;
    _max?: weather_alertMaxOrderByAggregateInput;
    _min?: weather_alertMinOrderByAggregateInput;
  };

  export type weather_alertScalarWhereWithAggregatesInput = {
    AND?: weather_alertScalarWhereWithAggregatesInput | weather_alertScalarWhereWithAggregatesInput[];
    OR?: weather_alertScalarWhereWithAggregatesInput[];
    NOT?: weather_alertScalarWhereWithAggregatesInput | weather_alertScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'weather_alert'> | string;
    user_id?: UuidWithAggregatesFilter<'weather_alert'> | string;
    alert_type?: StringWithAggregatesFilter<'weather_alert'> | string;
    severity?: StringWithAggregatesFilter<'weather_alert'> | string;
    weather_alert_location?: StringWithAggregatesFilter<'weather_alert'> | string;
    alert_time?: DateTimeWithAggregatesFilter<'weather_alert'> | Date | string;
    alert_message?: StringWithAggregatesFilter<'weather_alert'> | string;
    created_at?: DateTimeWithAggregatesFilter<'weather_alert'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'weather_alert'> | Date | string;
  };

  export type weather_dataWhereInput = {
    AND?: weather_dataWhereInput | weather_dataWhereInput[];
    OR?: weather_dataWhereInput[];
    NOT?: weather_dataWhereInput | weather_dataWhereInput[];
    id?: UuidFilter<'weather_data'> | string;
    location_id?: UuidFilter<'weather_data'> | string;
    temperature?: IntFilter<'weather_data'> | number;
    humidity?: IntFilter<'weather_data'> | number;
    wind_speed?: IntFilter<'weather_data'> | number;
    precipitation?: IntFilter<'weather_data'> | number;
    weather_condition?: StringFilter<'weather_data'> | string;
    created_at?: DateTimeFilter<'weather_data'> | Date | string;
    updated_at?: DateTimeFilter<'weather_data'> | Date | string;
    location?: XOR<LocationRelationFilter, locationWhereInput>;
  };

  export type weather_dataOrderByWithRelationInput = {
    id?: SortOrder;
    location_id?: SortOrder;
    temperature?: SortOrder;
    humidity?: SortOrder;
    wind_speed?: SortOrder;
    precipitation?: SortOrder;
    weather_condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    location?: locationOrderByWithRelationInput;
  };

  export type weather_dataWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: weather_dataWhereInput | weather_dataWhereInput[];
      OR?: weather_dataWhereInput[];
      NOT?: weather_dataWhereInput | weather_dataWhereInput[];
      location_id?: UuidFilter<'weather_data'> | string;
      temperature?: IntFilter<'weather_data'> | number;
      humidity?: IntFilter<'weather_data'> | number;
      wind_speed?: IntFilter<'weather_data'> | number;
      precipitation?: IntFilter<'weather_data'> | number;
      weather_condition?: StringFilter<'weather_data'> | string;
      created_at?: DateTimeFilter<'weather_data'> | Date | string;
      updated_at?: DateTimeFilter<'weather_data'> | Date | string;
      location?: XOR<LocationRelationFilter, locationWhereInput>;
    },
    'id'
  >;

  export type weather_dataOrderByWithAggregationInput = {
    id?: SortOrder;
    location_id?: SortOrder;
    temperature?: SortOrder;
    humidity?: SortOrder;
    wind_speed?: SortOrder;
    precipitation?: SortOrder;
    weather_condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: weather_dataCountOrderByAggregateInput;
    _avg?: weather_dataAvgOrderByAggregateInput;
    _max?: weather_dataMaxOrderByAggregateInput;
    _min?: weather_dataMinOrderByAggregateInput;
    _sum?: weather_dataSumOrderByAggregateInput;
  };

  export type weather_dataScalarWhereWithAggregatesInput = {
    AND?: weather_dataScalarWhereWithAggregatesInput | weather_dataScalarWhereWithAggregatesInput[];
    OR?: weather_dataScalarWhereWithAggregatesInput[];
    NOT?: weather_dataScalarWhereWithAggregatesInput | weather_dataScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'weather_data'> | string;
    location_id?: UuidWithAggregatesFilter<'weather_data'> | string;
    temperature?: IntWithAggregatesFilter<'weather_data'> | number;
    humidity?: IntWithAggregatesFilter<'weather_data'> | number;
    wind_speed?: IntWithAggregatesFilter<'weather_data'> | number;
    precipitation?: IntWithAggregatesFilter<'weather_data'> | number;
    weather_condition?: StringWithAggregatesFilter<'weather_data'> | string;
    created_at?: DateTimeWithAggregatesFilter<'weather_data'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'weather_data'> | Date | string;
  };

  export type businessCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type businessCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type businessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type businessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type locationCreateInput = {
    id?: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLocationInput;
    weather_data?: weather_dataCreateNestedManyWithoutLocationInput;
  };

  export type locationUncheckedCreateInput = {
    id?: string;
    user_id: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    weather_data?: weather_dataUncheckedCreateNestedManyWithoutLocationInput;
  };

  export type locationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLocationNestedInput;
    weather_data?: weather_dataUpdateManyWithoutLocationNestedInput;
  };

  export type locationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    weather_data?: weather_dataUncheckedUpdateManyWithoutLocationNestedInput;
  };

  export type locationCreateManyInput = {
    id?: string;
    user_id: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type locationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type locationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationCreateNestedManyWithoutUserInput;
    business?: businessCreateNestedOneWithoutUserInput;
    user_preference?: user_preferenceCreateNestedManyWithoutUserInput;
    weather_alert?: weather_alertCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationUncheckedCreateNestedManyWithoutUserInput;
    user_preference?: user_preferenceUncheckedCreateNestedManyWithoutUserInput;
    weather_alert?: weather_alertUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUpdateManyWithoutUserNestedInput;
    business?: businessUpdateOneWithoutUserNestedInput;
    user_preference?: user_preferenceUpdateManyWithoutUserNestedInput;
    weather_alert?: weather_alertUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUncheckedUpdateManyWithoutUserNestedInput;
    user_preference?: user_preferenceUncheckedUpdateManyWithoutUserNestedInput;
    weather_alert?: weather_alertUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_preferenceCreateInput = {
    id?: string;
    weather_alert_type: string;
    alert_frequency: number;
    alert_delivery_method: string;
    alert_time_preference: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutUser_preferenceInput;
  };

  export type user_preferenceUncheckedCreateInput = {
    id?: string;
    user_id: string;
    weather_alert_type: string;
    alert_frequency: number;
    alert_delivery_method: string;
    alert_time_preference: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_preferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    weather_alert_type?: StringFieldUpdateOperationsInput | string;
    alert_frequency?: IntFieldUpdateOperationsInput | number;
    alert_delivery_method?: StringFieldUpdateOperationsInput | string;
    alert_time_preference?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutUser_preferenceNestedInput;
  };

  export type user_preferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    weather_alert_type?: StringFieldUpdateOperationsInput | string;
    alert_frequency?: IntFieldUpdateOperationsInput | number;
    alert_delivery_method?: StringFieldUpdateOperationsInput | string;
    alert_time_preference?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_preferenceCreateManyInput = {
    id?: string;
    user_id: string;
    weather_alert_type: string;
    alert_frequency: number;
    alert_delivery_method: string;
    alert_time_preference: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_preferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    weather_alert_type?: StringFieldUpdateOperationsInput | string;
    alert_frequency?: IntFieldUpdateOperationsInput | number;
    alert_delivery_method?: StringFieldUpdateOperationsInput | string;
    alert_time_preference?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_preferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    weather_alert_type?: StringFieldUpdateOperationsInput | string;
    alert_frequency?: IntFieldUpdateOperationsInput | number;
    alert_delivery_method?: StringFieldUpdateOperationsInput | string;
    alert_time_preference?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_alertCreateInput = {
    id?: string;
    alert_type: string;
    severity: string;
    weather_alert_location: string;
    alert_time: Date | string;
    alert_message: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutWeather_alertInput;
  };

  export type weather_alertUncheckedCreateInput = {
    id?: string;
    user_id: string;
    alert_type: string;
    severity: string;
    weather_alert_location: string;
    alert_time: Date | string;
    alert_message: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_alertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    alert_type?: StringFieldUpdateOperationsInput | string;
    severity?: StringFieldUpdateOperationsInput | string;
    weather_alert_location?: StringFieldUpdateOperationsInput | string;
    alert_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    alert_message?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutWeather_alertNestedInput;
  };

  export type weather_alertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    alert_type?: StringFieldUpdateOperationsInput | string;
    severity?: StringFieldUpdateOperationsInput | string;
    weather_alert_location?: StringFieldUpdateOperationsInput | string;
    alert_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    alert_message?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_alertCreateManyInput = {
    id?: string;
    user_id: string;
    alert_type: string;
    severity: string;
    weather_alert_location: string;
    alert_time: Date | string;
    alert_message: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_alertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    alert_type?: StringFieldUpdateOperationsInput | string;
    severity?: StringFieldUpdateOperationsInput | string;
    weather_alert_location?: StringFieldUpdateOperationsInput | string;
    alert_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    alert_message?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_alertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    alert_type?: StringFieldUpdateOperationsInput | string;
    severity?: StringFieldUpdateOperationsInput | string;
    weather_alert_location?: StringFieldUpdateOperationsInput | string;
    alert_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    alert_message?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_dataCreateInput = {
    id?: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    location: locationCreateNestedOneWithoutWeather_dataInput;
  };

  export type weather_dataUncheckedCreateInput = {
    id?: string;
    location_id: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_dataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    temperature?: IntFieldUpdateOperationsInput | number;
    humidity?: IntFieldUpdateOperationsInput | number;
    wind_speed?: IntFieldUpdateOperationsInput | number;
    precipitation?: IntFieldUpdateOperationsInput | number;
    weather_condition?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUpdateOneRequiredWithoutWeather_dataNestedInput;
  };

  export type weather_dataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location_id?: StringFieldUpdateOperationsInput | string;
    temperature?: IntFieldUpdateOperationsInput | number;
    humidity?: IntFieldUpdateOperationsInput | number;
    wind_speed?: IntFieldUpdateOperationsInput | number;
    precipitation?: IntFieldUpdateOperationsInput | number;
    weather_condition?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_dataCreateManyInput = {
    id?: string;
    location_id: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_dataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    temperature?: IntFieldUpdateOperationsInput | number;
    humidity?: IntFieldUpdateOperationsInput | number;
    wind_speed?: IntFieldUpdateOperationsInput | number;
    precipitation?: IntFieldUpdateOperationsInput | number;
    weather_condition?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_dataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location_id?: StringFieldUpdateOperationsInput | string;
    temperature?: IntFieldUpdateOperationsInput | number;
    humidity?: IntFieldUpdateOperationsInput | number;
    wind_speed?: IntFieldUpdateOperationsInput | number;
    precipitation?: IntFieldUpdateOperationsInput | number;
    weather_condition?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type businessCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type businessMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type businessMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Weather_dataListRelationFilter = {
    every?: weather_dataWhereInput;
    some?: weather_dataWhereInput;
    none?: weather_dataWhereInput;
  };

  export type weather_dataOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type locationCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type locationMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type locationMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type LocationListRelationFilter = {
    every?: locationWhereInput;
    some?: locationWhereInput;
    none?: locationWhereInput;
  };

  export type BusinessNullableRelationFilter = {
    is?: businessWhereInput | null;
    isNot?: businessWhereInput | null;
  };

  export type User_preferenceListRelationFilter = {
    every?: user_preferenceWhereInput;
    some?: user_preferenceWhereInput;
    none?: user_preferenceWhereInput;
  };

  export type Weather_alertListRelationFilter = {
    every?: weather_alertWhereInput;
    some?: weather_alertWhereInput;
    none?: weather_alertWhereInput;
  };

  export type locationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type user_preferenceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type weather_alertOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type user_preferenceCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    weather_alert_type?: SortOrder;
    alert_frequency?: SortOrder;
    alert_delivery_method?: SortOrder;
    alert_time_preference?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_preferenceAvgOrderByAggregateInput = {
    alert_frequency?: SortOrder;
  };

  export type user_preferenceMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    weather_alert_type?: SortOrder;
    alert_frequency?: SortOrder;
    alert_delivery_method?: SortOrder;
    alert_time_preference?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_preferenceMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    weather_alert_type?: SortOrder;
    alert_frequency?: SortOrder;
    alert_delivery_method?: SortOrder;
    alert_time_preference?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_preferenceSumOrderByAggregateInput = {
    alert_frequency?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type weather_alertCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    alert_type?: SortOrder;
    severity?: SortOrder;
    weather_alert_location?: SortOrder;
    alert_time?: SortOrder;
    alert_message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type weather_alertMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    alert_type?: SortOrder;
    severity?: SortOrder;
    weather_alert_location?: SortOrder;
    alert_time?: SortOrder;
    alert_message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type weather_alertMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    alert_type?: SortOrder;
    severity?: SortOrder;
    weather_alert_location?: SortOrder;
    alert_time?: SortOrder;
    alert_message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type LocationRelationFilter = {
    is?: locationWhereInput;
    isNot?: locationWhereInput;
  };

  export type weather_dataCountOrderByAggregateInput = {
    id?: SortOrder;
    location_id?: SortOrder;
    temperature?: SortOrder;
    humidity?: SortOrder;
    wind_speed?: SortOrder;
    precipitation?: SortOrder;
    weather_condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type weather_dataAvgOrderByAggregateInput = {
    temperature?: SortOrder;
    humidity?: SortOrder;
    wind_speed?: SortOrder;
    precipitation?: SortOrder;
  };

  export type weather_dataMaxOrderByAggregateInput = {
    id?: SortOrder;
    location_id?: SortOrder;
    temperature?: SortOrder;
    humidity?: SortOrder;
    wind_speed?: SortOrder;
    precipitation?: SortOrder;
    weather_condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type weather_dataMinOrderByAggregateInput = {
    id?: SortOrder;
    location_id?: SortOrder;
    temperature?: SortOrder;
    humidity?: SortOrder;
    wind_speed?: SortOrder;
    precipitation?: SortOrder;
    weather_condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type weather_dataSumOrderByAggregateInput = {
    temperature?: SortOrder;
    humidity?: SortOrder;
    wind_speed?: SortOrder;
    precipitation?: SortOrder;
  };

  export type userCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    upsert?: userUpsertWithWhereUniqueWithoutBusinessInput | userUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutBusinessInput | userUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: userUpdateManyWithWhereWithoutBusinessInput | userUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    upsert?: userUpsertWithWhereUniqueWithoutBusinessInput | userUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutBusinessInput | userUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: userUpdateManyWithWhereWithoutBusinessInput | userUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutLocationInput = {
    create?: XOR<userCreateWithoutLocationInput, userUncheckedCreateWithoutLocationInput>;
    connectOrCreate?: userCreateOrConnectWithoutLocationInput;
    connect?: userWhereUniqueInput;
  };

  export type weather_dataCreateNestedManyWithoutLocationInput = {
    create?:
      | XOR<weather_dataCreateWithoutLocationInput, weather_dataUncheckedCreateWithoutLocationInput>
      | weather_dataCreateWithoutLocationInput[]
      | weather_dataUncheckedCreateWithoutLocationInput[];
    connectOrCreate?:
      | weather_dataCreateOrConnectWithoutLocationInput
      | weather_dataCreateOrConnectWithoutLocationInput[];
    createMany?: weather_dataCreateManyLocationInputEnvelope;
    connect?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
  };

  export type weather_dataUncheckedCreateNestedManyWithoutLocationInput = {
    create?:
      | XOR<weather_dataCreateWithoutLocationInput, weather_dataUncheckedCreateWithoutLocationInput>
      | weather_dataCreateWithoutLocationInput[]
      | weather_dataUncheckedCreateWithoutLocationInput[];
    connectOrCreate?:
      | weather_dataCreateOrConnectWithoutLocationInput
      | weather_dataCreateOrConnectWithoutLocationInput[];
    createMany?: weather_dataCreateManyLocationInputEnvelope;
    connect?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<userCreateWithoutLocationInput, userUncheckedCreateWithoutLocationInput>;
    connectOrCreate?: userCreateOrConnectWithoutLocationInput;
    upsert?: userUpsertWithoutLocationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLocationInput, userUpdateWithoutLocationInput>,
      userUncheckedUpdateWithoutLocationInput
    >;
  };

  export type weather_dataUpdateManyWithoutLocationNestedInput = {
    create?:
      | XOR<weather_dataCreateWithoutLocationInput, weather_dataUncheckedCreateWithoutLocationInput>
      | weather_dataCreateWithoutLocationInput[]
      | weather_dataUncheckedCreateWithoutLocationInput[];
    connectOrCreate?:
      | weather_dataCreateOrConnectWithoutLocationInput
      | weather_dataCreateOrConnectWithoutLocationInput[];
    upsert?:
      | weather_dataUpsertWithWhereUniqueWithoutLocationInput
      | weather_dataUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: weather_dataCreateManyLocationInputEnvelope;
    set?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    disconnect?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    delete?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    connect?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    update?:
      | weather_dataUpdateWithWhereUniqueWithoutLocationInput
      | weather_dataUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?:
      | weather_dataUpdateManyWithWhereWithoutLocationInput
      | weather_dataUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: weather_dataScalarWhereInput | weather_dataScalarWhereInput[];
  };

  export type weather_dataUncheckedUpdateManyWithoutLocationNestedInput = {
    create?:
      | XOR<weather_dataCreateWithoutLocationInput, weather_dataUncheckedCreateWithoutLocationInput>
      | weather_dataCreateWithoutLocationInput[]
      | weather_dataUncheckedCreateWithoutLocationInput[];
    connectOrCreate?:
      | weather_dataCreateOrConnectWithoutLocationInput
      | weather_dataCreateOrConnectWithoutLocationInput[];
    upsert?:
      | weather_dataUpsertWithWhereUniqueWithoutLocationInput
      | weather_dataUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: weather_dataCreateManyLocationInputEnvelope;
    set?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    disconnect?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    delete?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    connect?: weather_dataWhereUniqueInput | weather_dataWhereUniqueInput[];
    update?:
      | weather_dataUpdateWithWhereUniqueWithoutLocationInput
      | weather_dataUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?:
      | weather_dataUpdateManyWithWhereWithoutLocationInput
      | weather_dataUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: weather_dataScalarWhereInput | weather_dataScalarWhereInput[];
  };

  export type locationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<locationCreateWithoutUserInput, locationUncheckedCreateWithoutUserInput>
      | locationCreateWithoutUserInput[]
      | locationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: locationCreateOrConnectWithoutUserInput | locationCreateOrConnectWithoutUserInput[];
    createMany?: locationCreateManyUserInputEnvelope;
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[];
  };

  export type businessCreateNestedOneWithoutUserInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    connectOrCreate?: businessCreateOrConnectWithoutUserInput;
    connect?: businessWhereUniqueInput;
  };

  export type user_preferenceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<user_preferenceCreateWithoutUserInput, user_preferenceUncheckedCreateWithoutUserInput>
      | user_preferenceCreateWithoutUserInput[]
      | user_preferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_preferenceCreateOrConnectWithoutUserInput | user_preferenceCreateOrConnectWithoutUserInput[];
    createMany?: user_preferenceCreateManyUserInputEnvelope;
    connect?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
  };

  export type weather_alertCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<weather_alertCreateWithoutUserInput, weather_alertUncheckedCreateWithoutUserInput>
      | weather_alertCreateWithoutUserInput[]
      | weather_alertUncheckedCreateWithoutUserInput[];
    connectOrCreate?: weather_alertCreateOrConnectWithoutUserInput | weather_alertCreateOrConnectWithoutUserInput[];
    createMany?: weather_alertCreateManyUserInputEnvelope;
    connect?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
  };

  export type locationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<locationCreateWithoutUserInput, locationUncheckedCreateWithoutUserInput>
      | locationCreateWithoutUserInput[]
      | locationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: locationCreateOrConnectWithoutUserInput | locationCreateOrConnectWithoutUserInput[];
    createMany?: locationCreateManyUserInputEnvelope;
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[];
  };

  export type user_preferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<user_preferenceCreateWithoutUserInput, user_preferenceUncheckedCreateWithoutUserInput>
      | user_preferenceCreateWithoutUserInput[]
      | user_preferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_preferenceCreateOrConnectWithoutUserInput | user_preferenceCreateOrConnectWithoutUserInput[];
    createMany?: user_preferenceCreateManyUserInputEnvelope;
    connect?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
  };

  export type weather_alertUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<weather_alertCreateWithoutUserInput, weather_alertUncheckedCreateWithoutUserInput>
      | weather_alertCreateWithoutUserInput[]
      | weather_alertUncheckedCreateWithoutUserInput[];
    connectOrCreate?: weather_alertCreateOrConnectWithoutUserInput | weather_alertCreateOrConnectWithoutUserInput[];
    createMany?: weather_alertCreateManyUserInputEnvelope;
    connect?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
  };

  export type locationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<locationCreateWithoutUserInput, locationUncheckedCreateWithoutUserInput>
      | locationCreateWithoutUserInput[]
      | locationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: locationCreateOrConnectWithoutUserInput | locationCreateOrConnectWithoutUserInput[];
    upsert?: locationUpsertWithWhereUniqueWithoutUserInput | locationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: locationCreateManyUserInputEnvelope;
    set?: locationWhereUniqueInput | locationWhereUniqueInput[];
    disconnect?: locationWhereUniqueInput | locationWhereUniqueInput[];
    delete?: locationWhereUniqueInput | locationWhereUniqueInput[];
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[];
    update?: locationUpdateWithWhereUniqueWithoutUserInput | locationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: locationUpdateManyWithWhereWithoutUserInput | locationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: locationScalarWhereInput | locationScalarWhereInput[];
  };

  export type businessUpdateOneWithoutUserNestedInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    connectOrCreate?: businessCreateOrConnectWithoutUserInput;
    upsert?: businessUpsertWithoutUserInput;
    disconnect?: businessWhereInput | boolean;
    delete?: businessWhereInput | boolean;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutUserInput, businessUpdateWithoutUserInput>,
      businessUncheckedUpdateWithoutUserInput
    >;
  };

  export type user_preferenceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<user_preferenceCreateWithoutUserInput, user_preferenceUncheckedCreateWithoutUserInput>
      | user_preferenceCreateWithoutUserInput[]
      | user_preferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_preferenceCreateOrConnectWithoutUserInput | user_preferenceCreateOrConnectWithoutUserInput[];
    upsert?:
      | user_preferenceUpsertWithWhereUniqueWithoutUserInput
      | user_preferenceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: user_preferenceCreateManyUserInputEnvelope;
    set?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    disconnect?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    delete?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    connect?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    update?:
      | user_preferenceUpdateWithWhereUniqueWithoutUserInput
      | user_preferenceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | user_preferenceUpdateManyWithWhereWithoutUserInput
      | user_preferenceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: user_preferenceScalarWhereInput | user_preferenceScalarWhereInput[];
  };

  export type weather_alertUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<weather_alertCreateWithoutUserInput, weather_alertUncheckedCreateWithoutUserInput>
      | weather_alertCreateWithoutUserInput[]
      | weather_alertUncheckedCreateWithoutUserInput[];
    connectOrCreate?: weather_alertCreateOrConnectWithoutUserInput | weather_alertCreateOrConnectWithoutUserInput[];
    upsert?: weather_alertUpsertWithWhereUniqueWithoutUserInput | weather_alertUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: weather_alertCreateManyUserInputEnvelope;
    set?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    disconnect?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    delete?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    connect?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    update?: weather_alertUpdateWithWhereUniqueWithoutUserInput | weather_alertUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: weather_alertUpdateManyWithWhereWithoutUserInput | weather_alertUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: weather_alertScalarWhereInput | weather_alertScalarWhereInput[];
  };

  export type locationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<locationCreateWithoutUserInput, locationUncheckedCreateWithoutUserInput>
      | locationCreateWithoutUserInput[]
      | locationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: locationCreateOrConnectWithoutUserInput | locationCreateOrConnectWithoutUserInput[];
    upsert?: locationUpsertWithWhereUniqueWithoutUserInput | locationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: locationCreateManyUserInputEnvelope;
    set?: locationWhereUniqueInput | locationWhereUniqueInput[];
    disconnect?: locationWhereUniqueInput | locationWhereUniqueInput[];
    delete?: locationWhereUniqueInput | locationWhereUniqueInput[];
    connect?: locationWhereUniqueInput | locationWhereUniqueInput[];
    update?: locationUpdateWithWhereUniqueWithoutUserInput | locationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: locationUpdateManyWithWhereWithoutUserInput | locationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: locationScalarWhereInput | locationScalarWhereInput[];
  };

  export type user_preferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<user_preferenceCreateWithoutUserInput, user_preferenceUncheckedCreateWithoutUserInput>
      | user_preferenceCreateWithoutUserInput[]
      | user_preferenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_preferenceCreateOrConnectWithoutUserInput | user_preferenceCreateOrConnectWithoutUserInput[];
    upsert?:
      | user_preferenceUpsertWithWhereUniqueWithoutUserInput
      | user_preferenceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: user_preferenceCreateManyUserInputEnvelope;
    set?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    disconnect?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    delete?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    connect?: user_preferenceWhereUniqueInput | user_preferenceWhereUniqueInput[];
    update?:
      | user_preferenceUpdateWithWhereUniqueWithoutUserInput
      | user_preferenceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | user_preferenceUpdateManyWithWhereWithoutUserInput
      | user_preferenceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: user_preferenceScalarWhereInput | user_preferenceScalarWhereInput[];
  };

  export type weather_alertUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<weather_alertCreateWithoutUserInput, weather_alertUncheckedCreateWithoutUserInput>
      | weather_alertCreateWithoutUserInput[]
      | weather_alertUncheckedCreateWithoutUserInput[];
    connectOrCreate?: weather_alertCreateOrConnectWithoutUserInput | weather_alertCreateOrConnectWithoutUserInput[];
    upsert?: weather_alertUpsertWithWhereUniqueWithoutUserInput | weather_alertUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: weather_alertCreateManyUserInputEnvelope;
    set?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    disconnect?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    delete?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    connect?: weather_alertWhereUniqueInput | weather_alertWhereUniqueInput[];
    update?: weather_alertUpdateWithWhereUniqueWithoutUserInput | weather_alertUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: weather_alertUpdateManyWithWhereWithoutUserInput | weather_alertUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: weather_alertScalarWhereInput | weather_alertScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutUser_preferenceInput = {
    create?: XOR<userCreateWithoutUser_preferenceInput, userUncheckedCreateWithoutUser_preferenceInput>;
    connectOrCreate?: userCreateOrConnectWithoutUser_preferenceInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutUser_preferenceNestedInput = {
    create?: XOR<userCreateWithoutUser_preferenceInput, userUncheckedCreateWithoutUser_preferenceInput>;
    connectOrCreate?: userCreateOrConnectWithoutUser_preferenceInput;
    upsert?: userUpsertWithoutUser_preferenceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutUser_preferenceInput, userUpdateWithoutUser_preferenceInput>,
      userUncheckedUpdateWithoutUser_preferenceInput
    >;
  };

  export type userCreateNestedOneWithoutWeather_alertInput = {
    create?: XOR<userCreateWithoutWeather_alertInput, userUncheckedCreateWithoutWeather_alertInput>;
    connectOrCreate?: userCreateOrConnectWithoutWeather_alertInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutWeather_alertNestedInput = {
    create?: XOR<userCreateWithoutWeather_alertInput, userUncheckedCreateWithoutWeather_alertInput>;
    connectOrCreate?: userCreateOrConnectWithoutWeather_alertInput;
    upsert?: userUpsertWithoutWeather_alertInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutWeather_alertInput, userUpdateWithoutWeather_alertInput>,
      userUncheckedUpdateWithoutWeather_alertInput
    >;
  };

  export type locationCreateNestedOneWithoutWeather_dataInput = {
    create?: XOR<locationCreateWithoutWeather_dataInput, locationUncheckedCreateWithoutWeather_dataInput>;
    connectOrCreate?: locationCreateOrConnectWithoutWeather_dataInput;
    connect?: locationWhereUniqueInput;
  };

  export type locationUpdateOneRequiredWithoutWeather_dataNestedInput = {
    create?: XOR<locationCreateWithoutWeather_dataInput, locationUncheckedCreateWithoutWeather_dataInput>;
    connectOrCreate?: locationCreateOrConnectWithoutWeather_dataInput;
    upsert?: locationUpsertWithoutWeather_dataInput;
    connect?: locationWhereUniqueInput;
    update?: XOR<
      XOR<locationUpdateToOneWithWhereWithoutWeather_dataInput, locationUpdateWithoutWeather_dataInput>,
      locationUncheckedUpdateWithoutWeather_dataInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationCreateNestedManyWithoutUserInput;
    user_preference?: user_preferenceCreateNestedManyWithoutUserInput;
    weather_alert?: weather_alertCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationUncheckedCreateNestedManyWithoutUserInput;
    user_preference?: user_preferenceUncheckedCreateNestedManyWithoutUserInput;
    weather_alert?: weather_alertUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBusinessInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>;
  };

  export type userCreateManyBusinessInputEnvelope = {
    data: userCreateManyBusinessInput | userCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutBusinessInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutBusinessInput, userUncheckedUpdateWithoutBusinessInput>;
    create: XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>;
  };

  export type userUpdateWithWhereUniqueWithoutBusinessInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutBusinessInput, userUncheckedUpdateWithoutBusinessInput>;
  };

  export type userUpdateManyWithWhereWithoutBusinessInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    business_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type userCreateWithoutLocationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business?: businessCreateNestedOneWithoutUserInput;
    user_preference?: user_preferenceCreateNestedManyWithoutUserInput;
    weather_alert?: weather_alertCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLocationInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_preference?: user_preferenceUncheckedCreateNestedManyWithoutUserInput;
    weather_alert?: weather_alertUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLocationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLocationInput, userUncheckedCreateWithoutLocationInput>;
  };

  export type weather_dataCreateWithoutLocationInput = {
    id?: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_dataUncheckedCreateWithoutLocationInput = {
    id?: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_dataCreateOrConnectWithoutLocationInput = {
    where: weather_dataWhereUniqueInput;
    create: XOR<weather_dataCreateWithoutLocationInput, weather_dataUncheckedCreateWithoutLocationInput>;
  };

  export type weather_dataCreateManyLocationInputEnvelope = {
    data: weather_dataCreateManyLocationInput | weather_dataCreateManyLocationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutLocationInput = {
    update: XOR<userUpdateWithoutLocationInput, userUncheckedUpdateWithoutLocationInput>;
    create: XOR<userCreateWithoutLocationInput, userUncheckedCreateWithoutLocationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLocationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLocationInput, userUncheckedUpdateWithoutLocationInput>;
  };

  export type userUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneWithoutUserNestedInput;
    user_preference?: user_preferenceUpdateManyWithoutUserNestedInput;
    weather_alert?: weather_alertUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_preference?: user_preferenceUncheckedUpdateManyWithoutUserNestedInput;
    weather_alert?: weather_alertUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type weather_dataUpsertWithWhereUniqueWithoutLocationInput = {
    where: weather_dataWhereUniqueInput;
    update: XOR<weather_dataUpdateWithoutLocationInput, weather_dataUncheckedUpdateWithoutLocationInput>;
    create: XOR<weather_dataCreateWithoutLocationInput, weather_dataUncheckedCreateWithoutLocationInput>;
  };

  export type weather_dataUpdateWithWhereUniqueWithoutLocationInput = {
    where: weather_dataWhereUniqueInput;
    data: XOR<weather_dataUpdateWithoutLocationInput, weather_dataUncheckedUpdateWithoutLocationInput>;
  };

  export type weather_dataUpdateManyWithWhereWithoutLocationInput = {
    where: weather_dataScalarWhereInput;
    data: XOR<weather_dataUpdateManyMutationInput, weather_dataUncheckedUpdateManyWithoutLocationInput>;
  };

  export type weather_dataScalarWhereInput = {
    AND?: weather_dataScalarWhereInput | weather_dataScalarWhereInput[];
    OR?: weather_dataScalarWhereInput[];
    NOT?: weather_dataScalarWhereInput | weather_dataScalarWhereInput[];
    id?: UuidFilter<'weather_data'> | string;
    location_id?: UuidFilter<'weather_data'> | string;
    temperature?: IntFilter<'weather_data'> | number;
    humidity?: IntFilter<'weather_data'> | number;
    wind_speed?: IntFilter<'weather_data'> | number;
    precipitation?: IntFilter<'weather_data'> | number;
    weather_condition?: StringFilter<'weather_data'> | string;
    created_at?: DateTimeFilter<'weather_data'> | Date | string;
    updated_at?: DateTimeFilter<'weather_data'> | Date | string;
  };

  export type locationCreateWithoutUserInput = {
    id?: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    weather_data?: weather_dataCreateNestedManyWithoutLocationInput;
  };

  export type locationUncheckedCreateWithoutUserInput = {
    id?: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    weather_data?: weather_dataUncheckedCreateNestedManyWithoutLocationInput;
  };

  export type locationCreateOrConnectWithoutUserInput = {
    where: locationWhereUniqueInput;
    create: XOR<locationCreateWithoutUserInput, locationUncheckedCreateWithoutUserInput>;
  };

  export type locationCreateManyUserInputEnvelope = {
    data: locationCreateManyUserInput | locationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type businessCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type businessUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type businessCreateOrConnectWithoutUserInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
  };

  export type user_preferenceCreateWithoutUserInput = {
    id?: string;
    weather_alert_type: string;
    alert_frequency: number;
    alert_delivery_method: string;
    alert_time_preference: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_preferenceUncheckedCreateWithoutUserInput = {
    id?: string;
    weather_alert_type: string;
    alert_frequency: number;
    alert_delivery_method: string;
    alert_time_preference: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_preferenceCreateOrConnectWithoutUserInput = {
    where: user_preferenceWhereUniqueInput;
    create: XOR<user_preferenceCreateWithoutUserInput, user_preferenceUncheckedCreateWithoutUserInput>;
  };

  export type user_preferenceCreateManyUserInputEnvelope = {
    data: user_preferenceCreateManyUserInput | user_preferenceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type weather_alertCreateWithoutUserInput = {
    id?: string;
    alert_type: string;
    severity: string;
    weather_alert_location: string;
    alert_time: Date | string;
    alert_message: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_alertUncheckedCreateWithoutUserInput = {
    id?: string;
    alert_type: string;
    severity: string;
    weather_alert_location: string;
    alert_time: Date | string;
    alert_message: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_alertCreateOrConnectWithoutUserInput = {
    where: weather_alertWhereUniqueInput;
    create: XOR<weather_alertCreateWithoutUserInput, weather_alertUncheckedCreateWithoutUserInput>;
  };

  export type weather_alertCreateManyUserInputEnvelope = {
    data: weather_alertCreateManyUserInput | weather_alertCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type locationUpsertWithWhereUniqueWithoutUserInput = {
    where: locationWhereUniqueInput;
    update: XOR<locationUpdateWithoutUserInput, locationUncheckedUpdateWithoutUserInput>;
    create: XOR<locationCreateWithoutUserInput, locationUncheckedCreateWithoutUserInput>;
  };

  export type locationUpdateWithWhereUniqueWithoutUserInput = {
    where: locationWhereUniqueInput;
    data: XOR<locationUpdateWithoutUserInput, locationUncheckedUpdateWithoutUserInput>;
  };

  export type locationUpdateManyWithWhereWithoutUserInput = {
    where: locationScalarWhereInput;
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyWithoutUserInput>;
  };

  export type locationScalarWhereInput = {
    AND?: locationScalarWhereInput | locationScalarWhereInput[];
    OR?: locationScalarWhereInput[];
    NOT?: locationScalarWhereInput | locationScalarWhereInput[];
    id?: UuidFilter<'location'> | string;
    user_id?: UuidFilter<'location'> | string;
    latitude?: StringFilter<'location'> | string;
    longitude?: StringFilter<'location'> | string;
    city?: StringFilter<'location'> | string;
    state?: StringFilter<'location'> | string;
    country?: StringFilter<'location'> | string;
    created_at?: DateTimeFilter<'location'> | Date | string;
    updated_at?: DateTimeFilter<'location'> | Date | string;
  };

  export type businessUpsertWithoutUserInput = {
    update: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>;
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutUserInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>;
  };

  export type businessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type businessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_preferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: user_preferenceWhereUniqueInput;
    update: XOR<user_preferenceUpdateWithoutUserInput, user_preferenceUncheckedUpdateWithoutUserInput>;
    create: XOR<user_preferenceCreateWithoutUserInput, user_preferenceUncheckedCreateWithoutUserInput>;
  };

  export type user_preferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: user_preferenceWhereUniqueInput;
    data: XOR<user_preferenceUpdateWithoutUserInput, user_preferenceUncheckedUpdateWithoutUserInput>;
  };

  export type user_preferenceUpdateManyWithWhereWithoutUserInput = {
    where: user_preferenceScalarWhereInput;
    data: XOR<user_preferenceUpdateManyMutationInput, user_preferenceUncheckedUpdateManyWithoutUserInput>;
  };

  export type user_preferenceScalarWhereInput = {
    AND?: user_preferenceScalarWhereInput | user_preferenceScalarWhereInput[];
    OR?: user_preferenceScalarWhereInput[];
    NOT?: user_preferenceScalarWhereInput | user_preferenceScalarWhereInput[];
    id?: UuidFilter<'user_preference'> | string;
    user_id?: UuidFilter<'user_preference'> | string;
    weather_alert_type?: StringFilter<'user_preference'> | string;
    alert_frequency?: IntFilter<'user_preference'> | number;
    alert_delivery_method?: StringFilter<'user_preference'> | string;
    alert_time_preference?: DateTimeFilter<'user_preference'> | Date | string;
    created_at?: DateTimeFilter<'user_preference'> | Date | string;
    updated_at?: DateTimeFilter<'user_preference'> | Date | string;
  };

  export type weather_alertUpsertWithWhereUniqueWithoutUserInput = {
    where: weather_alertWhereUniqueInput;
    update: XOR<weather_alertUpdateWithoutUserInput, weather_alertUncheckedUpdateWithoutUserInput>;
    create: XOR<weather_alertCreateWithoutUserInput, weather_alertUncheckedCreateWithoutUserInput>;
  };

  export type weather_alertUpdateWithWhereUniqueWithoutUserInput = {
    where: weather_alertWhereUniqueInput;
    data: XOR<weather_alertUpdateWithoutUserInput, weather_alertUncheckedUpdateWithoutUserInput>;
  };

  export type weather_alertUpdateManyWithWhereWithoutUserInput = {
    where: weather_alertScalarWhereInput;
    data: XOR<weather_alertUpdateManyMutationInput, weather_alertUncheckedUpdateManyWithoutUserInput>;
  };

  export type weather_alertScalarWhereInput = {
    AND?: weather_alertScalarWhereInput | weather_alertScalarWhereInput[];
    OR?: weather_alertScalarWhereInput[];
    NOT?: weather_alertScalarWhereInput | weather_alertScalarWhereInput[];
    id?: UuidFilter<'weather_alert'> | string;
    user_id?: UuidFilter<'weather_alert'> | string;
    alert_type?: StringFilter<'weather_alert'> | string;
    severity?: StringFilter<'weather_alert'> | string;
    weather_alert_location?: StringFilter<'weather_alert'> | string;
    alert_time?: DateTimeFilter<'weather_alert'> | Date | string;
    alert_message?: StringFilter<'weather_alert'> | string;
    created_at?: DateTimeFilter<'weather_alert'> | Date | string;
    updated_at?: DateTimeFilter<'weather_alert'> | Date | string;
  };

  export type userCreateWithoutUser_preferenceInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationCreateNestedManyWithoutUserInput;
    business?: businessCreateNestedOneWithoutUserInput;
    weather_alert?: weather_alertCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutUser_preferenceInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationUncheckedCreateNestedManyWithoutUserInput;
    weather_alert?: weather_alertUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutUser_preferenceInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutUser_preferenceInput, userUncheckedCreateWithoutUser_preferenceInput>;
  };

  export type userUpsertWithoutUser_preferenceInput = {
    update: XOR<userUpdateWithoutUser_preferenceInput, userUncheckedUpdateWithoutUser_preferenceInput>;
    create: XOR<userCreateWithoutUser_preferenceInput, userUncheckedCreateWithoutUser_preferenceInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutUser_preferenceInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutUser_preferenceInput, userUncheckedUpdateWithoutUser_preferenceInput>;
  };

  export type userUpdateWithoutUser_preferenceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUpdateManyWithoutUserNestedInput;
    business?: businessUpdateOneWithoutUserNestedInput;
    weather_alert?: weather_alertUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutUser_preferenceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUncheckedUpdateManyWithoutUserNestedInput;
    weather_alert?: weather_alertUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutWeather_alertInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationCreateNestedManyWithoutUserInput;
    business?: businessCreateNestedOneWithoutUserInput;
    user_preference?: user_preferenceCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutWeather_alertInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    location?: locationUncheckedCreateNestedManyWithoutUserInput;
    user_preference?: user_preferenceUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutWeather_alertInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutWeather_alertInput, userUncheckedCreateWithoutWeather_alertInput>;
  };

  export type userUpsertWithoutWeather_alertInput = {
    update: XOR<userUpdateWithoutWeather_alertInput, userUncheckedUpdateWithoutWeather_alertInput>;
    create: XOR<userCreateWithoutWeather_alertInput, userUncheckedCreateWithoutWeather_alertInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutWeather_alertInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutWeather_alertInput, userUncheckedUpdateWithoutWeather_alertInput>;
  };

  export type userUpdateWithoutWeather_alertInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUpdateManyWithoutUserNestedInput;
    business?: businessUpdateOneWithoutUserNestedInput;
    user_preference?: user_preferenceUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutWeather_alertInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUncheckedUpdateManyWithoutUserNestedInput;
    user_preference?: user_preferenceUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type locationCreateWithoutWeather_dataInput = {
    id?: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLocationInput;
  };

  export type locationUncheckedCreateWithoutWeather_dataInput = {
    id?: string;
    user_id: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type locationCreateOrConnectWithoutWeather_dataInput = {
    where: locationWhereUniqueInput;
    create: XOR<locationCreateWithoutWeather_dataInput, locationUncheckedCreateWithoutWeather_dataInput>;
  };

  export type locationUpsertWithoutWeather_dataInput = {
    update: XOR<locationUpdateWithoutWeather_dataInput, locationUncheckedUpdateWithoutWeather_dataInput>;
    create: XOR<locationCreateWithoutWeather_dataInput, locationUncheckedCreateWithoutWeather_dataInput>;
    where?: locationWhereInput;
  };

  export type locationUpdateToOneWithWhereWithoutWeather_dataInput = {
    where?: locationWhereInput;
    data: XOR<locationUpdateWithoutWeather_dataInput, locationUncheckedUpdateWithoutWeather_dataInput>;
  };

  export type locationUpdateWithoutWeather_dataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLocationNestedInput;
  };

  export type locationUncheckedUpdateWithoutWeather_dataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUpdateManyWithoutUserNestedInput;
    user_preference?: user_preferenceUpdateManyWithoutUserNestedInput;
    weather_alert?: weather_alertUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: locationUncheckedUpdateManyWithoutUserNestedInput;
    user_preference?: user_preferenceUncheckedUpdateManyWithoutUserNestedInput;
    weather_alert?: weather_alertUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_dataCreateManyLocationInput = {
    id?: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    precipitation: number;
    weather_condition: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_dataUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    temperature?: IntFieldUpdateOperationsInput | number;
    humidity?: IntFieldUpdateOperationsInput | number;
    wind_speed?: IntFieldUpdateOperationsInput | number;
    precipitation?: IntFieldUpdateOperationsInput | number;
    weather_condition?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_dataUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    temperature?: IntFieldUpdateOperationsInput | number;
    humidity?: IntFieldUpdateOperationsInput | number;
    wind_speed?: IntFieldUpdateOperationsInput | number;
    precipitation?: IntFieldUpdateOperationsInput | number;
    weather_condition?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_dataUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    temperature?: IntFieldUpdateOperationsInput | number;
    humidity?: IntFieldUpdateOperationsInput | number;
    wind_speed?: IntFieldUpdateOperationsInput | number;
    precipitation?: IntFieldUpdateOperationsInput | number;
    weather_condition?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type locationCreateManyUserInput = {
    id?: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_preferenceCreateManyUserInput = {
    id?: string;
    weather_alert_type: string;
    alert_frequency: number;
    alert_delivery_method: string;
    alert_time_preference: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type weather_alertCreateManyUserInput = {
    id?: string;
    alert_type: string;
    severity: string;
    weather_alert_location: string;
    alert_time: Date | string;
    alert_message: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type locationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    weather_data?: weather_dataUpdateManyWithoutLocationNestedInput;
  };

  export type locationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    weather_data?: weather_dataUncheckedUpdateManyWithoutLocationNestedInput;
  };

  export type locationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    latitude?: StringFieldUpdateOperationsInput | string;
    longitude?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_preferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    weather_alert_type?: StringFieldUpdateOperationsInput | string;
    alert_frequency?: IntFieldUpdateOperationsInput | number;
    alert_delivery_method?: StringFieldUpdateOperationsInput | string;
    alert_time_preference?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_preferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    weather_alert_type?: StringFieldUpdateOperationsInput | string;
    alert_frequency?: IntFieldUpdateOperationsInput | number;
    alert_delivery_method?: StringFieldUpdateOperationsInput | string;
    alert_time_preference?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_preferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    weather_alert_type?: StringFieldUpdateOperationsInput | string;
    alert_frequency?: IntFieldUpdateOperationsInput | number;
    alert_delivery_method?: StringFieldUpdateOperationsInput | string;
    alert_time_preference?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_alertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    alert_type?: StringFieldUpdateOperationsInput | string;
    severity?: StringFieldUpdateOperationsInput | string;
    weather_alert_location?: StringFieldUpdateOperationsInput | string;
    alert_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    alert_message?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_alertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    alert_type?: StringFieldUpdateOperationsInput | string;
    severity?: StringFieldUpdateOperationsInput | string;
    weather_alert_location?: StringFieldUpdateOperationsInput | string;
    alert_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    alert_message?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type weather_alertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    alert_type?: StringFieldUpdateOperationsInput | string;
    severity?: StringFieldUpdateOperationsInput | string;
    weather_alert_location?: StringFieldUpdateOperationsInput | string;
    alert_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    alert_message?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use BusinessCountOutputTypeDefaultArgs instead
   */
  export type BusinessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use LocationCountOutputTypeDefaultArgs instead
   */
  export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    LocationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use businessDefaultArgs instead
   */
  export type businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    businessDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use locationDefaultArgs instead
   */
  export type locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    locationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use user_preferenceDefaultArgs instead
   */
  export type user_preferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    user_preferenceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use weather_alertDefaultArgs instead
   */
  export type weather_alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    weather_alertDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use weather_dataDefaultArgs instead
   */
  export type weather_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    weather_dataDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
