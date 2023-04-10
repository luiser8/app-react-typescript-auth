import { get, post } from "../../utils/Fetch";
import { IUser } from "../../interfaces/IUser";
import { IUserAuth } from "../../interfaces/IUserAuth";
import { IUserRegister } from "../../interfaces/IUserRegister";

export const getUsers = async (): Promise<IUser> => {
    return await get('users');
}

export const getUsersById = async (id: number): Promise<IUser> => {
    return await get(`users/${id}`);
}

export const postLoginUsers = async (data: IUserAuth): Promise<IUserAuth> => {
    return await post('users/login', data);
}

export const postUsers = async (data: IUserRegister): Promise<IUserRegister> => {
    return await post('users', data);
}
