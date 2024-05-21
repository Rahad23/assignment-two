import { Product } from "./product.interface";
import { Product_ } from "./product.model";

const createProductService = async (productData: Product) => {
  const result = await Product_.create(productData);
  return result;
};

//----------

const getAllProductService = async () => {
  const result = await Product_.find();
  return result;
};

//----------

const getOneProductService = async (productId: string) => {
  const result = await Product_.findOne({ _id: productId });
  return result;
};

//----------

const updateOneProductService = async (productId: string, data: Product) => {
  const result = await Product_.updateOne(
    { _id: productId },
    { $set: data },
    { new: true }
  );

  const updatedData = result.acknowledged && result.matchedCount ? data : {};

  return updatedData;
};

//-----------

const productDeleteWithIdService = async (id: string) => {
  const result = await Product_.deleteOne({ _id: id });
  const deleteProduct =
    result.acknowledged && result.deletedCount
      ? null
      : "Product not deleted try again!";
  return deleteProduct;
};

//------------

const searchProductWithProductNameService = async (productName: string) => {
  const result = await Product_.find({ name: new RegExp(productName, "i") });
  return result;
};

export const productService = {
  createProductService,
  getAllProductService,
  getOneProductService,
  updateOneProductService,
  productDeleteWithIdService,
  searchProductWithProductNameService,
};
