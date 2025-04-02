import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/usercontroller.js';

const userrouter=express.Router();
userrouter.post('/register',createUser)
userrouter.get('/users',getAllUsers)
userrouter.get('/users/:id',getUserById)
userrouter.put('/users/:id',updateUser)
userrouter.delete('/users/:id',deleteUser)
export default userrouter;
