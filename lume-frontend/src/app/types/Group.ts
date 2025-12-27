import { IImage } from "./Image";
import { IPost } from "./Post";
import { IUser } from "./User";

export interface IGroup {
    id: number,
    name: string,
    description: string,
    cover: IImage,
    posts: IPost[],
    members: IUser[]
}