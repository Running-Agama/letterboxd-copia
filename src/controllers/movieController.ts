import { Request, Response } from 'express';
import MovieService from '../services/movieService';


const movieService = new MovieService();

class MovieController {
    
    public getMovie = async (req: Request, res: Response): Promise <void> =>{
        const { query } = req.params;
        try{
            const movies = await movieService.searchMovies(query);

            res.status(200).json(movies);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching movies', error });
        }
    }

    public getMovieById = async (req: Request, res: Response): Promise<void> => {
        const { query } = req.params;
        try {
            const movie = await movieService.getMovieById(query);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching movie by ID', error });
        }
    };

}

export default MovieController;