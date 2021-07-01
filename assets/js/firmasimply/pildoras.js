import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

getListadoPildoras();

{/* <tr>
                                    <th scope="row">1</th>
                                    <td>fila 1</td>
                                    <td>columna 2</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr> */}

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

    /* let listadoArray = ['a', 'b', 'c'];
    listadoArray[0];

    let objetoUsuario = {nombre: 'Mohamed', apellido: 'Aberkani'};
    objetoUsuario.apellido;

    let listaObjetos = [{nombre: 'Mohamed', apellido: 'Aberkani'}, {nombre: 'Maria', apellido: 'Aberkani'}]
    listaObjetos[0].nombre; */

}

// Funcionalidad crear píldora
//

// Funcionalidad borrar píldora
//

// Funcionalidad marcar una píldora como presentada o pendiente
//