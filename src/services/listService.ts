import prisma from '../database';

class ListService {
    public async getListsByUser(userId: number) {
        return await prisma.list.findMany({
            where: { userId },
            include: { items: true },
        });
    }

    public async addMovieToList(listId: number, movieId: string) {
        return await prisma.listItem.create({
            data: { listId, movieId },
        });
    }

    public async deleteList(listId: number) {
        await prisma.listItem.deleteMany({ where: { listId } });
        return await prisma.list.delete({ where: { id: listId } });
    }

    public async createList(data: any) {
        return await prisma.list.create({ data });
    }
}

export default new ListService();
