import { Router } from 'express';
import MovieController from '../controllers/movieController';

const router = Router();
const movieController = new MovieController();

export const setMovieRoutes = (app: any) => {
    console.log('Setting up movie routes');
    app.use('/api/movies', router);

    //router.post('/', movieController.createMovie);
    router.get('/:movieTitle', movieController.getMovie);
    //router.put('/:id', movieController.updateMovie);
};