import ProductsModel from "../../model/products.js";
import UserModel from "../../model/user.js";

export const addReview = async (req, res) => {
  const { review, rating } = req.body;
  const { productId } = req.params;

  if (!review) {
    return res.status(400).json({ message: "You should add review text" });
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
      review,
      rating,
      name: user.name,
    };

    product.reviews.push(newReview);
    await product.save();

    res.status(200).json({ success: true, message: "Review added", product });
  } catch (error) {
    console.error("SAVE ERROR:", error);
    res.status(500).json({ success: false, message: "Review is not added" });
  }
};
