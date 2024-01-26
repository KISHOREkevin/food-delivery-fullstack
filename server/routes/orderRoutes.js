import express from "express";
import { changeOrderStatus, createOrder, deleteOrder, getAllOrders, getOrderByCartId, getOrdersByHotelId, getOrdersByStatus, getOrdersByUserId } from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.get("/",getAllOrders);
orderRoute.get("/:hotelid/orders-by-status",getOrdersByStatus);
orderRoute.get("/:cartid/orders-by-cart",getOrderByCartId);
orderRoute.get("/:userid/orders-by-user",getOrdersByUserId);
orderRoute.get("/:hotelid/orders-by-hotel",getOrdersByHotelId);
orderRoute.post("/:cartid/create-order",createOrder);
orderRoute.patch("/:orderid/status-change",changeOrderStatus);
orderRoute.delete("/:orderid/delete-order",deleteOrder);
export default orderRoute;