const ProductDetails = ({ product }) => {
  console.log(product, "product deta");
  return (
    <div>
      <h2>{product.product.title}</h2>
      <p>${product.product.price}</p>
      <p>{product.product.available}</p>
      <p>{product.product.description}</p>
    </div>
  );
};
export default ProductDetails;
