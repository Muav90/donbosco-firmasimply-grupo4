import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';

// Funcionalidad mostrar listado de tareas
<<<<<<< HEAD
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
// Consultar el listado de píldoras
Pildora.getListadoTarea();
// Funcionalidad crear píldora

var form = document.getElementById('form');
async function crearTarea(e) {
    e.preventDefault();
    var crearTarea = {
        nombre: document.getElementById('fname').value,
        descripcion: document.getElementById('lname').value,
        fecha_presentacion: document.getElementById('date').value,
        estado: 0, // 0 pendiente, 1 presentada
        user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
    }
    await Pildora.crearPildora(crearPildora);
    window.location.reload();
};

form.addEventListener('submit', crearPildoras)
=======
>>>>>>> cc5517dda264aac0a98f5b9b93e8e313dd6d2b9f

// Funcionalidad crear una tarea

// Funcionalidad de borrar una tarea

// Funcionalidad de marcar una tarea como completada o pendiente

// Funcionalidad de cargar las categorias en el formulario de crear la tarea
