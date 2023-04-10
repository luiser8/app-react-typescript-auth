import { get, post } from "../../utils/Fetch";
import { IPosts } from "../../interfaces/IUser";
import { IPostsRegister } from "../../interfaces/IPostsRegister";

export const getPosts = async (): Promise<IPosts> => {
    return await get('posts');
}

export const getPostsByUserId = async (id: number): Promise<IPosts> => {
    return await get(`posts/user/${id}`);
}

export const postPosts = async (data: IPostsRegister): Promise<IPostsRegister> => {
    return await post('posts', data);
}
