import { IPosts } from "../../interfaces/IUser";

type Props = {
  posts: IPosts;
};

const PostsDetails = ({ posts }: Props) => {
  const { title, description, type } = posts;
  return (
    <li>
      {title} - {description} - {type}
    </li>
  );
};

export default PostsDetails;
