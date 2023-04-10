import { IPostsRegister } from "../../interfaces/IPostsRegister";
import { IPosts } from "../../interfaces/IUser";
import { getPosts, getPostsByUserId, postPosts } from "../client/postsClient";

export const getPostsService = async () => {
    let data: Array<IPosts> = [];
    let error: string = "";
    (Promise.all<void>([
        await getPosts().then((values: IPosts | any) => {
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null) {
                data = [...data, ...values as IPosts[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const getPostsByUserIdService = async (id: number) => {
    let data: Array<IPosts> = [];
    let error: string = "";
    (Promise.all<void>([
        await getPostsByUserId(id).then((values: IPosts | any) => {
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null) {
                data = [...data, ...values as IPosts[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const postPostsService = async (dataPosts: IPostsRegister) => {
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
        await postPosts(dataPosts).then((values: IPosts | any) => {
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null) {
                data = { ...data, ...values as IPostsRegister };
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}
