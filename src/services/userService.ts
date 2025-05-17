import { get } from 'http';
import prisma from '../database';
import UserValidation from '../validation/userValidation';
class UserService {

    async getUserById(id: number) {
        try {
            return await prisma.user.findUnique({ where: { id } });
        } catch (error) {
            return new Error(String(error));
        }
    }
    public async getUserByEmail(email: string) {
        try {
            return await prisma.user.findUnique({ where: { email } });
        } catch (error) {
            return new Error(String(error));
        }
    }
    
    async createUser(data: any) {
        try {
            await UserValidation.validateUserData(data);
            const user = await this.getUserByEmail(data.email);
            if (user) {
                return new Error('User with this email already exists');
            } else {
                await prisma.user.create({ data });
                return "User created successfully";
            }
        }
        catch (error) {
            return new Error(String(error));
        }
    }

    async updateUser(id: number, data: any) {
        try {
            return await prisma.user.update({ where: { id }, data });
        } catch (error) {
            return new Error(String(error));
        }
    }

    async deleteUser(id: number) {
        try {
            return await prisma.user.delete({ where: { id } });
        } catch (error) {
            return new Error(String(error));
        }
    }
}

export default new UserService();
