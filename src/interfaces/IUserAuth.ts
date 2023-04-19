export interface IUserAuth {
    userId: number;
    userName: string;
    password: string;
    email: string;
    token: string;
    role: string;
    error?: string;
}
export interface IUserLogin {
    userName: string;
    password: string;
    error?: string;
}