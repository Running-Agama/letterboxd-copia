import {Router }from 'express';

const router = Router();

export const setProfileRoutes = (app:any)=>{
    app.use("/api/profile", router);

    router.get("/", (req, res) => {
        res.status(200).json({});
    });

    router.post("/", (req, res) => {
        res.status(200).json({});
    });

}