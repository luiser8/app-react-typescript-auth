import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IPosts } from "../../interfaces/IUser";
import { getPostsByUserIdService } from "../../http/service/postsService";
import { authContext } from "../../auth/useContext";
import { TypesContext } from "../../types/Types.context";
import PostsDetails from "./PostsDetails";

const Posts = () => {
  const { getUserId } = useContext(authContext) as TypesContext;
  const [postsUsers, setPostsUsers] = useState<IPosts[]>([]);

  const getPostsUsers = async (): Promise<void> => {
    const { data, error } = await getPostsByUserIdService(getUserId());
    if (data !== undefined) {
      setPostsUsers(data);
    }
    if (error !== "") {
      console.log("Error get posts");
    }
  };

  useEffect(() => {
    getPostsUsers();
    return () => {
      setPostsUsers([]);
    };
  }, []);
  return (
    <ul>
      {Object.keys(postsUsers).length !== 0 ? (
        <>
          <Link to={"/posts/new"}>Create posts</Link>
          {Object.keys(postsUsers).map((key, post) => {
            return <PostsDetails key={key} posts={postsUsers[post]} />;
          })}
        </>
      ) : (
        <>
          <h3>Posts not found, create new posts</h3>
          <Link to={"/posts/new"}>Create posts</Link>
        </>
      )}
    </ul>
  );
};

export default Posts;
