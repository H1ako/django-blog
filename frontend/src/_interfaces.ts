interface IRequest {
  readonly errorDetails?: string,
}

interface IUserRequest extends IRequest {
  readonly user: UserType
}

interface IBase {
  readonly updatedAt: string,
  readonly createdAt: string,
}

interface IUser extends IBase {
  readonly id: IdType,
  readonly email: string,
  readonly firstName: string,
  readonly lastName: string,
  readonly name: string,
  readonly picture: UserPicType
}

interface IPost extends IBase {
  readonly id: IdType,
  readonly name: string,
  readonly description: string,
  readonly shortDescription: string,
  readonly thumbnail: string,
  readonly author: IUser,
  readonly views: IPostView[],
  readonly isFavourite: boolean,
  readonly favourites: IPostFavourite[],
  readonly link: string,
  readonly comments: IPostComment[]
}

interface IPostComment extends IBase {
  readonly id: IdType,
  readonly text: string,
  readonly post: IPost | IdType,
  readonly author: IUser,
  readonly favourites: IUser[],
}

interface IPostFavourite extends IBase {
  readonly id: IdType,
  readonly text: string,
  readonly post: IPost | IdType,
  readonly author: IUser,
}

interface IPostView extends IBase {
  readonly id: IdType,
  readonly post: IPost | IdType,
  readonly author: IUser,
}
