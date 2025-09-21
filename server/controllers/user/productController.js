export const addReview = async (req, res) => {
  const { productId, comment } = req.body;
  console.log("productId", productId);
  console.log("comment", comment);
  if (!comment) {
    return res.status(400).json({ message: "You should add comment" });
  }
  if (!productId) {
    return res.status(400).json({ message: "ProductId is required" });
  }
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "You should be logged in" });
    }
    const product = await ProductsModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const newReview = {
      review: comment,
      user: user._id,
      name: user.name,
    };
    product.reviews.push(newReview);
    await product.save();
    res.status(200).json({ success: true, message: "Review added", product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Review is not added" });
  }
};
