import ProductModel from "../models/Product.js";

export const createProduct = async function (req, res) {
  const product = req.body;
  console.log(product);

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
      data: null,
    });
  }

  try {
    const newProduct = await ProductModel.create({ ...product });
    console.log(newProduct);
    return res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.error("Error in Create product:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", data: null });
  }
};

export const getProducts = async function (req, res) {
  try {
    const allProducts = await ProductModel.find();
    console.log(allProducts);
    return res.status(201).json({ success: true, data: allProducts });
  } catch (err) {
    console.error("Error in Create product:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", data: null });
  }
};

export const deleteProduct = async function (req, res) {
  const id = req.params.id;
  try {
    const deleteItem = await ProductModel.findByIdAndDelete(id);
    console.log(deleteItem);
    if (!deleteItem) {
      return res.status(400).json({
        success: false,
        message: "Cannot find item",
        data: null,
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "deleted", data: deleteItem });
  } catch (err) {
    console.error("Error in Deleting product:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", data: null });
  }
};

export const updateProduct = async function (req, res) {
  const id = req.params.id;
  try {
    const data = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Cannot find item",
        data: null,
      });
    }
    return res.status(200).json({ success: true, message: "updated", data });
  } catch (err) {
    console.error("Error in Deleting product:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", data: null });
  }
};
