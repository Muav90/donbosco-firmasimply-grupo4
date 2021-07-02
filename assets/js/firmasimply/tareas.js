import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';

// Funcionalidad mostrar listado de tareas
getListadoTareas();
async function getListadoTareas() {
    let listadoTareas = await Pildora.getListadoTareas();
    console.log(listadoPildoras);
    const list = document.getElementById('listado')
    // books.forEach((book) => UI.addBookToList(book))
    //let finales = listado.reverse();
    for (let i = 0; i < listadoPildoras.length; i++) {
        if (i > 0 & i == 6) {
            const row = document.createElement('tr')

            row.innerHTML = `
                            <td>${listadoPildoras[i].id}</td>
                            <td>${listadoPildoras[i].nombre}</td>
                            <td>${listadoPildoras[i].descripcion}</td>
                            <td>${listadoPildoras[i].fecha_presentacion}</td>
                            <td>${listadoPildoras[i].created_at}</td>
                            <td>${listadoPildoras[i].estado}</td>
                            <td><button onclick="borrarPildora()">Borrar</button></td>
                            `

            list.appendChild(row)
        }
    }
}
// Funcionalidad crear una tarea

// Funcionalidad de borrar una tarea

// Funcionalidad de marcar una tarea como completada o pendiente

// Funcionalidad de cargar las categorias en el formulario de crear la tarea
