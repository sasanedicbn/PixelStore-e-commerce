import { useGetUserFavouritesQuery } from "../../../../store/slices/apiSlice";

const FavouritesDrop = () => {
  const { data: favourites, isLoading } = useGetUserFavouritesQuery();
  if (isLoading) return <p>Loading...</p>;
  if (!favourites) return <p>You should log in to see your favourites</p>;

  console.log(favourites, "favourites od usera");
  return (
    <div>
      <ul>
        {/* {.map(() => {
            <li></li>
        })} */}
      </ul>
    </div>
  );
};

export default FavouritesDrop;
