export interface APIResult<T> {
  data: T;
  error: string;
}

export interface GraphQLResult {
  apps: {
    data: {
      name: string;
      url?: string;
      owner?: string;
    }[];
    count: number;
    version: string;
  };
}

export interface GraphQLError {
  response: {
    errors: [
      {
        message: string;
      }
    ];
  };
}
