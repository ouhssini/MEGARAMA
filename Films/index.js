import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import filmsRouter from './src/routes/films.js';





const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3000;


app.use('/', filmsRouter);














app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
})
