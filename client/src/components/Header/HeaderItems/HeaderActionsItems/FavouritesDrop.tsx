import { useSelector } from "react-redux";
import { useGetUserFavouritesMutation } from "../../../../store/slices/apiSlice";
import { RootState } from "@reduxjs/toolkit/query";

const FavouritesDrop = () => {
  const currentUser = useSelector(
    (state: RootState) => state.products.currentUser
  );

  console.log(currentUser, "userId iz FavouritesDrop-a");
  const { data, isLoading } = useGetUserFavouritesMutation(currentUser?._id);
  const favourites = data?.favourites || [];

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>You should log in to see your favourites</p>;
  if (favourites.length === 0)
    return <p>You don't have any favourites products yet.</p>;

  return (
    <div>
      <ul>
        {favourites.map((fav) => (
          <li key={fav._id}>{fav.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesDrop;
