import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  subtotal: Number,
  tax: Number,
  deliveryFee: Number,
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Order = mongoose.model('Order', orderSchema)
export default Order
