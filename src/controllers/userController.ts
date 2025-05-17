import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await userService.createUser(req.body);
            if (user instanceof Error) {
                res.status(400).json({ message: user.message });
                return;
            }
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error: String(error) });
        }
    };

    public getUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await userService.getUserById(Number(req.params.id));
            if (user instanceof Error) {
                res.status(400).json({ message: user.message });
                return;
            }
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user', error: String(error) });
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const updated = await userService.updateUser(Number(req.params.id), req.body);
            if (updated instanceof Error) {
                res.status(400).json({ message: updated.message });
                return;
            }
            if (!updated) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error: String(error) });
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const deleted = await userService.deleteUser(Number(req.params.id));
            if (deleted instanceof Error) {
                res.status(400).json({ message: deleted.message });
                return;
            }
            if (!deleted) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error: String(error) });
        }
    };
}

export default UserController;
