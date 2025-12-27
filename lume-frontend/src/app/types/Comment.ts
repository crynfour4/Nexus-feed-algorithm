import { IPost } from "./Post";
import { IUser } from "./User";

export interface IComment {
    id: number,
    date: Date,
    description: string,
    post?: IPost, 
    author?: IUser
}

// TODO: remove ? from post and user