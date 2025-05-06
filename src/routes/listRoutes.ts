import { Router } from "express";

const router = Router();

export const setListRoutes = (app:any) => {
    app.use("/api/lists", router);

    router.post("/", )
}
