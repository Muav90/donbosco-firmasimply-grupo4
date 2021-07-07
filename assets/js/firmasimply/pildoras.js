import { listadoCategorias } from './Modules/API/llamadasApi.js';
import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

getListadoPildoras();
async function getListadoPildoras() {
    let listadoPildoras = await Pildora.getListadoPildoras();
    console.log(listadoPildoras);
    const list = document.getElementById('pildora-list')
    // books.forEach((book) => UI.addBookToList(book))
    //let finales = listado.reverse();
    let ultimas = listadoPildoras.slice(listadoPildoras.length -6)
    console.log(ultimas)
    for (let i = 0; i < ultimas.length; i++) {
        
            const row = document.createElement('tr')

            row.innerHTML = `
                            <td>${ultimas[i].id}</td>
                            <td>${ultimas[i].nombre}</td>
                            <td>${ultimas[i].descripcion}</td>
                            <td>${ultimas[i].fecha_presentacion}</td>
                            <td>${ultimas[i].created_at}</td>
                            <td>${ultimas[i].estado}</td>
                            <td><button id="${ultimas[i].id}" class="borrar">Borrar</button></td>
                            `

            list.appendChild(row)
        
    }
}
 //console.log(await Pildora.getListadoPildoras())
// Consultar el listado de píldoras
Pildora.getListadoPildoras();
// Funcionalidad crear píldora

var form = document.getElementById('form');
async function crearPildoras(e) {
    e.preventDefault();
    var crearPildora = {
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

// // Funcionalidad borrar píldora


document.getElementById('pildora-list').addEventListener('click', borrarPildora)
async function borrarPildora(e) {
    if(e.target.classList == 'borrar') {
        let idPildora = e.target.id;
        await Pildora.borrarPildora(idPildora);
        window.location.reload();
    }
	
}


// function  deleteBook(){
//     
//    



// Funcionalidad marcar una píldora como presentada o pendiente
//// Marcar una tarea como completada o pendiente
