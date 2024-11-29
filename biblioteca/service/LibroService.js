const Libro = require('../models/LibroModels');

class LibroService {
    // Obtener todos los libros
    static async obtenerTodos() {
        try {
            return await Libro.findAll();
        } catch (e) {
            console.log("Error al obtener libros:", e);
            throw new Error('No se pudieron obtener los libros');
        }
    }

    // Crear un libro
    static async crearLibro(datos) {
        try {
            return await Libro.create(datos);
        } catch (e) {
            console.log("Error al crear libro:", e);
            throw new Error('No se pudo crear el libro');
        }
    }

    // Actualizar un libro
    static async actualizarLibro(id, datos) {
        try {
            const libro = await Libro.update(datos, { where: { id } });
            if (libro[0] === 0) throw new Error('Libro no encontrado');
            return 'Libro actualizado correctamente';
        } catch (e) {
            console.log("Error al actualizar libro:", e);
            throw new Error('No se pudo actualizar el libro');
        }
    }

    // Eliminar un libro
    static async eliminarLibro(id) {
        try {
            const resultado = await Libro.destroy({ where: { id } });
            if (resultado === 0) throw new Error('Libro no encontrado');
            return 'Libro eliminado correctamente';
        } catch (e) {
            console.log("Error al eliminar libro:", e);
            throw new Error('No se pudo eliminar el libro');
        }
    }
}

module.exports = LibroService;
