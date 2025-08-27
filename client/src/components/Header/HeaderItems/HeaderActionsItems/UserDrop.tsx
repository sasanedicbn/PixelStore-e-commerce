import {
  useGetUserQuery,
  useLogoutUserMutation,
} from "../../../../store/slices/apiSlice";
import Button from "../../../../UX/Button";

const UserDrop = () => {
  const { data: user, isLoading } = useGetUserQuery();
  const [logoutUser, { isLoading: isLoggingOut }] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      const result = await logoutUser().unwrap();
      console.log(result, "iz UserDrop-a nakon logout-a");
      // window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  console.log(user, "iz UserDrop-a");
  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <p>
        Hi, <span>{user.name}</span> <br />
        Welcome to PixelStudio.
      </p>
      <Button type="logout" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default UserDrop;
