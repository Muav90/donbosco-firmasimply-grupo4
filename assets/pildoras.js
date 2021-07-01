import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

getListadoPildoras();
async function getListadoPildoras() {
    let listadoPildoras = await Pildora.getListadoPildoras();
    //console.log(listadoPildoras);
    const list = document.getElementById('pildora-list')
    // books.forEach((book) => UI.addBookToList(book))
    for (let i = 0; i < listadoPildoras.length; i++) {
        const row = document.createElement('tr')

        row.innerHTML = `
                            <td>${listadoPildoras[i].id}</td>
                            <td>${listadoPildoras[i].nombre}</td>
                            <td>${listadoPildoras[i].descripcion}</td>
                            <td>${listadoPildoras[i].fecha_presentacion}</td>
                            <td>${listadoPildoras[i].created_at}</td>
                            <td>${listadoPildoras[i].estado}</td>
                            <td>Borrar</td>
                            `

        list.appendChild(row)
    }
}
// Consultar el listado de píldoras
Pildora.getListadoPildoras();
// Funcionalidad crear píldora
var crearPildora = {
    nombre: document.getElementById('fname').value,
    descripcion: document.getElementById('lname').value,
    fecha_presentacion: document.getElementById('date').value,
    estado: 0, // 0 pendiente, 1 presentada
    user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
}

var form = document.getElementById('form');

function crearPildoras (e) {
    e.preventDefault();
    await Pildora.crearPildora(crearPildora);
};


alert('pildora nueva creada', 'peligro');


// Funcionalidad borrar píldora
//borrarPildora();
document.getElementById('Borrar').addEventListener('click', borrarPildora)
function pildoraRenove(e) {
    deletePildora(e.Pildora)
    shwoAlert('Pildora borrada')
}
// Borrar una tarea
// let idPildora = 2;
// Pildora.borrarPildora(idPildora);

/* // Clear fields
    UI.clearFields()
}
document.getElementById('book-list').addEventListener('click', handleRemove)
function handleRemove(e) {
    // Remove book from UI
    UI.deleteBook(e.target)
    UI.showAlert('Book Removed', 'success')

    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
} */

// Funcionalidad marcar una píldora como presentada o pendiente
marcarPildora();




// Marcar una tarea como completada o pendiente
let idPildora = 2;
let data = { estado: 1 }; // 1 presentada, 0 pendiente
Pildora.marcarPildora(data, idPildora);