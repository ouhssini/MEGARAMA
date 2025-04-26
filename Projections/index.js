import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connect, consumeFilms } from './src/lib/rabbit.js';
import { index, weeklyPlanning } from './src/controllers/ProjectController.js';















dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;




app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/films', (req, res) => {
    index(req, res);
});
app.get('/planing', (req, res) => {
    weeklyPlanning(req, res);
});


consumeFilms();






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
