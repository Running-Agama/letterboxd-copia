import { get } from 'http';
import prisma from '../database';
import UserValidation from '../validation/profileValidation';
class UserService {


    async getUserById(id: number) {
        return await prisma.user.findUnique({ where: { id } });
    }
    public async getUserByEmail(email: string) {
        return await prisma.user.findUnique({ where: { email } });
    }
    async createUser(data: any) {

        try 
        {
            await UserValidation.validateUserData(data);
            const user = await this.getUserByEmail(data.email);

            if (user) {
                throw new Error('User with this email already exists');
            }
            else{
                await prisma.user.create({ data });
                return "User created successfully";
            }
        }
        catch (error) 
        {
            return error;
        }

    }



    async updateUser(id: number, data: any) {
        return await prisma.user.update({ where: { id }, data });
    }

    async deleteUser(id: number) {
        return await prisma.user.delete({ where: { id } });
    }
}

export default new UserService();
