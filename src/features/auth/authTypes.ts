/** Represents a user in the authentication system */
export interface User {
  id: string;
  name: string;
  email: string;
}

/** Represents the authentication state in the Redux store */
export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredintials {
  name: string;
  email: string;
  password: string;
}
