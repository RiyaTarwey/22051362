import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userrouter from './routes/userroute.js';


const app=express();
await connectDB();
app.use(express.json());
const PORT=process.env.PORT || 3000;
app.use('/api/users',userrouter)
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});

