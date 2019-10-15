export interface Profil {
  _id: string;
  profilDetail: ProfilRegister;
}

export interface ProfilRegister {
  connectDetail: ConnectInfo;
  lastName: string;
  firstName: string;
  socityName: string;
  subscription: string;
  isEngaged: boolean;
  isStudent: boolean;
}

export interface ConnectInfo {
  email: string;
  password: string;
}



export interface LocalProfil {
  _id: string;
  connectDetail: ConnectInfo;
  lastName: string;
  firstName: string;
  socityName: string;
  subscription: string;
  isEngaged: boolean;
  isStudent: boolean;
}
