import { setProfileRoutes } from './profileRoutes';
import { setListRoutes } from './listRoutes';
import { setMovieRoutes } from './movieRoutes';

export const setupRoutes = (app: any) => {
    setProfileRoutes(app);
    setListRoutes(app);
    setMovieRoutes(app);
};
