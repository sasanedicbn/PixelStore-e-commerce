import cloudinary from "./cloudinary.js";

const uploadImageToCloudinary = async (imagePath) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "products",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Greška pri upload-u slike:", error);
    return null;
  }
};

export default uploadImageToCloudinary;
