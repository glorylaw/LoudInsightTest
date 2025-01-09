import express from 'express';
import urlRoutes from './routes/urlRoute';

const app = express();
app.use(express.json());
app.use('/', urlRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));