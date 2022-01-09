declare interface ILoginRequest {
  Login: string;
  Password: string;
}

declare interface IUserProfile {
  FirstName: string;
  LastName: string;
  Login: string;
  City: string;
  Interests: string;
  Age: number;
  IsPublic: boolean;
}

declare interface IUser extends IUserProfile {
  Id: number;
}

declare interface IUserFullData {
  user: IUser;
  incoming_requests: IUser[];
  outgoing_requests: IUser[];
  friends: IUser[];
}

declare interface IAuthorizationPayload extends IUserFullData {
  token: string;
  expires_in: string;
}

declare interface IItemsResponse<T> {
  items: T[];
  total_items: number;
  page: number;
  per_page: number;
}

declare interface IItemsQuery {
  page?: number;
  per_page?: number;
}

