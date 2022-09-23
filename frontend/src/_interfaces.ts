interface IBase {
  updated_at: string,
  created_at: string,
}

interface IUser {
  id: IdType,
  name: string,
  picture: UserPicType
}

interface IComment extends IBase {
  id: IdType,
  text: string,
  author: IUser,
  favourites: IUser[],
}

interface IPost extends IBase {
  id: IdType,
  name: string,
  description: string,
  smallDescription: string,
  thumbnail: string,
  author: IUser,
  isFavourite: boolean,
  link: string,
  fullLink: string,
  comments: IComment[]
}
