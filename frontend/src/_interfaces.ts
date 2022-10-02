interface IRequest {
  errorDetails?: string,
}

interface IUserRequest extends IRequest {
  user: UserType
}

interface IBase {
  updatedAt: string,
  createdAt: string,
}

interface IUser extends IBase {
  id: IdType,
  email: string,
  firstName: string,
  lastName: string,
  name: string,
  picture: UserPicType
}

interface IPost extends IBase {
  id: IdType,
  name: string,
  description: string,
  shortDescription: string,
  thumbnail: string,
  author: IUser,
  views: IPostView[],
  isFavourite: boolean,
  favourites: IPostFavourite[],
  link: string,
  comments: IPostComment[]
}

interface IPostComment extends IBase {
  id: IdType,
  text: string,
  post: IPost | IdType,
  author: IUser,
  favourites: IUser[],
}

interface IPostFavourite extends IBase {
  id: IdType,
  text: string,
  post: IPost | IdType,
  author: IUser,
}

interface IPostView extends IBase {
  id: IdType,
  post: IPost | IdType,
  author: IUser,
}
