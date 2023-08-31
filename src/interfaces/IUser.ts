import { IPosts } from "./IPosts";
import { IProfile } from "./IProfile";
import { IRoles } from "./IRoles";

export interface IUser {
    id: number;
    userName: string;
    authStrategy: string;
    createdAt: Date;
    posts: IPosts[];
    profile: IProfile | undefined;
    roles: IRoles | undefined;
}
