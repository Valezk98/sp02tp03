import { crearSuperheroe, obtenerSuperheroes, obtenerSuperheroesMayoresDe30, obtenerSuperheroesPorId, obtenerSuperheroesPorAtributo, actualizarSuperheroePorID, borrarSuperheroePorID, borrarSuperheroePorNombre } from "../services/superheroesService.mjs";
import { renderizarListaSuperheroes, renderizarSuperheroes } from "../views/responseView.mjs";


//###################################### Mayores de 30 ####################################################


export async function obtenerMayoresDe30Cotroller(req, res){
    try {
        const superheroesMas30 = await obtenerSuperheroesMayoresDe30()

        if(superheroesMas30.length === 0){
            res.status(404).send('No hay superheroes mayores de 30 en la lista');
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

//###################################### Buscar por ID ####################################################

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


//###################################### Por Atributo #################################################

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
                mensaje: "Error al obtener los datos"
            }
        )
    }

}

//SP 3 TP 1

//###################################### Todos los superheroes ###########################################

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

//###################################### Crear un superheroe ####################################################

export async function crearSuperheroeController(req, res){
    try {
        const nuevoSuperheroe = await crearSuperheroe(req.body);
        const superheroesFormateados = renderizarSuperheroes(nuevoSuperheroe);

        return res.status(201).json(superheroesFormateados);
        
    } catch (error) {
        res.status(500).send({
            mensaje: 'No se pudo crear',
            error: error.message
        })
        
    }
}


//###################################### Actualizar (por ID) #################################################

export async function actualizarSuperheroePorIDController(req, res){
    try {
        const id = req.params.id;
        const superheroeEditado = await actualizarSuperheroePorID(id, req.body, {new: true});

        if(!superheroeEditado){
            res.status(404).json({
                mensaje: 'Error, no se encuentra el superheroe con esa id',
                error: error.message
            })
        }

        res.status(200).json(superheroeEditado)

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error interno del servidor'
        })
    }
} 


//###################################### Borrar por ID #################################################

export async function borrarSuperheroePorIDController(req, res){
    try {
        const id = req.params.id;

        const superheroeBorrado = await borrarSuperheroePorID(id, req.body)

        if(!superheroeBorrado){
            return res.status(404).json({
                mensaje: 'No se encontró el superheroe a borrar',
                error: error.message
            })}
            
        res.status(200).json(superheroeBorrado)
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error interno del servidor'
        })
    }
}

//###################################### Borrar por Nombre #################################################

export async function borrarSuperheroePorNombreController(req, res){
    try {
        const { nombreSuperheroe } = req.params;

        const superheroeBorrado = await borrarSuperheroePorNombre(nombreSuperheroe)

        if(!superheroeBorrado){
            return res.status(404).json({
                mensaje: 'Superheroe a borrar no encontrado'
            })
        }

        res.status(200).json(superheroeBorrado)
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error interno del servidor'
        });
    }
}

/*
    La capa de los controladores gestiona las solicitudes del cliente y llama a la capa de SERVICIOS para hacer las operaciones, asegura la organización del codigo al usar funciones especificas para cada endpoint
*/