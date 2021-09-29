export type APIResult<T, U> = {
  readonly data: T;
  readonly error: U;
};

export type StatusEndpointResult = {
  readonly status: 'ok' | 'not ok';
  readonly version: string;
};

type GraphQLErrorCode = 'BAD_USER_INPUT' | 'INERNAL_SERVER_ERROR';

export type GraphQLError = {
  readonly response: {
    readonly errors: {
      readonly message: string;
      readonly locations: {
        readonly line: number;
        readonly column: number;
      }[];
      readonly path: string[];
      readonly extensions: {
        readonly code: GraphQLErrorCode;
      };
    }[];
  }
};

export type ProductData = {
  readonly name: string;
  readonly url: string;
  readonly owner: string;
};

export type ProductResponse = {
  readonly apps: {
    readonly data: ProductData[];
    readonly count: number;
    readonly version: string;
  };
};

export type StyleProps = {
  className?: string;
}
