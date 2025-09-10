import { useNavigate } from "react-router-dom";
import { useGetUserFavouritesQuery } from "../../../../store/slices/apiSlice";
import DropDownUserData from "../../../../UX/DropDownUserData";

const FavouritesDrop = () => {
  const { data, isLoading } = useGetUserFavouritesQuery();
  const navigate = useNavigate();

  const getSingleProductHandler = (id) => {
    navigate(`/products/${id}`);
  };

  const favourites = data?.favourites || [];
  console.log(favourites, "IZ FAVOURITES DROP");

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>You should log in to see your favourites</p>;
  if (favourites.length === 0)
    return <p>You don't have any favourites products yet.</p>;

  return (
    <div>
      <ul>
        {favourites.map((favourite) => (
          <DropDownUserData
            item={favourite}
            type="favourites"
            getSingleProductHandler={getSingleProductHandler}
            updateCartItemHandler={"null"}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavouritesDrop;
