import { Router } from "express";

const rutaCanal = Router();

rutaCanal.get("/", (req, res) => {
    res.json({"applicaction": "Youtube"})
});

rutaCanal.get("/canal", (req, res) => {
    res.json({
        "msj" : "Hola mundo",
        "user" : "Angie",
        "application" : "Youtube",
        "type" : "Backend"
    })
});

export default rutaCanal;