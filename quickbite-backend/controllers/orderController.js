import Order from '../models/order.js'

// Place Order
export const placeOrder = async (req, res) => {
  try {
    const { items, subtotal, tax, deliveryFee, total } = req.body

    const newOrder = new Order({
      items,
      subtotal,
      tax,
      deliveryFee,
      total
    })

    const savedOrder = await newOrder.save()
    res.status(201).json(savedOrder)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

// Get all Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}
