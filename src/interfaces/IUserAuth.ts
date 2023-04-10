export interface IUserAuth {
    userId: number;
    userName: string;
    password: string;
    email: string;
    token: string;
    role: string;
    error?: string;
}