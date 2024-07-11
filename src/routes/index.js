import { Router } from "express";
import rutaCanal from "./rutacanal.routes.js";

const canal = Router();

canal.use("/", rutaCanal)

export default canal;