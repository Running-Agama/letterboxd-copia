import { Request, Response } from 'express';
import MovieService from '../services/movieService';


const movieService = new MovieService();

class MovieController {
    
    public getMovie = async (req: Request, res: Response): Promise <void> =>{
        const { query } = req.params;
        try{
            const movies = await movieService.searchMovies(query);
            if (movies instanceof Error) {
                res.status(400).json({ message: movies.message });
                return;
            }
            res.status(200).json(movies);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching movies', error: String(error) });
        }
    }

    public getMovieById = async (req: Request, res: Response): Promise<void> => {
        const { query } = req.params;
        try {
            const movie = await movieService.getMovieById(query);
            if (movie instanceof Error) {
                res.status(400).json({ message: movie.message });
                return;
            }
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching movie by ID', error: String(error) });
        }
    };

}

export default MovieController;