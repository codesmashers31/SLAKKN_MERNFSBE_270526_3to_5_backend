import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
product: {
type: String,
required: true
},
price: {
type: Number,
required: true
},
orderusers: {
type: mongoose.Schema.Types.ObjectId,
ref: "Orderusers",
required: true
}
}, {
timestamps: true
});
const Order = mongoose.model("Ordermain", orderSchema);
export default Order;