import { IUser } from "../../interfaces/IUser";
import { IUserAuth } from "../../interfaces/IUserAuth";
import { getUsers, postLoginUsers } from "../client/userClient";

export const getUsersService = async () => {
    let users: Array<IUser> = [];
    (Promise.all<void>([
        await getUsers().then((values: any) => {
            if (values !== null) {
                users = [...users, ...values as IUser[]];
            }
        }),
    ]).catch(error => {
        new Error(error);
    }));
    return users;
}

export const postUsersLoginService = async (data: IUserAuth) => {
    let user: IUserAuth = {
        email: "",
        password: ""
    };
    (Promise.all<void>([
        await postLoginUsers(data).then((values: any) => {
            if (values !== null) {
                user = { ...user, ...values as IUserAuth };
            }
        }),
    ]).catch(error => {
        new Error(error);
    }));
    return user;
}