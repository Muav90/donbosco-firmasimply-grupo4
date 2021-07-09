import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';


getListadoTareas();
async function getListadoTareas() {
    let listadoTareas = await Tarea.getListadoTareas();
    console.log(listadoTareas);
    const list = document.getElementById('tarea-list')
    //let finales = listado.reverse();
    let ultimas = listadoTareas.slice(listadoTareas.length -6)
    console.log(ultimas)
    for (let i = 0; i < ultimas.length; i++) {
        
            const row = document.createElement('tr')

            row.innerHTML = `
                            <td>${ultimas[i].id}</td>
                            <td>${ultimas[i].titulo}</td>
                            <td>${ultimas[i].categoria_id}</td>
                            <td>${ultimas[i].descripcion}</td>
                            <td>${ultimas[i].created_at}</td>
                            <td>${ultimas[i].estado}</td>
                            <td><button id="${ultimas[i].id}" class="borrar">Borrar</button></td>
                            `

            list.appendChild(row)
        
    }
}
 //console.log(await Tarea.getListadoTareas())
// Consultar el listado de píldoras

Tarea.getListadoTareas();
var form = document.getElementById('form');
async function crearTareas(e) {
    e.preventDefault();
    var crearTarea = {
        titulo: document.getElementById('fname').value,
        descripcion: document.getElementById('lname').value,
        estado: 0, // 0 pendiente, 1 presentada
        user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
        categoria_id: 1,
    }
    await Tarea.crearTarea(crearTarea);
    window.location.reload();
};

form.addEventListener('submit', crearTareas)

// // Funcionalidad borrar píldora


document.getElementById('tarea-list').addEventListener('click', borrarTarea)
async function borrarTarea(e) {
    if(e.target.classList == 'borrar') {
        let idTarea = e.target.id;
        await Tarea.borrarTarea(idTarea);
        window.location.reload();
    }
	
}
Tarea.marcarTarea

// Funcionalidad de borrar una tarea

// Funcionalidad de marcar una tarea como completada o pendiente

// Funcionalidad de cargar las categorias en el formulario de crear la tarea
