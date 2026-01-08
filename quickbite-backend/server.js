import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/orders', orderRoutes)

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err))

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
