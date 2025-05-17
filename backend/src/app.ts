import express from 'express';
import { setMovieRoutes } from './routes/movieRoutes';
import { setupRoutes } from './routes/setupRoutes';
import 'dotenv/config';
import cors from 'cors';
import prisma from './database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

setMovieRoutes(app);
setupRoutes(app);

(async () => {
    try {
        await prisma.$connect();
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
})();