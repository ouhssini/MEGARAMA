import { index, show, store } from "../controllers/FilmController.js";




import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    index(req, res);
});


router.get('/:id', (req, res) => {
    show(req, res);
});



router.post('/', (req, res) => {
    store(req, res);
});



export default router;