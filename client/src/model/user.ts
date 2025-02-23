export interface User {
  username: string;
  id: string;
}

export interface UserState extends User {
  online: boolean;
}

export interface ResponseSocketUserOnline {
  event: string;
  data: UserState[];
}
