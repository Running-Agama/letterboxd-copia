import listService from '../services/listService';

class ListController {


    getList = async (req:any, res: any)=>{
        try{
            const list = await listService.getList(Number(req.params.listId));
            res.status(200).json(list);
        } catch (error) {
            console.error('Error fetching lists:', error);
            res.status(500).json({ message: "Error fetching lists", error})
        }
        
    }
    getListsByUser = async (req: any, res: any) => {
        try {
            const lists = await listService.getListsByUser(Number(req.params.userId));
            res.status(200).json(lists);
        } catch (error) {
            console.error('Error fetching lists:', error);
            res.status(500).json({ message: 'Error fetching lists', error });
        }
    };

    addMovieToList = async (req: any, res: any) => {
        try {
            const { listId, movieId } = req.body;
            const listItem = await listService.addMovieToList(listId, movieId);
            res.status(201).json(listItem);
        } catch (error) {
            console.error('Error adding movie to list:', error);
            res.status(500).json({ message: 'Error adding movie to list', error });
        }
    };

    deleteList = async (req: any, res: any) => {
        try {
            const deleted = await listService.deleteList(Number(req.params.id));
            if (!deleted) {
                res.status(404).json({ message: 'List not found' });
                return;
            }
            res.status(200).json({ message: 'List deleted successfully' });
        } catch (error) {
            console.error('Error deleting list:', error);
            res.status(500).json({ message: 'Error deleting list', error });
        }
    };

    createList = async (req: any, res: any) => {
        try {
            const list = await listService.createList(req.body);
            res.status(201).json(list);
        } catch (error) {
            console.error('Error creating list:', error);
            res.status(500).json({ message: 'Error creating list', error });
        }
    };
}

export default ListController;