import { IPostsRegister } from "../../interfaces/IPosts";
import { IPosts } from "../../interfaces/IUser";
import { getPosts, getPostsByUserId, postPosts } from "../client/postsClient";

export const getPostsService = async (token: string) => {
    let data: Array<IPosts> = [];
    let error: string = "";
    (Promise.all<void>([
        await getPosts(token).then((values: IPosts | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IPosts[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const getPostsByUserIdService = async (id: number, token: string) => {
    let data: Array<IPosts> = [];
    let error: string = "";
    (Promise.all<void>([
        await getPostsByUserId(id, token).then((values: IPosts | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IPosts[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const postPostsService = async (dataPosts: IPostsRegister, token: string) => {
    let data: IPostsRegister = {
        title: "",
        description: "",
        type: "",
        users: {
            id: 0
        }
    };
    let error: string = "";
    (Promise.all<void>([
        await postPosts(dataPosts, token).then((values: IPosts | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = { ...data, ...values as IPostsRegister };
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}
