import { useGetUserQuery } from "../../../../store/slices/apiSlice";

const UserDrop = () => {
  const { data: user, isLoading } = useGetUserQuery();

  console.log(user, "iz UserDrop-a");
  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <p>Hello, {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDrop;
