import { crearSuperheroeController, obtenerMayoresDe30Cotroller, obtenerPorIdController, obtenerSuperHeroesController, obtenerPorAtributoController, actualizarSuperheroePorIDController, borrarSuperheroePorIDController, borrarSuperheroePorNombreController } from "../controllers/superheroesController.mjs";

import express from "express";

const router = express.Router();

//Rutas



router.get('/superheroes/mayoresDe30', obtenerMayoresDe30Cotroller);

router.get('/superheroes/:atributo/:valor', obtenerPorAtributoController);

router.get('/superheroes/:id', obtenerPorIdController);

//SP 3 TP 1

router.get('/superheroes', obtenerSuperHeroesController);

router.post('/superheroes/crear', crearSuperheroeController);

router.put('/superheroes/actualizarPorId/:id', actualizarSuperheroePorIDController);

router.delete('/superheroes/borrarsuperheroeporid/:id', borrarSuperheroePorIDController);

router.delete('/superheroes/borrarsuperheroepornombre/:nombreSuperheroe', borrarSuperheroePorNombreController)
export default router;