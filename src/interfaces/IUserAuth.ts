export interface IUserAuth {
    userId: number;
    userName: string;
    email: string;
    role: string;
    token: string;
}
export interface IUserLogin {
    userName: string;
    password: string;
    message?: string;
}

export interface IForgot {
    id?: number;
    userId?: number;
    email?: string;
    code?: string;
    status?: boolean;
    error?: string;
}

export interface IUserLoginError {
    message: string;
    status: number;
}