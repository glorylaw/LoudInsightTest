import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import categoryRoutes from './routes/categoryRoutes';

// Create an Express app
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// MongoDB connection (replace with your MongoDB URI)
mongoose
  .connect('mongodb://localhost:27017/wizardLibrary') 
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Use the category routes
app.use('/api', categoryRoutes);

// Basic route to check if the server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Wizard Library API is running!');
});

// Start the server
app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
