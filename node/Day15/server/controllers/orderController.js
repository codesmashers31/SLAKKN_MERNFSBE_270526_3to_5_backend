import Order from "../models/order.js";

export const createOrder = async (req, res) => {
    
try {
const { product, price, orderusers } = req.body;
const order = await Order.create({
product,
price,
orderusers
});
res.status(201).json({
message: "Order Created",
order
});
} catch (error) {
res.status(500).json({
message: error.message
});
}
};



export const getOrders = async (req, res) => {
try {
const orders = await Order
.find()
.populate("orderusers", "name");
res.status(200).json(orders);
} catch (error) {
res.status(500).json({
message: error.message
});

}
}