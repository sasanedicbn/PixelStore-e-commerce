import { useSearchParams } from "react-router-dom";
import Button from "../../../UX/Button";

const BtnsSellers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (e) => {
    const value = e.target.value;
    searchParams.set("category", value);
    setSearchParams(searchParams);
    console.log(searchParams, "searchaprams");
  };
  // const bestSellersProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8000/best-sellers-products"
  //     );
  //     const bestproducts = response.json();
  //   } catch (error) {
  //     console.log("Error! You can not fetch best sellers products");
  //   }
  // };
  return (
    <div className="btns-sellers">
      <Button
        type="sellersActions"
        value={"All"}
        onClick={(e) => handleClick(e)}
      >
        View All
      </Button>
      <Button
        type="sellersActions"
        value={"laptops"}
        onClick={(e) => handleClick(e)}
      >
        Computers
      </Button>
      <Button
        type="sellersActions"
        value={"television"}
        onClick={(e) => handleClick(e)}
      >
        TVs
      </Button>
      <Button
        type="sellersActions"
        value={"cellphones"}
        onClick={(e) => handleClick(e)}
      >
        Cellphones
      </Button>
      <Button
        type="sellersActions"
        value={"appliances"}
        onClick={(e) => handleClick(e)}
      >
        Appliances
      </Button>
      <Button
        type="sellersActions"
        value={"cameras"}
        onClick={(e) => handleClick(e)}
      >
        Cameras
      </Button>
    </div>
  );
};
export default BtnsSellers;
