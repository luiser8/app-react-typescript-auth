import { get, post } from "../../utils/Fetch";
import { IPosts } from "../../interfaces/IUser";
import { IPostsRegister } from "../../interfaces/IPosts";

export const getPosts = async (token: string): Promise<IPosts> => {
    return await get('posts', token);
}

export const getPostsByUserId = async (id: number, token: string): Promise<IPosts> => {
    return await get(`posts/user/${id}`, token);
}

export const postPosts = async (data: IPostsRegister, token: string): Promise<IPostsRegister> => {
    return await post('posts', data, token);
}
