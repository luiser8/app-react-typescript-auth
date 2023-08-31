import { get, post } from "../../utils/Fetch";
import { IUser } from "../../interfaces/IUser";
import { IForgot, IUserAuth, IUserLogin } from "../../interfaces/IUserAuth";

export const postLoginAuth = async (data: IUserLogin): Promise<IUserAuth> => {
    return await post('auth/login', data, "");
}

export const getForgotAuth = async (email: string): Promise<string> => {
    return await get(`auth/forgot?email=${email}`, "");
}
