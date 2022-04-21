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
  Sex: string;
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
  search: string;
  get_all: number;
}

declare interface IPostsResponse extends IItemsResponse<IPost> {
  users: IUser[];
}

declare interface IItemsQuery {
  page?: number;
  per_page?: number;
  search?: string;
  get_total_items?: number;
}

declare interface IPostCreateRequest {
  Title: string;
  Body: string;
}

declare interface IPost extends IPostCreateRequest {
  Id: number;
  UserId: number;
  UpdatedAt: string;
  CreatedAt: string;
  user: IUser;
}

declare interface IMessage {
  Id: number;
  Message: string;
  AuthorId: number;
  CreatedAt: string;
  IsRead: boolean;
}

declare interface IMessageResponse {
  items: IMessage[];
}

declare interface ICounter {
  UserId: number;
  UnreadMessagesCount: number;
}


declare interface IMarkAsReadResponse {
  AffectedMessages: number;
}
