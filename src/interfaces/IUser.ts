export interface IUser {
    id: number;
    userName: string;
    authStrategy: string;
    createdAt: Date;
    posts: IPosts[];
    profile: IProfile | undefined;
    roles: IRoles | undefined;
}
export interface IPosts {
    id: number;
    title: string;
    description: string;
    type: string;
    createAt: Date;
}

export interface IProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
}

export interface IRoles {
    id: number;
    name: string;
}