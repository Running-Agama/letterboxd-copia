import prisma from '../database';

class ListService {


    async getList(listId: number){
        return await prisma.list.findFirst({
            where: {id: listId},
            include: {items: true}
        })
    }

    async getListsByUser(userId: number) {
        return await prisma.list.findMany({
            where: { userId },
            include: { items: true },
        });
    }

    async addMovieToList(listId: number, movieId: string) {
        return await prisma.listItem.create({
            data: { listId, movieId },
        });
    }

    async deleteList(listId: number) {
        await prisma.listItem.deleteMany({ where: { listId } });
        return await prisma.list.delete({ where: { id: listId } });
    }

    async createList(data: any) {
        return await prisma.list.create({ data });
    }
}

export default new ListService();
