import { Request, Response } from 'express';
import profileService from '../services/profileService';

class ProfileController {
    public createProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const profile = await profileService.createProfile(req.body);
            res.status(201).json(profile);
        } catch (error) {
            res.status(500).json({ message: 'Error creating profile', error });
        }
    };

    public getProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const profile = await profileService.getProfileById(Number(req.params.id));
            if (!profile) {
                res.status(404).json({ message: 'Profile not found' });
                return;
            }
            res.status(200).json(profile);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching profile', error });
        }
    };

    public updateProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const updated = await profileService.updateProfile(Number(req.params.id), req.body);
            if (!updated) {
                res.status(404).json({ message: 'Profile not found' });
                return;
            }
            res.status(200).json({ message: 'Profile updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating profile', error });
        }
    };

    public deleteProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const deleted = await profileService.deleteProfile(Number(req.params.id));
            if (!deleted) {
                res.status(404).json({ message: 'Profile not found' });
                return;
            }
            res.status(200).json({ message: 'Profile deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting profile', error });
        }
    };
}

export default ProfileController;
