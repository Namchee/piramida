export interface Illegal {
  name: string;
  id?: number;
}

export interface App {
  name: string;
  id?: number;
}

export interface GraphQLResult {
  illegalInvestments: Illegal[];
  apps: App[];
};
