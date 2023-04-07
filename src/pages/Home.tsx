import { useEffect, useState } from "react";
import { getUsersService } from "../../src/http/service/userService";
import { IUser } from "../interfaces/IUser";

const Home = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async (): Promise<void> => {
    const usersData = await getUsersService();
    setUsers(usersData);
  };

  useEffect(() => {
    getUsers();
    return () => {
      setUsers([]);
    };
  }, []);

  return (
    <ul>
      {Object.keys(users).map((key, user) => {
        const { name, email } = users[user];
        return (
          <div key={key}>
            <li>
              {name} - {email}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Home;
