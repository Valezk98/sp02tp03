//IRepository establece una interfaz que define metodos CRUD estandar y sirve como contrato para asegurar que cualquier clase que implemente la interfaz cuente con estos metodos

class IRepository {
    obtenerPorId(id){
        throw new Error("Método 'obtenerPorId()' no implementado");
    }
    obtenerTodos(){
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    obtenerPorAtributo(atributo, valor) {
        throw new Error("Método 'obtenerPorAtributo' no implementado");
    }
    obtenerMayoresDe30(){
        throw new Error("Método 'obtenerMayoresDe30()' no implementado")
    }
}

export default IRepository;

/*
    La interfaz "IRepository.mjs" proporciona una abstacci´n de los metodos CRUD que deben ser implementados por cualquier repositorio. Esto asegura que todas las clases de repositorio mantengan consistencia en sus metodos, mejorando la mantenibilidad y facilitando los cambios futuros en la implementacion
*/