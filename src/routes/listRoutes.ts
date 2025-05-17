import { Router } from "express";
import ListController from "../controllers/listController";

const router = Router();
const listController = new ListController();

export const setListRoutes = (app: any) => {
  app.use("/api/lists", router);


  router.get("/:listId", listController.getList);
  router.get("/user/:userId", listController.getListsByUser);
  router.post("/add-movie", listController.addMovieToList);
  router.delete("/:id", listController.deleteList);
  router.post("/", listController.createList);
};
