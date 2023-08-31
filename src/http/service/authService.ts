import { IUser } from "../../interfaces/IUser";
import { IForgot, IUserAuth, IUserLogin, IUserLoginError } from "../../interfaces/IUserAuth";
import { IUserRegister } from "../../interfaces/IUserRegister";
import { getForgotAuth, postLoginAuth } from "../client/authClient";

export const postAuthLoginService = async (dataUser: IUserLogin) => {
    let data = { access_token: "", status: 0 };
    let error: IUserLoginError = { message: "", status: 0 };
    (Promise.all<void>([
        await postLoginAuth(dataUser).then((values: string | any) => {
            if (values === undefined) {
                error = { ...error, ...values };
                return;
            }
            if (values?.status === 401) {
                error = { ...error, ...values };
                return values;
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

export const getAuthForgotService = async (email: string) => {
    let error: string = "";
    let data: boolean = false;
    (Promise.all<void>([
        await getForgotAuth(email).then((values: boolean | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = true;
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}
