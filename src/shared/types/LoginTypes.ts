export interface LoginData {
  id: string;
  email: string;
  password: string;
  isAccountVerified: boolean;
  refreshToken: string;
}

export type QueryParams = Record<string, string | number | boolean>;
