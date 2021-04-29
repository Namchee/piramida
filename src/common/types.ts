export interface Illegal {
  name: string;
  id?: number;
}

export interface App {
  name: string;
  id?: number;
}

export interface GraphQLResult {
  illegalInvestments: {
    data: Illegal[];
    count: number;
    version: string;
  }
  apps: {
    data: App[];
    count: number;
    version: string;
  }
};
