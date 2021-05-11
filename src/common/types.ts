export interface App {
  name: string;
  url?: string;
  owner?: string;
}

export interface GraphQLResult {
  apps: {
    data: App[];
    count: number;
    version: string;
  };
};

export interface GraphQLError {
  response: {
    errors: [
      {
        message: string;
      }
    ];
  };
}
