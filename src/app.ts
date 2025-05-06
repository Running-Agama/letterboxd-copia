import express from 'express';
import { setMovieRoutes } from './routes/movieRoutes';
import 'dotenv/config';
import cors from 'cors';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

setMovieRoutes(app);

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});