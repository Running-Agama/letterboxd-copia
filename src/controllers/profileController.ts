import { Request, Response } from 'express';
import userService from '../services/profileService';

class UserController {
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    };

    public getUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await userService.getUserById(Number(req.params.id));
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const updated = await userService.updateUser(Number(req.params.id), req.body);
            if (!updated) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const deleted = await userService.deleteUser(Number(req.params.id));
            if (!deleted) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    };
}

export default UserController;
