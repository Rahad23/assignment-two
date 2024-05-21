import express from "express";
import { productController } from "./product.controller";

const productRouter = express.Router();

productRouter.post("/", productController.createProductController);
productRouter.get("/", productController.getAllProductData);
productRouter.get("/:productId", productController.getOneProductBuyId);
productRouter.put("/:productId", productController.updateOneProductData);
productRouter.delete("/:productId", productController.deleteOneProduct);



export default productRouter;
