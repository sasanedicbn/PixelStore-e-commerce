import { useGetUserFavouritesQuery } from "../../../../store/slices/apiSlice";

const FavouritesDrop = () => {
  const { data, isLoading } = useGetUserFavouritesQuery();
  const favourites = data?.favourites || [];

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>You should log in to see your favourites</p>;
  if (favourites.le
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
