import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { createProxyMiddleware } from 'http-proxy-middleware';


dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;
app.use(morgan('combined'));
// Routes
app.use('/films', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
}));
app.use('/projections', createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true
}));
app.use('/reservations', createProxyMiddleware({
    target: 'http://localhost:8000',
    changeOrigin: true
}));

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});