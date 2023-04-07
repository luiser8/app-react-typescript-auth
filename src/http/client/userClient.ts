import { get, post } from "../../utils/Fetch";
import { IUser } from "../../interfaces/IUser";
import { IUserAuth } from "../../interfaces/IUserAuth";

export const getUsers = async (): Promise<IUser> => {
    return await get('users');
}

export const postLoginUsers = async (data: IUserAuth): Promise<IUserAuth> => {
    return await post('profile', data);
}