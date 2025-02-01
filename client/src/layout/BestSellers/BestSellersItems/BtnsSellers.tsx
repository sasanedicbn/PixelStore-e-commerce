import { useSearchParams } from "react-router-dom";
import Button from "../../../UX/Button";

const BtnsSellers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (e) => {
    const value = e.target.value;
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

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
