import { Request, Response } from 'express';
import MovieService from '../services/movieService';


const movieService = new MovieService();

class MovieController {
    
    public getMovie = async (req: Request, res: Response): Promise <void> =>{
        const {movieTitle} = req.params;
        console.log(movieTitle);
        try{
            const movies = await movieService.searchMovies(movieTitle);

            res.status(200).json(movies);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching movies', error });
        }
    }

}

export default MovieController;