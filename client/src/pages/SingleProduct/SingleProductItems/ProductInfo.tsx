import { useState } from "react";
import Button from "../../../UX/Button";

const ProductInfo = ({ product }) => {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    console.log(product, "render product");
    switch (activeTab) {
      case "details":
        return (
          <p className="info-p">
            {product.product.details.description || "No details available."}
          </p>
        );
      case "moreInfo":
        return (
          <p className="info-p">
            {product.product.price || "No additional information available."}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="productinfo">
      <div className="button-group">
        <Button type="info" onClick={() => handleTabClick("details")}>
          Details
        </Button>
        <Button type="info" onClick={() => handleTabClick("moreInfo")}>
          More Information
        </Button>
        <Button type="info" onClick={() => handleTabClick("reviews")}>
          Reviews
        </Button>
      </div>

      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default ProductInfo;
