import express from "express";
import bcrypt from "bcrypt"
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import analyticsRouter from './routes/analytics.js'
dotenv.config();


const port = process.env.PORT || 3001
const app = express();

app.use(express.json())
app.use(cors("http://localhost:3000"))
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/tasks', taskRouter)
app.use('/api/dashboard',analyticsRouter)

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch(err => {
    console.log("Error while connecting to database: " + err.message);
  });