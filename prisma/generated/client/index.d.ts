
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model Concessionaire
 * 
 */
export type Concessionaire = $Result.DefaultSelection<Prisma.$ConcessionairePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model GeneratedDocument
 * 
 */
export type GeneratedDocument = $Result.DefaultSelection<Prisma.$GeneratedDocumentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.concessionaire`: Exposes CRUD operations for the **Concessionaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Concessionaires
    * const concessionaires = await prisma.concessionaire.findMany()
    * ```
    */
  get concessionaire(): Prisma.ConcessionaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedDocument`: Exposes CRUD operations for the **GeneratedDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedDocuments
    * const generatedDocuments = await prisma.generatedDocument.findMany()
    * ```
    */
  get generatedDocument(): Prisma.GeneratedDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    State: 'State',
    Concessionaire: 'Concessionaire',
    Project: 'Project',
    GeneratedDocument: 'GeneratedDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "state" | "concessionaire" | "project" | "generatedDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      Concessionaire: {
        payload: Prisma.$ConcessionairePayload<ExtArgs>
        fields: Prisma.ConcessionaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConcessionaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConcessionaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>
          }
          findFirst: {
            args: Prisma.ConcessionaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConcessionaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>
          }
          findMany: {
            args: Prisma.ConcessionaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>[]
          }
          create: {
            args: Prisma.ConcessionaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>
          }
          createMany: {
            args: Prisma.ConcessionaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConcessionaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>[]
          }
          delete: {
            args: Prisma.ConcessionaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>
          }
          update: {
            args: Prisma.ConcessionaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>
          }
          deleteMany: {
            args: Prisma.ConcessionaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConcessionaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConcessionaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>[]
          }
          upsert: {
            args: Prisma.ConcessionaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConcessionairePayload>
          }
          aggregate: {
            args: Prisma.ConcessionaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConcessionaire>
          }
          groupBy: {
            args: Prisma.ConcessionaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConcessionaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConcessionaireCountArgs<ExtArgs>
            result: $Utils.Optional<ConcessionaireCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      GeneratedDocument: {
        payload: Prisma.$GeneratedDocumentPayload<ExtArgs>
        fields: Prisma.GeneratedDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          findFirst: {
            args: Prisma.GeneratedDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          findMany: {
            args: Prisma.GeneratedDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          create: {
            args: Prisma.GeneratedDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          createMany: {
            args: Prisma.GeneratedDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          delete: {
            args: Prisma.GeneratedDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          update: {
            args: Prisma.GeneratedDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          upsert: {
            args: Prisma.GeneratedDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          aggregate: {
            args: Prisma.GeneratedDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedDocument>
          }
          groupBy: {
            args: Prisma.GeneratedDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    state?: StateOmit
    concessionaire?: ConcessionaireOmit
    project?: ProjectOmit
    generatedDocument?: GeneratedDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    projects: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CompanyCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    concessionaires: number
    projects: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concessionaires?: boolean | StateCountOutputTypeCountConcessionairesArgs
    projects?: boolean | StateCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountConcessionairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConcessionaireWhereInput
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ConcessionaireCountOutputType
   */

  export type ConcessionaireCountOutputType = {
    projects: number
  }

  export type ConcessionaireCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ConcessionaireCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ConcessionaireCountOutputType without action
   */
  export type ConcessionaireCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConcessionaireCountOutputType
     */
    select?: ConcessionaireCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConcessionaireCountOutputType without action
   */
  export type ConcessionaireCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    generatedDocs: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedDocs?: boolean | ProjectCountOutputTypeCountGeneratedDocsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountGeneratedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    razaoSocial: string | null
    cnpj: string | null
    address: string | null
    techResp: string | null
    email: string | null
    phone: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    razaoSocial: string | null
    cnpj: string | null
    address: string | null
    techResp: string | null
    email: string | null
    phone: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    razaoSocial: number
    cnpj: number
    address: number
    techResp: number
    email: number
    phone: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    razaoSocial?: true
    cnpj?: true
    address?: true
    techResp?: true
    email?: true
    phone?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    razaoSocial?: true
    cnpj?: true
    address?: true
    techResp?: true
    email?: true
    phone?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    razaoSocial?: true
    cnpj?: true
    address?: true
    techResp?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    razaoSocial: string | null
    cnpj: string
    address: string
    techResp: string
    email: string
    phone: string
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    address?: boolean
    techResp?: boolean
    email?: boolean
    phone?: boolean
    projects?: boolean | Company$projectsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    address?: boolean
    techResp?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    address?: boolean
    techResp?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    address?: boolean
    techResp?: boolean
    email?: boolean
    phone?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "razaoSocial" | "cnpj" | "address" | "techResp" | "email" | "phone", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Company$projectsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      razaoSocial: string | null
      cnpj: string
      address: string
      techResp: string
      email: string
      phone: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Company$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Company$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly razaoSocial: FieldRef<"Company", 'String'>
    readonly cnpj: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly techResp: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.projects
   */
  export type Company$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateMinAggregateOutputType = {
    id: string | null
    name: string | null
    uf: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    uf: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    uf: number
    _all: number
  }


  export type StateMinAggregateInputType = {
    id?: true
    name?: true
    uf?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
    uf?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    uf?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: string
    name: string
    uf: string
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uf?: boolean
    concessionaires?: boolean | State$concessionairesArgs<ExtArgs>
    projects?: boolean | State$projectsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uf?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uf?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
    uf?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "uf", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concessionaires?: boolean | State$concessionairesArgs<ExtArgs>
    projects?: boolean | State$projectsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      concessionaires: Prisma.$ConcessionairePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      uf: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more States and only return the `id`
     * const stateWithIdOnly = await prisma.state.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    concessionaires<T extends State$concessionairesArgs<ExtArgs> = {}>(args?: Subset<T, State$concessionairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends State$projectsArgs<ExtArgs> = {}>(args?: Subset<T, State$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'String'>
    readonly name: FieldRef<"State", 'String'>
    readonly uf: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State updateManyAndReturn
   */
  export type StateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.concessionaires
   */
  export type State$concessionairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    where?: ConcessionaireWhereInput
    orderBy?: ConcessionaireOrderByWithRelationInput | ConcessionaireOrderByWithRelationInput[]
    cursor?: ConcessionaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConcessionaireScalarFieldEnum | ConcessionaireScalarFieldEnum[]
  }

  /**
   * State.projects
   */
  export type State$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model Concessionaire
   */

  export type AggregateConcessionaire = {
    _count: ConcessionaireCountAggregateOutputType | null
    _min: ConcessionaireMinAggregateOutputType | null
    _max: ConcessionaireMaxAggregateOutputType | null
  }

  export type ConcessionaireMinAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
  }

  export type ConcessionaireMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
  }

  export type ConcessionaireCountAggregateOutputType = {
    id: number
    name: number
    stateId: number
    requiredDocs: number
    _all: number
  }


  export type ConcessionaireMinAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
  }

  export type ConcessionaireMaxAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
  }

  export type ConcessionaireCountAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    requiredDocs?: true
    _all?: true
  }

  export type ConcessionaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concessionaire to aggregate.
     */
    where?: ConcessionaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concessionaires to fetch.
     */
    orderBy?: ConcessionaireOrderByWithRelationInput | ConcessionaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConcessionaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concessionaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concessionaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Concessionaires
    **/
    _count?: true | ConcessionaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConcessionaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConcessionaireMaxAggregateInputType
  }

  export type GetConcessionaireAggregateType<T extends ConcessionaireAggregateArgs> = {
        [P in keyof T & keyof AggregateConcessionaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConcessionaire[P]>
      : GetScalarType<T[P], AggregateConcessionaire[P]>
  }




  export type ConcessionaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConcessionaireWhereInput
    orderBy?: ConcessionaireOrderByWithAggregationInput | ConcessionaireOrderByWithAggregationInput[]
    by: ConcessionaireScalarFieldEnum[] | ConcessionaireScalarFieldEnum
    having?: ConcessionaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConcessionaireCountAggregateInputType | true
    _min?: ConcessionaireMinAggregateInputType
    _max?: ConcessionaireMaxAggregateInputType
  }

  export type ConcessionaireGroupByOutputType = {
    id: string
    name: string
    stateId: string
    requiredDocs: string[]
    _count: ConcessionaireCountAggregateOutputType | null
    _min: ConcessionaireMinAggregateOutputType | null
    _max: ConcessionaireMaxAggregateOutputType | null
  }

  type GetConcessionaireGroupByPayload<T extends ConcessionaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConcessionaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConcessionaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConcessionaireGroupByOutputType[P]>
            : GetScalarType<T[P], ConcessionaireGroupByOutputType[P]>
        }
      >
    >


  export type ConcessionaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    requiredDocs?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
    projects?: boolean | Concessionaire$projectsArgs<ExtArgs>
    _count?: boolean | ConcessionaireCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concessionaire"]>

  export type ConcessionaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    requiredDocs?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concessionaire"]>

  export type ConcessionaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    requiredDocs?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concessionaire"]>

  export type ConcessionaireSelectScalar = {
    id?: boolean
    name?: boolean
    stateId?: boolean
    requiredDocs?: boolean
  }

  export type ConcessionaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stateId" | "requiredDocs", ExtArgs["result"]["concessionaire"]>
  export type ConcessionaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
    projects?: boolean | Concessionaire$projectsArgs<ExtArgs>
    _count?: boolean | ConcessionaireCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConcessionaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }
  export type ConcessionaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }

  export type $ConcessionairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Concessionaire"
    objects: {
      state: Prisma.$StatePayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stateId: string
      requiredDocs: string[]
    }, ExtArgs["result"]["concessionaire"]>
    composites: {}
  }

  type ConcessionaireGetPayload<S extends boolean | null | undefined | ConcessionaireDefaultArgs> = $Result.GetResult<Prisma.$ConcessionairePayload, S>

  type ConcessionaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConcessionaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConcessionaireCountAggregateInputType | true
    }

  export interface ConcessionaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Concessionaire'], meta: { name: 'Concessionaire' } }
    /**
     * Find zero or one Concessionaire that matches the filter.
     * @param {ConcessionaireFindUniqueArgs} args - Arguments to find a Concessionaire
     * @example
     * // Get one Concessionaire
     * const concessionaire = await prisma.concessionaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConcessionaireFindUniqueArgs>(args: SelectSubset<T, ConcessionaireFindUniqueArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Concessionaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConcessionaireFindUniqueOrThrowArgs} args - Arguments to find a Concessionaire
     * @example
     * // Get one Concessionaire
     * const concessionaire = await prisma.concessionaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConcessionaireFindUniqueOrThrowArgs>(args: SelectSubset<T, ConcessionaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concessionaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcessionaireFindFirstArgs} args - Arguments to find a Concessionaire
     * @example
     * // Get one Concessionaire
     * const concessionaire = await prisma.concessionaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConcessionaireFindFirstArgs>(args?: SelectSubset<T, ConcessionaireFindFirstArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concessionaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcessionaireFindFirstOrThrowArgs} args - Arguments to find a Concessionaire
     * @example
     * // Get one Concessionaire
     * const concessionaire = await prisma.concessionaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConcessionaireFindFirstOrThrowArgs>(args?: SelectSubset<T, ConcessionaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Concessionaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcessionaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Concessionaires
     * const concessionaires = await prisma.concessionaire.findMany()
     * 
     * // Get first 10 Concessionaires
     * const concessionaires = await prisma.concessionaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const concessionaireWithIdOnly = await prisma.concessionaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConcessionaireFindManyArgs>(args?: SelectSubset<T, ConcessionaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Concessionaire.
     * @param {ConcessionaireCreateArgs} args - Arguments to create a Concessionaire.
     * @example
     * // Create one Concessionaire
     * const Concessionaire = await prisma.concessionaire.create({
     *   data: {
     *     // ... data to create a Concessionaire
     *   }
     * })
     * 
     */
    create<T extends ConcessionaireCreateArgs>(args: SelectSubset<T, ConcessionaireCreateArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Concessionaires.
     * @param {ConcessionaireCreateManyArgs} args - Arguments to create many Concessionaires.
     * @example
     * // Create many Concessionaires
     * const concessionaire = await prisma.concessionaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConcessionaireCreateManyArgs>(args?: SelectSubset<T, ConcessionaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Concessionaires and returns the data saved in the database.
     * @param {ConcessionaireCreateManyAndReturnArgs} args - Arguments to create many Concessionaires.
     * @example
     * // Create many Concessionaires
     * const concessionaire = await prisma.concessionaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Concessionaires and only return the `id`
     * const concessionaireWithIdOnly = await prisma.concessionaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConcessionaireCreateManyAndReturnArgs>(args?: SelectSubset<T, ConcessionaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Concessionaire.
     * @param {ConcessionaireDeleteArgs} args - Arguments to delete one Concessionaire.
     * @example
     * // Delete one Concessionaire
     * const Concessionaire = await prisma.concessionaire.delete({
     *   where: {
     *     // ... filter to delete one Concessionaire
     *   }
     * })
     * 
     */
    delete<T extends ConcessionaireDeleteArgs>(args: SelectSubset<T, ConcessionaireDeleteArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Concessionaire.
     * @param {ConcessionaireUpdateArgs} args - Arguments to update one Concessionaire.
     * @example
     * // Update one Concessionaire
     * const concessionaire = await prisma.concessionaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConcessionaireUpdateArgs>(args: SelectSubset<T, ConcessionaireUpdateArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Concessionaires.
     * @param {ConcessionaireDeleteManyArgs} args - Arguments to filter Concessionaires to delete.
     * @example
     * // Delete a few Concessionaires
     * const { count } = await prisma.concessionaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConcessionaireDeleteManyArgs>(args?: SelectSubset<T, ConcessionaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concessionaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcessionaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Concessionaires
     * const concessionaire = await prisma.concessionaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConcessionaireUpdateManyArgs>(args: SelectSubset<T, ConcessionaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concessionaires and returns the data updated in the database.
     * @param {ConcessionaireUpdateManyAndReturnArgs} args - Arguments to update many Concessionaires.
     * @example
     * // Update many Concessionaires
     * const concessionaire = await prisma.concessionaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Concessionaires and only return the `id`
     * const concessionaireWithIdOnly = await prisma.concessionaire.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConcessionaireUpdateManyAndReturnArgs>(args: SelectSubset<T, ConcessionaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Concessionaire.
     * @param {ConcessionaireUpsertArgs} args - Arguments to update or create a Concessionaire.
     * @example
     * // Update or create a Concessionaire
     * const concessionaire = await prisma.concessionaire.upsert({
     *   create: {
     *     // ... data to create a Concessionaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Concessionaire we want to update
     *   }
     * })
     */
    upsert<T extends ConcessionaireUpsertArgs>(args: SelectSubset<T, ConcessionaireUpsertArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Concessionaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcessionaireCountArgs} args - Arguments to filter Concessionaires to count.
     * @example
     * // Count the number of Concessionaires
     * const count = await prisma.concessionaire.count({
     *   where: {
     *     // ... the filter for the Concessionaires we want to count
     *   }
     * })
    **/
    count<T extends ConcessionaireCountArgs>(
      args?: Subset<T, ConcessionaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConcessionaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Concessionaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcessionaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConcessionaireAggregateArgs>(args: Subset<T, ConcessionaireAggregateArgs>): Prisma.PrismaPromise<GetConcessionaireAggregateType<T>>

    /**
     * Group by Concessionaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcessionaireGroupByArgs} args - Group by arguments.
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
      T extends ConcessionaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConcessionaireGroupByArgs['orderBy'] }
        : { orderBy?: ConcessionaireGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConcessionaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConcessionaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Concessionaire model
   */
  readonly fields: ConcessionaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Concessionaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConcessionaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends Concessionaire$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Concessionaire$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Concessionaire model
   */
  interface ConcessionaireFieldRefs {
    readonly id: FieldRef<"Concessionaire", 'String'>
    readonly name: FieldRef<"Concessionaire", 'String'>
    readonly stateId: FieldRef<"Concessionaire", 'String'>
    readonly requiredDocs: FieldRef<"Concessionaire", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Concessionaire findUnique
   */
  export type ConcessionaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * Filter, which Concessionaire to fetch.
     */
    where: ConcessionaireWhereUniqueInput
  }

  /**
   * Concessionaire findUniqueOrThrow
   */
  export type ConcessionaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * Filter, which Concessionaire to fetch.
     */
    where: ConcessionaireWhereUniqueInput
  }

  /**
   * Concessionaire findFirst
   */
  export type ConcessionaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * Filter, which Concessionaire to fetch.
     */
    where?: ConcessionaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concessionaires to fetch.
     */
    orderBy?: ConcessionaireOrderByWithRelationInput | ConcessionaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concessionaires.
     */
    cursor?: ConcessionaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concessionaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concessionaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concessionaires.
     */
    distinct?: ConcessionaireScalarFieldEnum | ConcessionaireScalarFieldEnum[]
  }

  /**
   * Concessionaire findFirstOrThrow
   */
  export type ConcessionaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * Filter, which Concessionaire to fetch.
     */
    where?: ConcessionaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concessionaires to fetch.
     */
    orderBy?: ConcessionaireOrderByWithRelationInput | ConcessionaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concessionaires.
     */
    cursor?: ConcessionaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concessionaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concessionaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concessionaires.
     */
    distinct?: ConcessionaireScalarFieldEnum | ConcessionaireScalarFieldEnum[]
  }

  /**
   * Concessionaire findMany
   */
  export type ConcessionaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * Filter, which Concessionaires to fetch.
     */
    where?: ConcessionaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concessionaires to fetch.
     */
    orderBy?: ConcessionaireOrderByWithRelationInput | ConcessionaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Concessionaires.
     */
    cursor?: ConcessionaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concessionaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concessionaires.
     */
    skip?: number
    distinct?: ConcessionaireScalarFieldEnum | ConcessionaireScalarFieldEnum[]
  }

  /**
   * Concessionaire create
   */
  export type ConcessionaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Concessionaire.
     */
    data: XOR<ConcessionaireCreateInput, ConcessionaireUncheckedCreateInput>
  }

  /**
   * Concessionaire createMany
   */
  export type ConcessionaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Concessionaires.
     */
    data: ConcessionaireCreateManyInput | ConcessionaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Concessionaire createManyAndReturn
   */
  export type ConcessionaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * The data used to create many Concessionaires.
     */
    data: ConcessionaireCreateManyInput | ConcessionaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Concessionaire update
   */
  export type ConcessionaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Concessionaire.
     */
    data: XOR<ConcessionaireUpdateInput, ConcessionaireUncheckedUpdateInput>
    /**
     * Choose, which Concessionaire to update.
     */
    where: ConcessionaireWhereUniqueInput
  }

  /**
   * Concessionaire updateMany
   */
  export type ConcessionaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Concessionaires.
     */
    data: XOR<ConcessionaireUpdateManyMutationInput, ConcessionaireUncheckedUpdateManyInput>
    /**
     * Filter which Concessionaires to update
     */
    where?: ConcessionaireWhereInput
    /**
     * Limit how many Concessionaires to update.
     */
    limit?: number
  }

  /**
   * Concessionaire updateManyAndReturn
   */
  export type ConcessionaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * The data used to update Concessionaires.
     */
    data: XOR<ConcessionaireUpdateManyMutationInput, ConcessionaireUncheckedUpdateManyInput>
    /**
     * Filter which Concessionaires to update
     */
    where?: ConcessionaireWhereInput
    /**
     * Limit how many Concessionaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Concessionaire upsert
   */
  export type ConcessionaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Concessionaire to update in case it exists.
     */
    where: ConcessionaireWhereUniqueInput
    /**
     * In case the Concessionaire found by the `where` argument doesn't exist, create a new Concessionaire with this data.
     */
    create: XOR<ConcessionaireCreateInput, ConcessionaireUncheckedCreateInput>
    /**
     * In case the Concessionaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConcessionaireUpdateInput, ConcessionaireUncheckedUpdateInput>
  }

  /**
   * Concessionaire delete
   */
  export type ConcessionaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
    /**
     * Filter which Concessionaire to delete.
     */
    where: ConcessionaireWhereUniqueInput
  }

  /**
   * Concessionaire deleteMany
   */
  export type ConcessionaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concessionaires to delete
     */
    where?: ConcessionaireWhereInput
    /**
     * Limit how many Concessionaires to delete.
     */
    limit?: number
  }

  /**
   * Concessionaire.projects
   */
  export type Concessionaire$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Concessionaire without action
   */
  export type ConcessionaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concessionaire
     */
    select?: ConcessionaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Concessionaire
     */
    omit?: ConcessionaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConcessionaireInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    poleCount: number | null
  }

  export type ProjectSumAggregateOutputType = {
    poleCount: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    number: string | null
    companyId: string | null
    stateId: string | null
    concessionaireId: string | null
    city: string | null
    infraType: string | null
    poleCount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    number: string | null
    companyId: string | null
    stateId: string | null
    concessionaireId: string | null
    city: string | null
    infraType: string | null
    poleCount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    number: number
    companyId: number
    stateId: number
    concessionaireId: number
    city: number
    infraType: number
    poleCount: number
    status: number
    createdAt: number
    documents: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    poleCount?: true
  }

  export type ProjectSumAggregateInputType = {
    poleCount?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    number?: true
    companyId?: true
    stateId?: true
    concessionaireId?: true
    city?: true
    infraType?: true
    poleCount?: true
    status?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    number?: true
    companyId?: true
    stateId?: true
    concessionaireId?: true
    city?: true
    infraType?: true
    poleCount?: true
    status?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    number?: true
    companyId?: true
    stateId?: true
    concessionaireId?: true
    city?: true
    infraType?: true
    poleCount?: true
    status?: true
    createdAt?: true
    documents?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    number: string
    companyId: string
    stateId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt: Date
    documents: JsonValue
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    companyId?: boolean
    stateId?: boolean
    concessionaireId?: boolean
    city?: boolean
    infraType?: boolean
    poleCount?: boolean
    status?: boolean
    createdAt?: boolean
    documents?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    concessionaire?: boolean | ConcessionaireDefaultArgs<ExtArgs>
    generatedDocs?: boolean | Project$generatedDocsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    companyId?: boolean
    stateId?: boolean
    concessionaireId?: boolean
    city?: boolean
    infraType?: boolean
    poleCount?: boolean
    status?: boolean
    createdAt?: boolean
    documents?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    concessionaire?: boolean | ConcessionaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    companyId?: boolean
    stateId?: boolean
    concessionaireId?: boolean
    city?: boolean
    infraType?: boolean
    poleCount?: boolean
    status?: boolean
    createdAt?: boolean
    documents?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    concessionaire?: boolean | ConcessionaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    number?: boolean
    companyId?: boolean
    stateId?: boolean
    concessionaireId?: boolean
    city?: boolean
    infraType?: boolean
    poleCount?: boolean
    status?: boolean
    createdAt?: boolean
    documents?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "companyId" | "stateId" | "concessionaireId" | "city" | "infraType" | "poleCount" | "status" | "createdAt" | "documents", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    concessionaire?: boolean | ConcessionaireDefaultArgs<ExtArgs>
    generatedDocs?: boolean | Project$generatedDocsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    concessionaire?: boolean | ConcessionaireDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    concessionaire?: boolean | ConcessionaireDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      state: Prisma.$StatePayload<ExtArgs>
      concessionaire: Prisma.$ConcessionairePayload<ExtArgs>
      generatedDocs: Prisma.$GeneratedDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      companyId: string
      stateId: string
      concessionaireId: string
      city: string
      infraType: string
      poleCount: number
      status: string
      createdAt: Date
      documents: Prisma.JsonValue
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    concessionaire<T extends ConcessionaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConcessionaireDefaultArgs<ExtArgs>>): Prisma__ConcessionaireClient<$Result.GetResult<Prisma.$ConcessionairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generatedDocs<T extends Project$generatedDocsArgs<ExtArgs> = {}>(args?: Subset<T, Project$generatedDocsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly number: FieldRef<"Project", 'String'>
    readonly companyId: FieldRef<"Project", 'String'>
    readonly stateId: FieldRef<"Project", 'String'>
    readonly concessionaireId: FieldRef<"Project", 'String'>
    readonly city: FieldRef<"Project", 'String'>
    readonly infraType: FieldRef<"Project", 'String'>
    readonly poleCount: FieldRef<"Project", 'Int'>
    readonly status: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly documents: FieldRef<"Project", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.generatedDocs
   */
  export type Project$generatedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    cursor?: GeneratedDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedDocument
   */

  export type AggregateGeneratedDocument = {
    _count: GeneratedDocumentCountAggregateOutputType | null
    _avg: GeneratedDocumentAvgAggregateOutputType | null
    _sum: GeneratedDocumentSumAggregateOutputType | null
    _min: GeneratedDocumentMinAggregateOutputType | null
    _max: GeneratedDocumentMaxAggregateOutputType | null
  }

  export type GeneratedDocumentAvgAggregateOutputType = {
    version: number | null
  }

  export type GeneratedDocumentSumAggregateOutputType = {
    version: number | null
  }

  export type GeneratedDocumentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    templateId: string | null
    templateName: string | null
    fileUrl: string | null
    fileData: string | null
    fileName: string | null
    createdAt: Date | null
    version: number | null
    createdBy: string | null
    context: string | null
  }

  export type GeneratedDocumentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    templateId: string | null
    templateName: string | null
    fileUrl: string | null
    fileData: string | null
    fileName: string | null
    createdAt: Date | null
    version: number | null
    createdBy: string | null
    context: string | null
  }

  export type GeneratedDocumentCountAggregateOutputType = {
    id: number
    projectId: number
    templateId: number
    templateName: number
    data: number
    fileUrl: number
    fileData: number
    fileName: number
    createdAt: number
    version: number
    createdBy: number
    context: number
    _all: number
  }


  export type GeneratedDocumentAvgAggregateInputType = {
    version?: true
  }

  export type GeneratedDocumentSumAggregateInputType = {
    version?: true
  }

  export type GeneratedDocumentMinAggregateInputType = {
    id?: true
    projectId?: true
    templateId?: true
    templateName?: true
    fileUrl?: true
    fileData?: true
    fileName?: true
    createdAt?: true
    version?: true
    createdBy?: true
    context?: true
  }

  export type GeneratedDocumentMaxAggregateInputType = {
    id?: true
    projectId?: true
    templateId?: true
    templateName?: true
    fileUrl?: true
    fileData?: true
    fileName?: true
    createdAt?: true
    version?: true
    createdBy?: true
    context?: true
  }

  export type GeneratedDocumentCountAggregateInputType = {
    id?: true
    projectId?: true
    templateId?: true
    templateName?: true
    data?: true
    fileUrl?: true
    fileData?: true
    fileName?: true
    createdAt?: true
    version?: true
    createdBy?: true
    context?: true
    _all?: true
  }

  export type GeneratedDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedDocument to aggregate.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedDocuments
    **/
    _count?: true | GeneratedDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratedDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratedDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedDocumentMaxAggregateInputType
  }

  export type GetGeneratedDocumentAggregateType<T extends GeneratedDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedDocument[P]>
      : GetScalarType<T[P], AggregateGeneratedDocument[P]>
  }




  export type GeneratedDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithAggregationInput | GeneratedDocumentOrderByWithAggregationInput[]
    by: GeneratedDocumentScalarFieldEnum[] | GeneratedDocumentScalarFieldEnum
    having?: GeneratedDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedDocumentCountAggregateInputType | true
    _avg?: GeneratedDocumentAvgAggregateInputType
    _sum?: GeneratedDocumentSumAggregateInputType
    _min?: GeneratedDocumentMinAggregateInputType
    _max?: GeneratedDocumentMaxAggregateInputType
  }

  export type GeneratedDocumentGroupByOutputType = {
    id: string
    projectId: string | null
    templateId: string
    templateName: string
    data: JsonValue
    fileUrl: string | null
    fileData: string | null
    fileName: string | null
    createdAt: Date
    version: number
    createdBy: string
    context: string | null
    _count: GeneratedDocumentCountAggregateOutputType | null
    _avg: GeneratedDocumentAvgAggregateOutputType | null
    _sum: GeneratedDocumentSumAggregateOutputType | null
    _min: GeneratedDocumentMinAggregateOutputType | null
    _max: GeneratedDocumentMaxAggregateOutputType | null
  }

  type GetGeneratedDocumentGroupByPayload<T extends GeneratedDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedDocumentGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    templateId?: boolean
    templateName?: boolean
    data?: boolean
    fileUrl?: boolean
    fileData?: boolean
    fileName?: boolean
    createdAt?: boolean
    version?: boolean
    createdBy?: boolean
    context?: boolean
    project?: boolean | GeneratedDocument$projectArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    templateId?: boolean
    templateName?: boolean
    data?: boolean
    fileUrl?: boolean
    fileData?: boolean
    fileName?: boolean
    createdAt?: boolean
    version?: boolean
    createdBy?: boolean
    context?: boolean
    project?: boolean | GeneratedDocument$projectArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    templateId?: boolean
    templateName?: boolean
    data?: boolean
    fileUrl?: boolean
    fileData?: boolean
    fileName?: boolean
    createdAt?: boolean
    version?: boolean
    createdBy?: boolean
    context?: boolean
    project?: boolean | GeneratedDocument$projectArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectScalar = {
    id?: boolean
    projectId?: boolean
    templateId?: boolean
    templateName?: boolean
    data?: boolean
    fileUrl?: boolean
    fileData?: boolean
    fileName?: boolean
    createdAt?: boolean
    version?: boolean
    createdBy?: boolean
    context?: boolean
  }

  export type GeneratedDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "templateId" | "templateName" | "data" | "fileUrl" | "fileData" | "fileName" | "createdAt" | "version" | "createdBy" | "context", ExtArgs["result"]["generatedDocument"]>
  export type GeneratedDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | GeneratedDocument$projectArgs<ExtArgs>
  }
  export type GeneratedDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | GeneratedDocument$projectArgs<ExtArgs>
  }
  export type GeneratedDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | GeneratedDocument$projectArgs<ExtArgs>
  }

  export type $GeneratedDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedDocument"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string | null
      templateId: string
      templateName: string
      data: Prisma.JsonValue
      fileUrl: string | null
      fileData: string | null
      fileName: string | null
      createdAt: Date
      version: number
      createdBy: string
      context: string | null
    }, ExtArgs["result"]["generatedDocument"]>
    composites: {}
  }

  type GeneratedDocumentGetPayload<S extends boolean | null | undefined | GeneratedDocumentDefaultArgs> = $Result.GetResult<Prisma.$GeneratedDocumentPayload, S>

  type GeneratedDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedDocumentCountAggregateInputType | true
    }

  export interface GeneratedDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedDocument'], meta: { name: 'GeneratedDocument' } }
    /**
     * Find zero or one GeneratedDocument that matches the filter.
     * @param {GeneratedDocumentFindUniqueArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedDocumentFindUniqueArgs>(args: SelectSubset<T, GeneratedDocumentFindUniqueArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedDocumentFindUniqueOrThrowArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindFirstArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedDocumentFindFirstArgs>(args?: SelectSubset<T, GeneratedDocumentFindFirstArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindFirstOrThrowArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedDocuments
     * const generatedDocuments = await prisma.generatedDocument.findMany()
     * 
     * // Get first 10 GeneratedDocuments
     * const generatedDocuments = await prisma.generatedDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedDocumentFindManyArgs>(args?: SelectSubset<T, GeneratedDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedDocument.
     * @param {GeneratedDocumentCreateArgs} args - Arguments to create a GeneratedDocument.
     * @example
     * // Create one GeneratedDocument
     * const GeneratedDocument = await prisma.generatedDocument.create({
     *   data: {
     *     // ... data to create a GeneratedDocument
     *   }
     * })
     * 
     */
    create<T extends GeneratedDocumentCreateArgs>(args: SelectSubset<T, GeneratedDocumentCreateArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedDocuments.
     * @param {GeneratedDocumentCreateManyArgs} args - Arguments to create many GeneratedDocuments.
     * @example
     * // Create many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedDocumentCreateManyArgs>(args?: SelectSubset<T, GeneratedDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedDocuments and returns the data saved in the database.
     * @param {GeneratedDocumentCreateManyAndReturnArgs} args - Arguments to create many GeneratedDocuments.
     * @example
     * // Create many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedDocuments and only return the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedDocument.
     * @param {GeneratedDocumentDeleteArgs} args - Arguments to delete one GeneratedDocument.
     * @example
     * // Delete one GeneratedDocument
     * const GeneratedDocument = await prisma.generatedDocument.delete({
     *   where: {
     *     // ... filter to delete one GeneratedDocument
     *   }
     * })
     * 
     */
    delete<T extends GeneratedDocumentDeleteArgs>(args: SelectSubset<T, GeneratedDocumentDeleteArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedDocument.
     * @param {GeneratedDocumentUpdateArgs} args - Arguments to update one GeneratedDocument.
     * @example
     * // Update one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedDocumentUpdateArgs>(args: SelectSubset<T, GeneratedDocumentUpdateArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedDocuments.
     * @param {GeneratedDocumentDeleteManyArgs} args - Arguments to filter GeneratedDocuments to delete.
     * @example
     * // Delete a few GeneratedDocuments
     * const { count } = await prisma.generatedDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedDocumentDeleteManyArgs>(args?: SelectSubset<T, GeneratedDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedDocumentUpdateManyArgs>(args: SelectSubset<T, GeneratedDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedDocuments and returns the data updated in the database.
     * @param {GeneratedDocumentUpdateManyAndReturnArgs} args - Arguments to update many GeneratedDocuments.
     * @example
     * // Update many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedDocuments and only return the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GeneratedDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedDocument.
     * @param {GeneratedDocumentUpsertArgs} args - Arguments to update or create a GeneratedDocument.
     * @example
     * // Update or create a GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.upsert({
     *   create: {
     *     // ... data to create a GeneratedDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedDocument we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedDocumentUpsertArgs>(args: SelectSubset<T, GeneratedDocumentUpsertArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentCountArgs} args - Arguments to filter GeneratedDocuments to count.
     * @example
     * // Count the number of GeneratedDocuments
     * const count = await prisma.generatedDocument.count({
     *   where: {
     *     // ... the filter for the GeneratedDocuments we want to count
     *   }
     * })
    **/
    count<T extends GeneratedDocumentCountArgs>(
      args?: Subset<T, GeneratedDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedDocumentAggregateArgs>(args: Subset<T, GeneratedDocumentAggregateArgs>): Prisma.PrismaPromise<GetGeneratedDocumentAggregateType<T>>

    /**
     * Group by GeneratedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentGroupByArgs} args - Group by arguments.
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
      T extends GeneratedDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedDocumentGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedDocumentGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratedDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedDocument model
   */
  readonly fields: GeneratedDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends GeneratedDocument$projectArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedDocument$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GeneratedDocument model
   */
  interface GeneratedDocumentFieldRefs {
    readonly id: FieldRef<"GeneratedDocument", 'String'>
    readonly projectId: FieldRef<"GeneratedDocument", 'String'>
    readonly templateId: FieldRef<"GeneratedDocument", 'String'>
    readonly templateName: FieldRef<"GeneratedDocument", 'String'>
    readonly data: FieldRef<"GeneratedDocument", 'Json'>
    readonly fileUrl: FieldRef<"GeneratedDocument", 'String'>
    readonly fileData: FieldRef<"GeneratedDocument", 'String'>
    readonly fileName: FieldRef<"GeneratedDocument", 'String'>
    readonly createdAt: FieldRef<"GeneratedDocument", 'DateTime'>
    readonly version: FieldRef<"GeneratedDocument", 'Int'>
    readonly createdBy: FieldRef<"GeneratedDocument", 'String'>
    readonly context: FieldRef<"GeneratedDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedDocument findUnique
   */
  export type GeneratedDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument findUniqueOrThrow
   */
  export type GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument findFirst
   */
  export type GeneratedDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedDocuments.
     */
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument findFirstOrThrow
   */
  export type GeneratedDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedDocuments.
     */
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument findMany
   */
  export type GeneratedDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocuments to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument create
   */
  export type GeneratedDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedDocument.
     */
    data: XOR<GeneratedDocumentCreateInput, GeneratedDocumentUncheckedCreateInput>
  }

  /**
   * GeneratedDocument createMany
   */
  export type GeneratedDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedDocuments.
     */
    data: GeneratedDocumentCreateManyInput | GeneratedDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedDocument createManyAndReturn
   */
  export type GeneratedDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedDocuments.
     */
    data: GeneratedDocumentCreateManyInput | GeneratedDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedDocument update
   */
  export type GeneratedDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedDocument.
     */
    data: XOR<GeneratedDocumentUpdateInput, GeneratedDocumentUncheckedUpdateInput>
    /**
     * Choose, which GeneratedDocument to update.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument updateMany
   */
  export type GeneratedDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedDocuments.
     */
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedDocuments to update
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to update.
     */
    limit?: number
  }

  /**
   * GeneratedDocument updateManyAndReturn
   */
  export type GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedDocuments.
     */
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedDocuments to update
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedDocument upsert
   */
  export type GeneratedDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedDocument to update in case it exists.
     */
    where: GeneratedDocumentWhereUniqueInput
    /**
     * In case the GeneratedDocument found by the `where` argument doesn't exist, create a new GeneratedDocument with this data.
     */
    create: XOR<GeneratedDocumentCreateInput, GeneratedDocumentUncheckedCreateInput>
    /**
     * In case the GeneratedDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedDocumentUpdateInput, GeneratedDocumentUncheckedUpdateInput>
  }

  /**
   * GeneratedDocument delete
   */
  export type GeneratedDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter which GeneratedDocument to delete.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument deleteMany
   */
  export type GeneratedDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedDocuments to delete
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to delete.
     */
    limit?: number
  }

  /**
   * GeneratedDocument.project
   */
  export type GeneratedDocument$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * GeneratedDocument without action
   */
  export type GeneratedDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    razaoSocial: 'razaoSocial',
    cnpj: 'cnpj',
    address: 'address',
    techResp: 'techResp',
    email: 'email',
    phone: 'phone'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    uf: 'uf'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const ConcessionaireScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateId: 'stateId',
    requiredDocs: 'requiredDocs'
  };

  export type ConcessionaireScalarFieldEnum = (typeof ConcessionaireScalarFieldEnum)[keyof typeof ConcessionaireScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    number: 'number',
    companyId: 'companyId',
    stateId: 'stateId',
    concessionaireId: 'concessionaireId',
    city: 'city',
    infraType: 'infraType',
    poleCount: 'poleCount',
    status: 'status',
    createdAt: 'createdAt',
    documents: 'documents'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const GeneratedDocumentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    templateId: 'templateId',
    templateName: 'templateName',
    data: 'data',
    fileUrl: 'fileUrl',
    fileData: 'fileData',
    fileName: 'fileName',
    createdAt: 'createdAt',
    version: 'version',
    createdBy: 'createdBy',
    context: 'context'
  };

  export type GeneratedDocumentScalarFieldEnum = (typeof GeneratedDocumentScalarFieldEnum)[keyof typeof GeneratedDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    razaoSocial?: StringNullableFilter<"Company"> | string | null
    cnpj?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    techResp?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    projects?: ProjectListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    razaoSocial?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    techResp?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    razaoSocial?: StringNullableFilter<"Company"> | string | null
    cnpj?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    techResp?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    projects?: ProjectListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    razaoSocial?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    techResp?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    razaoSocial?: StringNullableWithAggregatesFilter<"Company"> | string | null
    cnpj?: StringWithAggregatesFilter<"Company"> | string
    address?: StringWithAggregatesFilter<"Company"> | string
    techResp?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    phone?: StringWithAggregatesFilter<"Company"> | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: StringFilter<"State"> | string
    name?: StringFilter<"State"> | string
    uf?: StringFilter<"State"> | string
    concessionaires?: ConcessionaireListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    uf?: SortOrder
    concessionaires?: ConcessionaireOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    name?: StringFilter<"State"> | string
    uf?: StringFilter<"State"> | string
    concessionaires?: ConcessionaireListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    uf?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"State"> | string
    name?: StringWithAggregatesFilter<"State"> | string
    uf?: StringWithAggregatesFilter<"State"> | string
  }

  export type ConcessionaireWhereInput = {
    AND?: ConcessionaireWhereInput | ConcessionaireWhereInput[]
    OR?: ConcessionaireWhereInput[]
    NOT?: ConcessionaireWhereInput | ConcessionaireWhereInput[]
    id?: StringFilter<"Concessionaire"> | string
    name?: StringFilter<"Concessionaire"> | string
    stateId?: StringFilter<"Concessionaire"> | string
    requiredDocs?: StringNullableListFilter<"Concessionaire">
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    projects?: ProjectListRelationFilter
  }

  export type ConcessionaireOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    requiredDocs?: SortOrder
    state?: StateOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ConcessionaireWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConcessionaireWhereInput | ConcessionaireWhereInput[]
    OR?: ConcessionaireWhereInput[]
    NOT?: ConcessionaireWhereInput | ConcessionaireWhereInput[]
    name?: StringFilter<"Concessionaire"> | string
    stateId?: StringFilter<"Concessionaire"> | string
    requiredDocs?: StringNullableListFilter<"Concessionaire">
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    projects?: ProjectListRelationFilter
  }, "id">

  export type ConcessionaireOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    requiredDocs?: SortOrder
    _count?: ConcessionaireCountOrderByAggregateInput
    _max?: ConcessionaireMaxOrderByAggregateInput
    _min?: ConcessionaireMinOrderByAggregateInput
  }

  export type ConcessionaireScalarWhereWithAggregatesInput = {
    AND?: ConcessionaireScalarWhereWithAggregatesInput | ConcessionaireScalarWhereWithAggregatesInput[]
    OR?: ConcessionaireScalarWhereWithAggregatesInput[]
    NOT?: ConcessionaireScalarWhereWithAggregatesInput | ConcessionaireScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Concessionaire"> | string
    name?: StringWithAggregatesFilter<"Concessionaire"> | string
    stateId?: StringWithAggregatesFilter<"Concessionaire"> | string
    requiredDocs?: StringNullableListFilter<"Concessionaire">
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    number?: StringFilter<"Project"> | string
    companyId?: StringFilter<"Project"> | string
    stateId?: StringFilter<"Project"> | string
    concessionaireId?: StringFilter<"Project"> | string
    city?: StringFilter<"Project"> | string
    infraType?: StringFilter<"Project"> | string
    poleCount?: IntFilter<"Project"> | number
    status?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    documents?: JsonFilter<"Project">
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    concessionaire?: XOR<ConcessionaireScalarRelationFilter, ConcessionaireWhereInput>
    generatedDocs?: GeneratedDocumentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    companyId?: SortOrder
    stateId?: SortOrder
    concessionaireId?: SortOrder
    city?: SortOrder
    infraType?: SortOrder
    poleCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    documents?: SortOrder
    company?: CompanyOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    concessionaire?: ConcessionaireOrderByWithRelationInput
    generatedDocs?: GeneratedDocumentOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    number?: StringFilter<"Project"> | string
    companyId?: StringFilter<"Project"> | string
    stateId?: StringFilter<"Project"> | string
    concessionaireId?: StringFilter<"Project"> | string
    city?: StringFilter<"Project"> | string
    infraType?: StringFilter<"Project"> | string
    poleCount?: IntFilter<"Project"> | number
    status?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    documents?: JsonFilter<"Project">
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    concessionaire?: XOR<ConcessionaireScalarRelationFilter, ConcessionaireWhereInput>
    generatedDocs?: GeneratedDocumentListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    companyId?: SortOrder
    stateId?: SortOrder
    concessionaireId?: SortOrder
    city?: SortOrder
    infraType?: SortOrder
    poleCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    documents?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    number?: StringWithAggregatesFilter<"Project"> | string
    companyId?: StringWithAggregatesFilter<"Project"> | string
    stateId?: StringWithAggregatesFilter<"Project"> | string
    concessionaireId?: StringWithAggregatesFilter<"Project"> | string
    city?: StringWithAggregatesFilter<"Project"> | string
    infraType?: StringWithAggregatesFilter<"Project"> | string
    poleCount?: IntWithAggregatesFilter<"Project"> | number
    status?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    documents?: JsonWithAggregatesFilter<"Project">
  }

  export type GeneratedDocumentWhereInput = {
    AND?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    OR?: GeneratedDocumentWhereInput[]
    NOT?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    id?: StringFilter<"GeneratedDocument"> | string
    projectId?: StringNullableFilter<"GeneratedDocument"> | string | null
    templateId?: StringFilter<"GeneratedDocument"> | string
    templateName?: StringFilter<"GeneratedDocument"> | string
    data?: JsonFilter<"GeneratedDocument">
    fileUrl?: StringNullableFilter<"GeneratedDocument"> | string | null
    fileData?: StringNullableFilter<"GeneratedDocument"> | string | null
    fileName?: StringNullableFilter<"GeneratedDocument"> | string | null
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    version?: IntFilter<"GeneratedDocument"> | number
    createdBy?: StringFilter<"GeneratedDocument"> | string
    context?: StringNullableFilter<"GeneratedDocument"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }

  export type GeneratedDocumentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    templateId?: SortOrder
    templateName?: SortOrder
    data?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileData?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    context?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type GeneratedDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    OR?: GeneratedDocumentWhereInput[]
    NOT?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    projectId?: StringNullableFilter<"GeneratedDocument"> | string | null
    templateId?: StringFilter<"GeneratedDocument"> | string
    templateName?: StringFilter<"GeneratedDocument"> | string
    data?: JsonFilter<"GeneratedDocument">
    fileUrl?: StringNullableFilter<"GeneratedDocument"> | string | null
    fileData?: StringNullableFilter<"GeneratedDocument"> | string | null
    fileName?: StringNullableFilter<"GeneratedDocument"> | string | null
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    version?: IntFilter<"GeneratedDocument"> | number
    createdBy?: StringFilter<"GeneratedDocument"> | string
    context?: StringNullableFilter<"GeneratedDocument"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id">

  export type GeneratedDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    templateId?: SortOrder
    templateName?: SortOrder
    data?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileData?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    context?: SortOrderInput | SortOrder
    _count?: GeneratedDocumentCountOrderByAggregateInput
    _avg?: GeneratedDocumentAvgOrderByAggregateInput
    _max?: GeneratedDocumentMaxOrderByAggregateInput
    _min?: GeneratedDocumentMinOrderByAggregateInput
    _sum?: GeneratedDocumentSumOrderByAggregateInput
  }

  export type GeneratedDocumentScalarWhereWithAggregatesInput = {
    AND?: GeneratedDocumentScalarWhereWithAggregatesInput | GeneratedDocumentScalarWhereWithAggregatesInput[]
    OR?: GeneratedDocumentScalarWhereWithAggregatesInput[]
    NOT?: GeneratedDocumentScalarWhereWithAggregatesInput | GeneratedDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    projectId?: StringNullableWithAggregatesFilter<"GeneratedDocument"> | string | null
    templateId?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    templateName?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    data?: JsonWithAggregatesFilter<"GeneratedDocument">
    fileUrl?: StringNullableWithAggregatesFilter<"GeneratedDocument"> | string | null
    fileData?: StringNullableWithAggregatesFilter<"GeneratedDocument"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"GeneratedDocument"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedDocument"> | Date | string
    version?: IntWithAggregatesFilter<"GeneratedDocument"> | number
    createdBy?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    context?: StringNullableWithAggregatesFilter<"GeneratedDocument"> | string | null
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    razaoSocial?: string | null
    cnpj: string
    address: string
    techResp: string
    email: string
    phone: string
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    razaoSocial?: string | null
    cnpj: string
    address: string
    techResp: string
    email: string
    phone: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    techResp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    techResp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    razaoSocial?: string | null
    cnpj: string
    address: string
    techResp: string
    email: string
    phone: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    techResp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    techResp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type StateCreateInput = {
    id?: string
    name: string
    uf: string
    concessionaires?: ConcessionaireCreateNestedManyWithoutStateInput
    projects?: ProjectCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: string
    name: string
    uf: string
    concessionaires?: ConcessionaireUncheckedCreateNestedManyWithoutStateInput
    projects?: ProjectUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    concessionaires?: ConcessionaireUpdateManyWithoutStateNestedInput
    projects?: ProjectUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    concessionaires?: ConcessionaireUncheckedUpdateManyWithoutStateNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: string
    name: string
    uf: string
  }

  export type StateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
  }

  export type ConcessionaireCreateInput = {
    id?: string
    name: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
    state: StateCreateNestedOneWithoutConcessionairesInput
    projects?: ProjectCreateNestedManyWithoutConcessionaireInput
  }

  export type ConcessionaireUncheckedCreateInput = {
    id?: string
    name: string
    stateId: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
    projects?: ProjectUncheckedCreateNestedManyWithoutConcessionaireInput
  }

  export type ConcessionaireUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
    state?: StateUpdateOneRequiredWithoutConcessionairesNestedInput
    projects?: ProjectUpdateManyWithoutConcessionaireNestedInput
  }

  export type ConcessionaireUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
    projects?: ProjectUncheckedUpdateManyWithoutConcessionaireNestedInput
  }

  export type ConcessionaireCreateManyInput = {
    id?: string
    name: string
    stateId: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
  }

  export type ConcessionaireUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
  }

  export type ConcessionaireUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
  }

  export type ProjectCreateInput = {
    id?: string
    number: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    company: CompanyCreateNestedOneWithoutProjectsInput
    state: StateCreateNestedOneWithoutProjectsInput
    concessionaire: ConcessionaireCreateNestedOneWithoutProjectsInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    number: string
    companyId: string
    stateId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    company?: CompanyUpdateOneRequiredWithoutProjectsNestedInput
    state?: StateUpdateOneRequiredWithoutProjectsNestedInput
    concessionaire?: ConcessionaireUpdateOneRequiredWithoutProjectsNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    concessionaireId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    number: string
    companyId: string
    stateId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    concessionaireId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
  }

  export type GeneratedDocumentCreateInput = {
    id?: string
    templateId: string
    templateName: string
    data: JsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    fileData?: string | null
    fileName?: string | null
    createdAt?: Date | string
    version: number
    createdBy: string
    context?: string | null
    project?: ProjectCreateNestedOneWithoutGeneratedDocsInput
  }

  export type GeneratedDocumentUncheckedCreateInput = {
    id?: string
    projectId?: string | null
    templateId: string
    templateName: string
    data: JsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    fileData?: string | null
    fileName?: string | null
    createdAt?: Date | string
    version: number
    createdBy: string
    context?: string | null
  }

  export type GeneratedDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutGeneratedDocsNestedInput
  }

  export type GeneratedDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    templateName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedDocumentCreateManyInput = {
    id?: string
    projectId?: string | null
    templateId: string
    templateName: string
    data: JsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    fileData?: string | null
    fileName?: string | null
    createdAt?: Date | string
    version: number
    createdBy: string
    context?: string | null
  }

  export type GeneratedDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    templateName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    techResp?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    techResp?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    techResp?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ConcessionaireListRelationFilter = {
    every?: ConcessionaireWhereInput
    some?: ConcessionaireWhereInput
    none?: ConcessionaireWhereInput
  }

  export type ConcessionaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uf?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uf?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uf?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StateScalarRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type ConcessionaireCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    requiredDocs?: SortOrder
  }

  export type ConcessionaireMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }

  export type ConcessionaireMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ConcessionaireScalarRelationFilter = {
    is?: ConcessionaireWhereInput
    isNot?: ConcessionaireWhereInput
  }

  export type GeneratedDocumentListRelationFilter = {
    every?: GeneratedDocumentWhereInput
    some?: GeneratedDocumentWhereInput
    none?: GeneratedDocumentWhereInput
  }

  export type GeneratedDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    companyId?: SortOrder
    stateId?: SortOrder
    concessionaireId?: SortOrder
    city?: SortOrder
    infraType?: SortOrder
    poleCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    documents?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    poleCount?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    companyId?: SortOrder
    stateId?: SortOrder
    concessionaireId?: SortOrder
    city?: SortOrder
    infraType?: SortOrder
    poleCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    companyId?: SortOrder
    stateId?: SortOrder
    concessionaireId?: SortOrder
    city?: SortOrder
    infraType?: SortOrder
    poleCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    poleCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type GeneratedDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    templateId?: SortOrder
    templateName?: SortOrder
    data?: SortOrder
    fileUrl?: SortOrder
    fileData?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    context?: SortOrder
  }

  export type GeneratedDocumentAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type GeneratedDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    templateId?: SortOrder
    templateName?: SortOrder
    fileUrl?: SortOrder
    fileData?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    context?: SortOrder
  }

  export type GeneratedDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    templateId?: SortOrder
    templateName?: SortOrder
    fileUrl?: SortOrder
    fileData?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    context?: SortOrder
  }

  export type GeneratedDocumentSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ConcessionaireCreateNestedManyWithoutStateInput = {
    create?: XOR<ConcessionaireCreateWithoutStateInput, ConcessionaireUncheckedCreateWithoutStateInput> | ConcessionaireCreateWithoutStateInput[] | ConcessionaireUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ConcessionaireCreateOrConnectWithoutStateInput | ConcessionaireCreateOrConnectWithoutStateInput[]
    createMany?: ConcessionaireCreateManyStateInputEnvelope
    connect?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutStateInput = {
    create?: XOR<ProjectCreateWithoutStateInput, ProjectUncheckedCreateWithoutStateInput> | ProjectCreateWithoutStateInput[] | ProjectUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStateInput | ProjectCreateOrConnectWithoutStateInput[]
    createMany?: ProjectCreateManyStateInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ConcessionaireUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<ConcessionaireCreateWithoutStateInput, ConcessionaireUncheckedCreateWithoutStateInput> | ConcessionaireCreateWithoutStateInput[] | ConcessionaireUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ConcessionaireCreateOrConnectWithoutStateInput | ConcessionaireCreateOrConnectWithoutStateInput[]
    createMany?: ConcessionaireCreateManyStateInputEnvelope
    connect?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<ProjectCreateWithoutStateInput, ProjectUncheckedCreateWithoutStateInput> | ProjectCreateWithoutStateInput[] | ProjectUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStateInput | ProjectCreateOrConnectWithoutStateInput[]
    createMany?: ProjectCreateManyStateInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ConcessionaireUpdateManyWithoutStateNestedInput = {
    create?: XOR<ConcessionaireCreateWithoutStateInput, ConcessionaireUncheckedCreateWithoutStateInput> | ConcessionaireCreateWithoutStateInput[] | ConcessionaireUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ConcessionaireCreateOrConnectWithoutStateInput | ConcessionaireCreateOrConnectWithoutStateInput[]
    upsert?: ConcessionaireUpsertWithWhereUniqueWithoutStateInput | ConcessionaireUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ConcessionaireCreateManyStateInputEnvelope
    set?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    disconnect?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    delete?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    connect?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    update?: ConcessionaireUpdateWithWhereUniqueWithoutStateInput | ConcessionaireUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ConcessionaireUpdateManyWithWhereWithoutStateInput | ConcessionaireUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ConcessionaireScalarWhereInput | ConcessionaireScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutStateNestedInput = {
    create?: XOR<ProjectCreateWithoutStateInput, ProjectUncheckedCreateWithoutStateInput> | ProjectCreateWithoutStateInput[] | ProjectUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStateInput | ProjectCreateOrConnectWithoutStateInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutStateInput | ProjectUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ProjectCreateManyStateInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutStateInput | ProjectUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutStateInput | ProjectUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ConcessionaireUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<ConcessionaireCreateWithoutStateInput, ConcessionaireUncheckedCreateWithoutStateInput> | ConcessionaireCreateWithoutStateInput[] | ConcessionaireUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ConcessionaireCreateOrConnectWithoutStateInput | ConcessionaireCreateOrConnectWithoutStateInput[]
    upsert?: ConcessionaireUpsertWithWhereUniqueWithoutStateInput | ConcessionaireUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ConcessionaireCreateManyStateInputEnvelope
    set?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    disconnect?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    delete?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    connect?: ConcessionaireWhereUniqueInput | ConcessionaireWhereUniqueInput[]
    update?: ConcessionaireUpdateWithWhereUniqueWithoutStateInput | ConcessionaireUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ConcessionaireUpdateManyWithWhereWithoutStateInput | ConcessionaireUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ConcessionaireScalarWhereInput | ConcessionaireScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<ProjectCreateWithoutStateInput, ProjectUncheckedCreateWithoutStateInput> | ProjectCreateWithoutStateInput[] | ProjectUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStateInput | ProjectCreateOrConnectWithoutStateInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutStateInput | ProjectUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ProjectCreateManyStateInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutStateInput | ProjectUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutStateInput | ProjectUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ConcessionaireCreaterequiredDocsInput = {
    set: string[]
  }

  export type StateCreateNestedOneWithoutConcessionairesInput = {
    create?: XOR<StateCreateWithoutConcessionairesInput, StateUncheckedCreateWithoutConcessionairesInput>
    connectOrCreate?: StateCreateOrConnectWithoutConcessionairesInput
    connect?: StateWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutConcessionaireInput = {
    create?: XOR<ProjectCreateWithoutConcessionaireInput, ProjectUncheckedCreateWithoutConcessionaireInput> | ProjectCreateWithoutConcessionaireInput[] | ProjectUncheckedCreateWithoutConcessionaireInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutConcessionaireInput | ProjectCreateOrConnectWithoutConcessionaireInput[]
    createMany?: ProjectCreateManyConcessionaireInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutConcessionaireInput = {
    create?: XOR<ProjectCreateWithoutConcessionaireInput, ProjectUncheckedCreateWithoutConcessionaireInput> | ProjectCreateWithoutConcessionaireInput[] | ProjectUncheckedCreateWithoutConcessionaireInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutConcessionaireInput | ProjectCreateOrConnectWithoutConcessionaireInput[]
    createMany?: ProjectCreateManyConcessionaireInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ConcessionaireUpdaterequiredDocsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StateUpdateOneRequiredWithoutConcessionairesNestedInput = {
    create?: XOR<StateCreateWithoutConcessionairesInput, StateUncheckedCreateWithoutConcessionairesInput>
    connectOrCreate?: StateCreateOrConnectWithoutConcessionairesInput
    upsert?: StateUpsertWithoutConcessionairesInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutConcessionairesInput, StateUpdateWithoutConcessionairesInput>, StateUncheckedUpdateWithoutConcessionairesInput>
  }

  export type ProjectUpdateManyWithoutConcessionaireNestedInput = {
    create?: XOR<ProjectCreateWithoutConcessionaireInput, ProjectUncheckedCreateWithoutConcessionaireInput> | ProjectCreateWithoutConcessionaireInput[] | ProjectUncheckedCreateWithoutConcessionaireInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutConcessionaireInput | ProjectCreateOrConnectWithoutConcessionaireInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutConcessionaireInput | ProjectUpsertWithWhereUniqueWithoutConcessionaireInput[]
    createMany?: ProjectCreateManyConcessionaireInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutConcessionaireInput | ProjectUpdateWithWhereUniqueWithoutConcessionaireInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutConcessionaireInput | ProjectUpdateManyWithWhereWithoutConcessionaireInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutConcessionaireNestedInput = {
    create?: XOR<ProjectCreateWithoutConcessionaireInput, ProjectUncheckedCreateWithoutConcessionaireInput> | ProjectCreateWithoutConcessionaireInput[] | ProjectUncheckedCreateWithoutConcessionaireInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutConcessionaireInput | ProjectCreateOrConnectWithoutConcessionaireInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutConcessionaireInput | ProjectUpsertWithWhereUniqueWithoutConcessionaireInput[]
    createMany?: ProjectCreateManyConcessionaireInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutConcessionaireInput | ProjectUpdateWithWhereUniqueWithoutConcessionaireInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutConcessionaireInput | ProjectUpdateManyWithWhereWithoutConcessionaireInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutProjectsInput = {
    create?: XOR<StateCreateWithoutProjectsInput, StateUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: StateCreateOrConnectWithoutProjectsInput
    connect?: StateWhereUniqueInput
  }

  export type ConcessionaireCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ConcessionaireCreateWithoutProjectsInput, ConcessionaireUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ConcessionaireCreateOrConnectWithoutProjectsInput
    connect?: ConcessionaireWhereUniqueInput
  }

  export type GeneratedDocumentCreateNestedManyWithoutProjectInput = {
    create?: XOR<GeneratedDocumentCreateWithoutProjectInput, GeneratedDocumentUncheckedCreateWithoutProjectInput> | GeneratedDocumentCreateWithoutProjectInput[] | GeneratedDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutProjectInput | GeneratedDocumentCreateOrConnectWithoutProjectInput[]
    createMany?: GeneratedDocumentCreateManyProjectInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type GeneratedDocumentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<GeneratedDocumentCreateWithoutProjectInput, GeneratedDocumentUncheckedCreateWithoutProjectInput> | GeneratedDocumentCreateWithoutProjectInput[] | GeneratedDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutProjectInput | GeneratedDocumentCreateOrConnectWithoutProjectInput[]
    createMany?: GeneratedDocumentCreateManyProjectInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    upsert?: CompanyUpsertWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProjectsInput, CompanyUpdateWithoutProjectsInput>, CompanyUncheckedUpdateWithoutProjectsInput>
  }

  export type StateUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<StateCreateWithoutProjectsInput, StateUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: StateCreateOrConnectWithoutProjectsInput
    upsert?: StateUpsertWithoutProjectsInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutProjectsInput, StateUpdateWithoutProjectsInput>, StateUncheckedUpdateWithoutProjectsInput>
  }

  export type ConcessionaireUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ConcessionaireCreateWithoutProjectsInput, ConcessionaireUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ConcessionaireCreateOrConnectWithoutProjectsInput
    upsert?: ConcessionaireUpsertWithoutProjectsInput
    connect?: ConcessionaireWhereUniqueInput
    update?: XOR<XOR<ConcessionaireUpdateToOneWithWhereWithoutProjectsInput, ConcessionaireUpdateWithoutProjectsInput>, ConcessionaireUncheckedUpdateWithoutProjectsInput>
  }

  export type GeneratedDocumentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutProjectInput, GeneratedDocumentUncheckedCreateWithoutProjectInput> | GeneratedDocumentCreateWithoutProjectInput[] | GeneratedDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutProjectInput | GeneratedDocumentCreateOrConnectWithoutProjectInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutProjectInput | GeneratedDocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GeneratedDocumentCreateManyProjectInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutProjectInput | GeneratedDocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutProjectInput | GeneratedDocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutProjectInput, GeneratedDocumentUncheckedCreateWithoutProjectInput> | GeneratedDocumentCreateWithoutProjectInput[] | GeneratedDocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutProjectInput | GeneratedDocumentCreateOrConnectWithoutProjectInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutProjectInput | GeneratedDocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GeneratedDocumentCreateManyProjectInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutProjectInput | GeneratedDocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutProjectInput | GeneratedDocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutGeneratedDocsInput = {
    create?: XOR<ProjectCreateWithoutGeneratedDocsInput, ProjectUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutGeneratedDocsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutGeneratedDocsNestedInput = {
    create?: XOR<ProjectCreateWithoutGeneratedDocsInput, ProjectUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutGeneratedDocsInput
    upsert?: ProjectUpsertWithoutGeneratedDocsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutGeneratedDocsInput, ProjectUpdateWithoutGeneratedDocsInput>, ProjectUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectCreateWithoutCompanyInput = {
    id?: string
    number: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    state: StateCreateNestedOneWithoutProjectsInput
    concessionaire: ConcessionaireCreateNestedOneWithoutProjectsInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCompanyInput = {
    id?: string
    number: string
    stateId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectCreateManyCompanyInputEnvelope = {
    data: ProjectCreateManyCompanyInput | ProjectCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCompanyInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    number?: StringFilter<"Project"> | string
    companyId?: StringFilter<"Project"> | string
    stateId?: StringFilter<"Project"> | string
    concessionaireId?: StringFilter<"Project"> | string
    city?: StringFilter<"Project"> | string
    infraType?: StringFilter<"Project"> | string
    poleCount?: IntFilter<"Project"> | number
    status?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    documents?: JsonFilter<"Project">
  }

  export type ConcessionaireCreateWithoutStateInput = {
    id?: string
    name: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
    projects?: ProjectCreateNestedManyWithoutConcessionaireInput
  }

  export type ConcessionaireUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
    projects?: ProjectUncheckedCreateNestedManyWithoutConcessionaireInput
  }

  export type ConcessionaireCreateOrConnectWithoutStateInput = {
    where: ConcessionaireWhereUniqueInput
    create: XOR<ConcessionaireCreateWithoutStateInput, ConcessionaireUncheckedCreateWithoutStateInput>
  }

  export type ConcessionaireCreateManyStateInputEnvelope = {
    data: ConcessionaireCreateManyStateInput | ConcessionaireCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutStateInput = {
    id?: string
    number: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    company: CompanyCreateNestedOneWithoutProjectsInput
    concessionaire: ConcessionaireCreateNestedOneWithoutProjectsInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStateInput = {
    id?: string
    number: string
    companyId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStateInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStateInput, ProjectUncheckedCreateWithoutStateInput>
  }

  export type ProjectCreateManyStateInputEnvelope = {
    data: ProjectCreateManyStateInput | ProjectCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type ConcessionaireUpsertWithWhereUniqueWithoutStateInput = {
    where: ConcessionaireWhereUniqueInput
    update: XOR<ConcessionaireUpdateWithoutStateInput, ConcessionaireUncheckedUpdateWithoutStateInput>
    create: XOR<ConcessionaireCreateWithoutStateInput, ConcessionaireUncheckedCreateWithoutStateInput>
  }

  export type ConcessionaireUpdateWithWhereUniqueWithoutStateInput = {
    where: ConcessionaireWhereUniqueInput
    data: XOR<ConcessionaireUpdateWithoutStateInput, ConcessionaireUncheckedUpdateWithoutStateInput>
  }

  export type ConcessionaireUpdateManyWithWhereWithoutStateInput = {
    where: ConcessionaireScalarWhereInput
    data: XOR<ConcessionaireUpdateManyMutationInput, ConcessionaireUncheckedUpdateManyWithoutStateInput>
  }

  export type ConcessionaireScalarWhereInput = {
    AND?: ConcessionaireScalarWhereInput | ConcessionaireScalarWhereInput[]
    OR?: ConcessionaireScalarWhereInput[]
    NOT?: ConcessionaireScalarWhereInput | ConcessionaireScalarWhereInput[]
    id?: StringFilter<"Concessionaire"> | string
    name?: StringFilter<"Concessionaire"> | string
    stateId?: StringFilter<"Concessionaire"> | string
    requiredDocs?: StringNullableListFilter<"Concessionaire">
  }

  export type ProjectUpsertWithWhereUniqueWithoutStateInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutStateInput, ProjectUncheckedUpdateWithoutStateInput>
    create: XOR<ProjectCreateWithoutStateInput, ProjectUncheckedCreateWithoutStateInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutStateInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutStateInput, ProjectUncheckedUpdateWithoutStateInput>
  }

  export type ProjectUpdateManyWithWhereWithoutStateInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutStateInput>
  }

  export type StateCreateWithoutConcessionairesInput = {
    id?: string
    name: string
    uf: string
    projects?: ProjectCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutConcessionairesInput = {
    id?: string
    name: string
    uf: string
    projects?: ProjectUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutConcessionairesInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutConcessionairesInput, StateUncheckedCreateWithoutConcessionairesInput>
  }

  export type ProjectCreateWithoutConcessionaireInput = {
    id?: string
    number: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    company: CompanyCreateNestedOneWithoutProjectsInput
    state: StateCreateNestedOneWithoutProjectsInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutConcessionaireInput = {
    id?: string
    number: string
    companyId: string
    stateId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutConcessionaireInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutConcessionaireInput, ProjectUncheckedCreateWithoutConcessionaireInput>
  }

  export type ProjectCreateManyConcessionaireInputEnvelope = {
    data: ProjectCreateManyConcessionaireInput | ProjectCreateManyConcessionaireInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutConcessionairesInput = {
    update: XOR<StateUpdateWithoutConcessionairesInput, StateUncheckedUpdateWithoutConcessionairesInput>
    create: XOR<StateCreateWithoutConcessionairesInput, StateUncheckedCreateWithoutConcessionairesInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutConcessionairesInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutConcessionairesInput, StateUncheckedUpdateWithoutConcessionairesInput>
  }

  export type StateUpdateWithoutConcessionairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutConcessionairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutStateNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutConcessionaireInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutConcessionaireInput, ProjectUncheckedUpdateWithoutConcessionaireInput>
    create: XOR<ProjectCreateWithoutConcessionaireInput, ProjectUncheckedCreateWithoutConcessionaireInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutConcessionaireInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutConcessionaireInput, ProjectUncheckedUpdateWithoutConcessionaireInput>
  }

  export type ProjectUpdateManyWithWhereWithoutConcessionaireInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutConcessionaireInput>
  }

  export type CompanyCreateWithoutProjectsInput = {
    id?: string
    name: string
    razaoSocial?: string | null
    cnpj: string
    address: string
    techResp: string
    email: string
    phone: string
  }

  export type CompanyUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    razaoSocial?: string | null
    cnpj: string
    address: string
    techResp: string
    email: string
    phone: string
  }

  export type CompanyCreateOrConnectWithoutProjectsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
  }

  export type StateCreateWithoutProjectsInput = {
    id?: string
    name: string
    uf: string
    concessionaires?: ConcessionaireCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    uf: string
    concessionaires?: ConcessionaireUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutProjectsInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutProjectsInput, StateUncheckedCreateWithoutProjectsInput>
  }

  export type ConcessionaireCreateWithoutProjectsInput = {
    id?: string
    name: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
    state: StateCreateNestedOneWithoutConcessionairesInput
  }

  export type ConcessionaireUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    stateId: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
  }

  export type ConcessionaireCreateOrConnectWithoutProjectsInput = {
    where: ConcessionaireWhereUniqueInput
    create: XOR<ConcessionaireCreateWithoutProjectsInput, ConcessionaireUncheckedCreateWithoutProjectsInput>
  }

  export type GeneratedDocumentCreateWithoutProjectInput = {
    id?: string
    templateId: string
    templateName: string
    data: JsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    fileData?: string | null
    fileName?: string | null
    createdAt?: Date | string
    version: number
    createdBy: string
    context?: string | null
  }

  export type GeneratedDocumentUncheckedCreateWithoutProjectInput = {
    id?: string
    templateId: string
    templateName: string
    data: JsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    fileData?: string | null
    fileName?: string | null
    createdAt?: Date | string
    version: number
    createdBy: string
    context?: string | null
  }

  export type GeneratedDocumentCreateOrConnectWithoutProjectInput = {
    where: GeneratedDocumentWhereUniqueInput
    create: XOR<GeneratedDocumentCreateWithoutProjectInput, GeneratedDocumentUncheckedCreateWithoutProjectInput>
  }

  export type GeneratedDocumentCreateManyProjectInputEnvelope = {
    data: GeneratedDocumentCreateManyProjectInput | GeneratedDocumentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutProjectsInput = {
    update: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
  }

  export type CompanyUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    techResp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    techResp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type StateUpsertWithoutProjectsInput = {
    update: XOR<StateUpdateWithoutProjectsInput, StateUncheckedUpdateWithoutProjectsInput>
    create: XOR<StateCreateWithoutProjectsInput, StateUncheckedCreateWithoutProjectsInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutProjectsInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutProjectsInput, StateUncheckedUpdateWithoutProjectsInput>
  }

  export type StateUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    concessionaires?: ConcessionaireUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    concessionaires?: ConcessionaireUncheckedUpdateManyWithoutStateNestedInput
  }

  export type ConcessionaireUpsertWithoutProjectsInput = {
    update: XOR<ConcessionaireUpdateWithoutProjectsInput, ConcessionaireUncheckedUpdateWithoutProjectsInput>
    create: XOR<ConcessionaireCreateWithoutProjectsInput, ConcessionaireUncheckedCreateWithoutProjectsInput>
    where?: ConcessionaireWhereInput
  }

  export type ConcessionaireUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ConcessionaireWhereInput
    data: XOR<ConcessionaireUpdateWithoutProjectsInput, ConcessionaireUncheckedUpdateWithoutProjectsInput>
  }

  export type ConcessionaireUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
    state?: StateUpdateOneRequiredWithoutConcessionairesNestedInput
  }

  export type ConcessionaireUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
  }

  export type GeneratedDocumentUpsertWithWhereUniqueWithoutProjectInput = {
    where: GeneratedDocumentWhereUniqueInput
    update: XOR<GeneratedDocumentUpdateWithoutProjectInput, GeneratedDocumentUncheckedUpdateWithoutProjectInput>
    create: XOR<GeneratedDocumentCreateWithoutProjectInput, GeneratedDocumentUncheckedCreateWithoutProjectInput>
  }

  export type GeneratedDocumentUpdateWithWhereUniqueWithoutProjectInput = {
    where: GeneratedDocumentWhereUniqueInput
    data: XOR<GeneratedDocumentUpdateWithoutProjectInput, GeneratedDocumentUncheckedUpdateWithoutProjectInput>
  }

  export type GeneratedDocumentUpdateManyWithWhereWithoutProjectInput = {
    where: GeneratedDocumentScalarWhereInput
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyWithoutProjectInput>
  }

  export type GeneratedDocumentScalarWhereInput = {
    AND?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
    OR?: GeneratedDocumentScalarWhereInput[]
    NOT?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
    id?: StringFilter<"GeneratedDocument"> | string
    projectId?: StringNullableFilter<"GeneratedDocument"> | string | null
    templateId?: StringFilter<"GeneratedDocument"> | string
    templateName?: StringFilter<"GeneratedDocument"> | string
    data?: JsonFilter<"GeneratedDocument">
    fileUrl?: StringNullableFilter<"GeneratedDocument"> | string | null
    fileData?: StringNullableFilter<"GeneratedDocument"> | string | null
    fileName?: StringNullableFilter<"GeneratedDocument"> | string | null
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    version?: IntFilter<"GeneratedDocument"> | number
    createdBy?: StringFilter<"GeneratedDocument"> | string
    context?: StringNullableFilter<"GeneratedDocument"> | string | null
  }

  export type ProjectCreateWithoutGeneratedDocsInput = {
    id?: string
    number: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
    company: CompanyCreateNestedOneWithoutProjectsInput
    state: StateCreateNestedOneWithoutProjectsInput
    concessionaire: ConcessionaireCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutGeneratedDocsInput = {
    id?: string
    number: string
    companyId: string
    stateId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
  }

  export type ProjectCreateOrConnectWithoutGeneratedDocsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutGeneratedDocsInput, ProjectUncheckedCreateWithoutGeneratedDocsInput>
  }

  export type ProjectUpsertWithoutGeneratedDocsInput = {
    update: XOR<ProjectUpdateWithoutGeneratedDocsInput, ProjectUncheckedUpdateWithoutGeneratedDocsInput>
    create: XOR<ProjectCreateWithoutGeneratedDocsInput, ProjectUncheckedCreateWithoutGeneratedDocsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutGeneratedDocsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutGeneratedDocsInput, ProjectUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type ProjectUpdateWithoutGeneratedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    company?: CompanyUpdateOneRequiredWithoutProjectsNestedInput
    state?: StateUpdateOneRequiredWithoutProjectsNestedInput
    concessionaire?: ConcessionaireUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutGeneratedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    concessionaireId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectCreateManyCompanyInput = {
    id?: string
    number: string
    stateId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
  }

  export type ProjectUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    state?: StateUpdateOneRequiredWithoutProjectsNestedInput
    concessionaire?: ConcessionaireUpdateOneRequiredWithoutProjectsNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    concessionaireId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    concessionaireId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
  }

  export type ConcessionaireCreateManyStateInput = {
    id?: string
    name: string
    requiredDocs?: ConcessionaireCreaterequiredDocsInput | string[]
  }

  export type ProjectCreateManyStateInput = {
    id?: string
    number: string
    companyId: string
    concessionaireId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
  }

  export type ConcessionaireUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
    projects?: ProjectUpdateManyWithoutConcessionaireNestedInput
  }

  export type ConcessionaireUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
    projects?: ProjectUncheckedUpdateManyWithoutConcessionaireNestedInput
  }

  export type ConcessionaireUncheckedUpdateManyWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredDocs?: ConcessionaireUpdaterequiredDocsInput | string[]
  }

  export type ProjectUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    company?: CompanyUpdateOneRequiredWithoutProjectsNestedInput
    concessionaire?: ConcessionaireUpdateOneRequiredWithoutProjectsNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    concessionaireId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    concessionaireId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectCreateManyConcessionaireInput = {
    id?: string
    number: string
    companyId: string
    stateId: string
    city: string
    infraType: string
    poleCount: number
    status: string
    createdAt?: Date | string
    documents: JsonNullValueInput | InputJsonValue
  }

  export type ProjectUpdateWithoutConcessionaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    company?: CompanyUpdateOneRequiredWithoutProjectsNestedInput
    state?: StateUpdateOneRequiredWithoutProjectsNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutConcessionaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutConcessionaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    infraType?: StringFieldUpdateOperationsInput | string
    poleCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JsonNullValueInput | InputJsonValue
  }

  export type GeneratedDocumentCreateManyProjectInput = {
    id?: string
    templateId: string
    templateName: string
    data: JsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    fileData?: string | null
    fileName?: string | null
    createdAt?: Date | string
    version: number
    createdBy: string
    context?: string | null
  }

  export type GeneratedDocumentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedDocumentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateName?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}