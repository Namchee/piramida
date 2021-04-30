export interface App {
  name: string;
  id?: number;
}

export interface GraphQLResult {
  apps: {
    data: App[];
    count: number;
    version: string;
  }
};
