import { obtenerMayoresDe30Cotroller, obtenerPorIdController, obtenerSuperHeroesController, obtenerPorAtributoController } from "../controllers/superheroesController.mjs";

import express from "express";

const router = express.Router();

//Rutas

router.get('/superheroes', obtenerSuperHeroesController);

router.get('/superheroes/mayoresDe30', obtenerMayoresDe30Cotroller);

router.get('/superheroes/:atributo/:valor', obtenerPorAtributoController);

router.get('/superheroes/:id', obtenerPorIdController);

export default router;