import { IComment } from "./Comment";
import { IGroup } from "./Group";
import { IImage } from "./Image";
import { IUser } from "./User";

export interface IPost {
    id: number,
    publishDate: Date,
    author?: IUser,
    description: string,
    likes: number,
    group?: IGroup,
    comments: IComment[],
    images?: IImage[]
}