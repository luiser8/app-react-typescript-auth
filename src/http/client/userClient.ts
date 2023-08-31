import { get, post } from "../../utils/Fetch";
import { IUser } from "../../interfaces/IUser";
import { IForgot, IUserAuth, IUserLogin } from "../../interfaces/IUserAuth";
import { IUserRegister } from "../../interfaces/IUserRegister";

export const getUsers = async (): Promise<IUser> => {
    return await get('users');
}

export const getUsersById = async (id: number): Promise<IUser> => {
    return await get(`users/${id}`);
}

export const postUsers = async (data: IUserRegister): Promise<IUserRegister> => {
    return await post('users', data);
}
