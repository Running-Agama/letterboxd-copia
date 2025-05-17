import prisma from '../database';

class ListService {

    async getList(listId: number){
        try {
            const query = await prisma.list.findFirst({
                where: {id: listId},
                include: {items: true}
            });
            if(query == null){
                return new Error('No list found with the requested ID');
            }
            return query;
        } catch (error) {
            return new Error(String(error));
        }
    }

    async getListsByUser(userId: number) {
        try {
            const query = await prisma.list.findMany({
                where: { userId },
                include: { items: true },
            });
            return query;
        } catch (error) {
            return new Error(String(error));
        }
    }

    async addMovieToList(listId: number, movieId: string) {
        try {
            return await prisma.listItem.create({
                data: { listId, movieId },
            });
        } catch (error) {
            return new Error(String(error));
        }
    }

    async deleteList(listId: number) {
        try {
            await prisma.listItem.deleteMany({ where: { listId } });
            return await prisma.list.delete({ where: { id: listId } });
        } catch (error) {
            return new Error(String(error));
        }
    }

    async createList(data: any) {
        try {
            return await prisma.list.create({ data });
        } catch (error) {
            return new Error(String(error));
        }
    }
}

export default new ListService();
