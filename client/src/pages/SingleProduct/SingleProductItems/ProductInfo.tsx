import Button from "../../../UX/Button";

const ProductInfo = ({ product }) => {
  const renderInfo = () => {
    switch (activeTab) {
      case "details":
        return <p>{product.product.description || "No details available"}</p>;
      case "moreInfo":
        return <p>{product.product.price || "No available more info."}</p>;
      case "reviews":
        return <p>REVI</p>;
    }
  };

  return (
    <div className="productinfo">
      <Button type="info">Details</Button>
      <Button type="info">More Information</Button>
      <Button type="info">Reviews</Button>
    </div>
  );
};
export default ProductInfo;
