import { Request, Response } from "express";
import { orderService } from "./order.service";
import { OrderSchema } from "./order.zod.validation";

//create orders
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const productValidation = OrderSchema.safeParse(orderData);

    if (productValidation.success) {
      const result = await orderService.createOrderService(orderData);
      res.status(200).json(result);
    } else {
      //send error to client site
      res.status(500).json({
        success: false,
        message: "Order Not created. Zod validation error",
        data: productValidation,
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Order not created try again!",
      error: e,
    });
  }
};

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const queryEmail = req.query.email as string;

    if (queryEmail) {
      const result = await orderService.getCustomerOrders(queryEmail);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      const result = await orderService.getAllOrdersService();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Order not fetched try again!",
      error: e,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
};
