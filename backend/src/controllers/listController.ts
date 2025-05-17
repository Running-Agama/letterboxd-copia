import listService from '../services/listService';

class ListController {


    getList = async (req:any, res: any)=>{
        try{
            const list = await listService.getList(Number(req.params.listId));
            if (list instanceof Error) {
                res.status(400).json({ message: list.message });
                return;
            }
            res.status(200).json(list);
        } catch (error) {
            res.status(400).json({ message: String(error) });
        }
        
    }
    getListsByUser = async (req: any, res: any) => {
        try {
            const lists = await listService.getListsByUser(Number(req.params.userId));
            if (lists instanceof Error) {
                res.status(400).json({ message: lists.message });
                return;
            }
            res.status(200).json(lists);
        } catch (error) {
            res.status(500).json({ message: String(error) });
        }
    };

    addMovieToList = async (req: any, res: any) => {
        try {
            const { listId, movieId } = req.body;
            const listItem = await listService.addMovieToList(listId, movieId);
            if (listItem instanceof Error) {
                res.status(400).json({ message: listItem.message });
                return;
            }
            res.status(201).json(listItem);
        } catch (error) {
            res.status(500).json({ message: 'Error adding movie to list', error: String(error) });
        }
    };

    deleteList = async (req: any, res: any) => {
        try {
            const deleted = await listService.deleteList(Number(req.params.id));
            if (deleted instanceof Error) {
                res.status(400).json({ message: deleted.message });
                return;
            }
            if (!deleted) {
                res.status(404).json({ message: 'List not found' });
                return;
            }
            res.status(200).json({ message: 'List deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting list', error: String(error) });
        }
    };

    createList = async (req: any, res: any) => {
        try {
            const list = await listService.createList(req.body);
            if (list instanceof Error) {
                res.status(400).json({ message: list.message });
                return;
            }
            res.status(201).json(list);
        } catch (error) {
            res.status(500).json({ message: 'Error creating list', error: String(error) });
        }
    };
}

export default ListController;