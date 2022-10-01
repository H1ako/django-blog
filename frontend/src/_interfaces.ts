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

interface IPostComment extends IBase {
  id: IdType,
  text: string,
  user: IUser,
  favourites: IUser[],
}

interface IPostFavourite extends IBase {
  id: IdType,
  text: string,
  user: IUser,
}

interface IPost extends IBase {
  id: IdType,
  name: string,
  description: string,
  shortDescription: string,
  thumbnail: string,
  user: IUser,
  views: IUser[],
  isFavourite: boolean,
  link: string,
  comments: IPostComment[]
}
