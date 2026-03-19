import SuperHero from "../models/SuperHeroModel.mjs";
import IRepository from "./IRepository.mjs";


//SuperHeroRepository hereda todas las propiedades y metodos de IRepository con "extends"
class SuperHeroRepository extends IRepository{
    async obtenerPorId(id){
        return await SuperHero.findById(id)
    };

    async obtenerTodos(){
        return await SuperHero.find({});
    };

    async buscarPorAtributo(atributo, valor){
        return await SuperHero.find(
            {
                [atributo]: valor
            }
        )
    }

    async obtenerMayoresDe30(){
        return SuperHero.find({
            edad: {$gt: 30},
            // planetaOrigen: "Tierra",
            //$expr: {$gt: [{$size : "$poderes"}, 3]} // Por las dudas👹
        });
    }
}

export default new SuperHeroRepository();

/*
    En este archivo se implementan los metodos definidos en la interfaz IRepository, interactuando directamente con MongoDB atravez de mongoos para realizar operaciones con los datos

    // centralizar acá las operaciones garantiza la organización y garantiza que el acceso a los datos se logre de manera organizada y uniforme

*/