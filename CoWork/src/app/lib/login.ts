export interface Profil {
  _id: string;
  email: string;
  lastName: string;
  firstName: string;
  subscription: string;
  socityName: string;
  isLogged: boolean;
}

export interface ConnectInfo {
  email: string;
  password: string;
}
