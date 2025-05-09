import { Router } from 'express';
import ProfileController from '../controllers/profileController';

const router = Router();
const profileController = new ProfileController();

export const setProfileRoutes = (app: any) => {
    app.use('/api/profile', router);

    router.post('/', profileController.createProfile);
    router.get('/:id', profileController.getProfile);
    router.put('/:id', profileController.updateProfile);
    router.delete('/:id', profileController.deleteProfile);
};