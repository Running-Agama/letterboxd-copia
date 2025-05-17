import 'dotenv/config';
import axios from 'axios';
import { Movie } from '../models/movieModel';

export default class MovieService {
    private apiKey;
    private baseUrl: string;

    constructor() {
        this.apiKey = process.env.OMDB_API_KEY;
        this.baseUrl = 'https://www.omdbapi.com/';
    }

    public async searchMovies(title: string): Promise<Movie[] | Error> {
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    apikey: this.apiKey,
                    s: title,
                    type: 'movie',
                }
            });
            const data = response.data.Search?.filter((movie: Movie) => movie.Poster !== 'N/A') || [];
            return data;
        } catch (error) {
            return new Error('Error fetching movies: ' + String(error));
        }
    }

    public async getMovieById(imdbID: string): Promise<Movie | Error> {
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    apikey: this.apiKey,
                    i: imdbID,
                }
            });
            return response.data;
        } catch (error) {
            return new Error('Error fetching movie by ID: ' + String(error));
        }
    }
}
