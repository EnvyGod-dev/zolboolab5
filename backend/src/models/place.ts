import mongoose from 'mongoose';

const PlaceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
});

const Place = mongoose.model('Place', PlaceSchema);
export default Place;
