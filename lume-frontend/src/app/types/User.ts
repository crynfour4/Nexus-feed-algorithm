import { IComment } from "./Comment";
import { IFriend } from "./Friend";
import { IGroup } from "./Group";
import { IImage } from "./Image";
import { INotification } from "./Notification";
import { IPost } from "./Post";

export interface IUser {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    city: string,
    country: string,
    photos: IImage[],
    profilePicture: IImage,
    notifications: INotification[],
    sentRequests: IFriend[],
    receivedRequests: IFriend[],
    posts: IPost[],
    comments: IComment[],
    groups: IGroup[]
}