import express from 'express'
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoutes from './routes/auth.routes.js'

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors())

app.use('/auth', AuthRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
    connectDB();
})