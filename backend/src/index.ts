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

const username = 'monkhbatbilguun191@gmail.com';
const password = 'fuckyou';
const dbName = 'places';

const mongoURL = `mongodb://${username}:${password}@localhost:27017/${dbName}`;

mongoose.connect(mongoURL, {
})
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('MongoDB connection error:', err));
