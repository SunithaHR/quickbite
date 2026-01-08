import mongoose from 'mongoose';
import Order from '../models/order.js';
import Cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Enable CORS
const cors = Cors({ methods: ['GET', 'POST', 'OPTIONS'] });
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

// Connect to MongoDB
async function dbConnect() {
  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(process.env.MONGO_URI);
  }
  return global.mongoose;
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  await dbConnect();

  if (req.method === 'POST') {
    const { items, subtotal, tax, deliveryFee, total } = req.body;
    const newOrder = await Order.create({ items, subtotal, tax, deliveryFee, total });
    return res.status(200).json(newOrder);
  }

  if (req.method === 'GET') {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
