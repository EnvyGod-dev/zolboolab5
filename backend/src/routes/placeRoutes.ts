import { Router } from 'express';
import Place from '../models/place';

const router = Router();

router.get('/places', async (req, res) => {
    const places = await Place.find();
    res.json(places);
});

router.post('/places', async (req, res) => {
    const newPlace = new Place(req.body);
    await newPlace.save();
    res.status(201).json(newPlace);
});

router.patch('/places/:pid', async (req, res) => {
    const updatedPlace = await Place.findByIdAndUpdate(req.params.pid, req.body, { new: true });
    res.json(updatedPlace);
});

router.delete('/places/:pid', async (req, res) => {
    await Place.findByIdAndDelete(req.params.pid);
    res.status(204).send();
});

export default router;
