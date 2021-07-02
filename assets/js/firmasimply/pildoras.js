import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

getListadoPildoras();
async function getListadoPildoras() {
    let listadoPildoras = await Pildora.getListadoPildoras();
    console.log(listadoPildoras);
    const list = document.getElementById('pildora-list')
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

function borrarPildora() {
    console.log(1);
}

// function  deleteBook(){
//     
//    



// Funcionalidad marcar una píldora como presentada o pendiente
//