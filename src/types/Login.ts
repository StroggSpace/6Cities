export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  avatarUrl: string;
  name: string;
  id: number;
  isPro: boolean;
  email: string;
};
