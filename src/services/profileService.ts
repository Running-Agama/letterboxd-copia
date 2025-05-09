import prisma from '../database';

class ProfileService {
    public async createProfile(data: any) {
        return await prisma.profile.create({ data });
    }

    public async getProfileById(id: number) {
        return await prisma.profile.findUnique({ where: { id } });
    }

    public async updateProfile(id: number, data: any) {
        return await prisma.profile.update({ where: { id }, data });
    }

    public async deleteProfile(id: number) {
        return await prisma.profile.delete({ where: { id } });
    }
}

export default new ProfileService();
