import { IUser } from "../../interfaces/IUser";
import { IForgot, IUserAuth, IUserLogin } from "../../interfaces/IUserAuth";
import { IUserRegister } from "../../interfaces/IUserRegister";
import { getUsers, getUsersById, postUsers } from "../client/userClient";

export const getUsersService = async () => {
    let data: Array<IUser> = [];
    let error: string = "";
    (Promise.all<void>([
        await getUsers().then((values: IUser | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IUser[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const getUsersByIdService = async (id: number) => {
    let data: IUser = {
        id: 0,
        userName: "",
        authStrategy: "",
        posts: [],
        createdAt: new Date,
        profile: undefined,
        roles: undefined
    };
    let error: string = "";
    (Promise.all<void>([
        await getUsersById(id).then((values: IUser | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = { ...data, ...values as IUser };
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const postUsersService = async (dataUser: IUserRegister) => {
    let data = {
        error: false,
        success: false,
        message: "",
        status: 0
    };
    let error: string = "";
    (Promise.all<void>([
        await postUsers(dataUser).then((values: IUser | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = { ...data, ...values };
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}
