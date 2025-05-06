import axios from "axios";
import { MovieListItem } from "../models/movieModel";
export default class ListService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'localhost:3000/api/lists';
    }

    public async postList(list: MovieListItem): Promise<any> { 
        try{
            //logica do banco de dados 
        }
        catch (error) {
            console.error('Error posting list:', error);
            return null;
        }
    }
}
