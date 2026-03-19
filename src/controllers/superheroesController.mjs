import { obtenerSuperheroes, obtenerSuperheroesMayoresDe30, obtenerSuperheroesPorId, obtenerSuperheroesPorAtributo } from "../services/superheroesService.mjs";
import { renderizarListaSuperheroes, renderizarSuperheroes } from "../views/responseView.mjs";


//###################################### TODOS LOS SUPERHEROES ###########################################

export async function obtenerSuperHeroesController(req,res){
    try {
        const superheroes = await obtenerSuperheroes()

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);

    } catch (error) {
        res.status(500).send(
            {
                mensaje: 'Error al obtener los datos', 
                error: error.message
            })
    }
}


//###################################### MAYORES DE 30 ####################################################


export async function obtenerMayoresDe30Cotroller(req, res){
    try {
        const superheroesMas30 = await obtenerSuperheroesMayoresDe30()

        if(superheroesMas30.length === 0){
            res.status(404).send('No hay superheroes mayores de 30 en la lista')
            return;
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroesMas30)

        res.status(200).json(superheroesFormateados)

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener los datos', 
            error: error.message
        })
    }
}

//###################################### POR ID ####################################################

export async function obtenerPorIdController(req,res){
    try {
       const {id} = req.params;
       const superheroeID = await obtenerSuperheroesPorId(id);

       if(!superheroeID){
        res.status(404).send('No hay superheroes con ese ID');
        return;
       }

       const superheroesFormateados = renderizarSuperheroes(superheroeID)
       res.status(200).json(superheroesFormateados);

    } catch (error) {
        res.status(500).send(
            {
                mensaje: "Error al obtener los datos",
                error: error.message
            }
        )
    }
}

//###################################### POR ATRIBUTO #################################################

export async function obtenerPorAtributoController(req, res){
    try {
        const {atributo, valor} = req.params;

        const superheroesPorAtributo = await obtenerSuperheroesPorAtributo(atributo, valor)

        if(superheroesPorAtributo.length === 0){
            res.status(404).send('No se han encontrado superheroes con ese atributo')
            return;
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroesPorAtributo);
        res.status(200).json(superheroesFormateados)

    } catch (error) {
        res.status(500).send(
            {
                mensaje: "Error al obtener lso datos",
                error: error.message
            }
        )
    }

}


/*
    La capa de los controladores gestiona las solicitudes del cliente y llama a la capa de SERVICIOS para hacer las operaciones, asegura la organización del codigo al usar funciones especificas para cada endpoint
*/