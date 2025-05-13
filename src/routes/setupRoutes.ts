import { setUserRoutes } from './profileRoutes';
import { setListRoutes } from './listRoutes';
import { setMovieRoutes } from './movieRoutes';

export const setupRoutes = (app: any) => {
    setUserRoutes(app);
    setListRoutes(app);
    setMovieRoutes(app);
};
