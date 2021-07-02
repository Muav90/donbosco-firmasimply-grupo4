import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';

// Funcionalidad mostrar listado de tareas
getListadoTarea();
async function getListadoTarea() {
    let listadoTareas = await Tarea.getListadoTareas();
    console.log(listadoTareas);
    const list = document.getElementById('lista')
    
    for (let i = 0; i < listadoTareas.length; i++) {
        if (i > 0 ) {
            const row = document.createElement('tr')

            row.innerHTML = `
            
                            <td>${listadoTareas[i].titulo}</td>
                            <td>${listadoTareas[i].categoria_id}</td>
                            <td>${listadoTareas[i].descripcion}</td>
                            <td>${listadoTareas[i].created_at}</td>
                            <td>${listadoTareas[i].estado}</td>
                            <td><button onclick="borrarTarea()">Borrar</button></td>
                            `

            list.appendChild(row)
        }
    }
}

// Funcionalidad crear una tarea

// Funcionalidad de borrar una tarea

// Funcionalidad de marcar una tarea como completada o pendiente

// Funcionalidad de cargar las categorias en el formulario de crear la tarea
