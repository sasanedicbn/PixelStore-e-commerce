import { useGetUserFavouritesQuery } from "../../../../store/slices/apiSlice";

const FavouritesDrop = () => {
  const { data, isLoading } = useGetUserFavouritesQuery();

  const favourites = data?.favourites || [];
  console.log(favourites, "IZ FAVOURITES DROP");

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>You should log in to see your favourites</p>;
  if (favourites.length === 0)
    return <p>You don't have any favourites products yet.</p>;

  return (
    <div>
      <ul>
        {favourites.map((fav) => (
          <li key={fav._id}>{fav.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesDrop;
