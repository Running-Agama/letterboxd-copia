import { Router } from 'express';
import MovieController from '../controllers/movieController';

const router = Router();
const movieController = new MovieController();

export const setMovieRoutes = (app: any) => {
    app.use('/api/movies', router);

    router.get('/search/:query', async (req, res) => {
        const { query } = req.params;
        if (query.startsWith('tt')) {
            await movieController.getMovieById(req, res);
        } else {
            await movieController.getMovie(req, res);
        }
    });
};