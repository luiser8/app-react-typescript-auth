import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IPostsRegister } from "../../interfaces/IPostsRegister";
import { postPostsService } from "../../http/service/postsService";
import { authContext } from "../../auth/useContext";
import { TypesContext } from "../../types/Types.context";

const PostsRegister = () => {
  const { getUserId } = useContext(authContext) as TypesContext;
  const [postsRegister, setPostsRegister] = useState<IPostsRegister>({
    title: "",
    description: "",
    type: "",
    users: { id: getUserId() },
  });

  const handlePostsRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    const { data, error } = await postPostsService(postsRegister);
    if (error !== "") {
      console.log("Error save new posts");
    }
    if (data !== undefined) {
      clearInputs();
    }
  };

  const clearInputs = () => {
    setPostsRegister({
      ...postsRegister,
      title: "",
      description: "",
      type: "",
      users: {
        id: 0,
      },
    });
  };

  return (
    <div className="register-posts">
      <div className="form">
        <form className="login-form" onSubmit={handlePostsRegister}>
          <input
            required
            type="text"
            placeholder="Title"
            value={postsRegister.title}
            onChange={(ev) =>
              setPostsRegister({
                ...postsRegister,
                title: ev.target.value,
              })
            }
          />
          <input
            required
            type="text"
            placeholder="Description"
            value={postsRegister.description}
            onChange={(ev) =>
              setPostsRegister({
                ...postsRegister,
                description: ev.target.value,
              })
            }
          />
          <input
            required
            type="text"
            placeholder="Type"
            value={postsRegister.type}
            onChange={(ev) =>
              setPostsRegister({
                ...postsRegister,
                type: ev.target.value,
              })
            }
          />
          <button type="submit">Register Post</button>
        </form>
        <Link to={"/"}>To home</Link>
      </div>
    </div>
  );
};

export default PostsRegister;
