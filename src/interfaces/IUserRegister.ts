import { IProfile } from "./IProfile";
import { IRoles } from "./IRoles";

export interface IUserRegister {
    userName: string;
    password: string;
    authStrategy?: string;
    profile?: IProfile;
    roles?: IRoles;
    error?: string;
    message?: string;
}