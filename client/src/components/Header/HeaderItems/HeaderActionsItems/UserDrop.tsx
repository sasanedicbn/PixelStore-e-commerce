import { useGetUserQuery } from "../../../../store/slices/apiSlice";
import Button from "../../../../UX/Button";

const UserDrop = () => {
  const { data: user, isLoading } = useGetUserQuery();

  console.log(user, "iz UserDrop-a");
  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <p>
        Hi, <span>{user.name}</span> <br />
        Welcome to PixelStudio.
      </p>
      <Button type="logout">Log out</Button>
    </div>
  );
};

export default UserDrop;
