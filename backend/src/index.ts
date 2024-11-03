import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import placeRoutes from './routes/placeRoutes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', placeRoutes);

const PORT = process.env.PORT || 5000;

// OOroo mongo db deer db neegeed url tawih
mongoose.connect('mongodb://localhost:27017/places')
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
