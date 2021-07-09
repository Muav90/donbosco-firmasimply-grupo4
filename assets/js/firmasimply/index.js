import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';

async function listadoFirmas() {  
	let firma = await Asistencia.getlistadoFirmas()
	for (let i = 0; i < firma.length; i++) { 
    if (i < 4 && firma[i].estado == 1) {
	    console.log(firma[i])
		document.getElementById("datoentrada").innerHTML = firma[i].user_id
	} else if (i < 4 && firma[i].estado == 1) {  
		document.getElementById("datosalida").innerHTML = firma[i].user_id
     }
  }
   }
 listadoFirmas();
    

async function firmaentrada() { 
	let firma = {
		user_id: Auth.getCoder().id,
		nota: 'texto test',
		estado:1 // 1 para entrada, 0 para salida
	};
	await Asistencia.firmar(firma)
}

//Asistencia.firmar(firma);

document.getElementById("Entrada").addEventListener('click', firmaentrada, false); 

async function firmasalida() { 
	let firma = {
		user_id: Auth.getCoder().id,
		nota: 'texto test',
		estado:0 // 1 para entrada, 0 para salida
	};
	await Asistencia.firmar(firma)
}
document.getElementById("Salida").addEventListener('click', firmasalida, false);


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
/* async function listadoTareas() {

	console.log(await Tarea.getlistadoTareas());
}

  
let tareas = {
	user_id: Auth.getCoder().id,
	nota: 'texto test',
	estado:1 // 1 para entrada, 0 para
	 };
	 */
	 


	 getListadoPildoras();
async function getListadoPildoras() {
    let listadoPildoras = await Pildora.getListadoPildoras();
    console.log(listadoPildoras);
    const list = document.getElementById('pildora-list')
    // books.forEach((book) => UI.addBookToList(book))
    //let finales = listado.reverse();
    let ultimas = listadoPildoras.slice(listadoPildoras.length -4).reverse()
    console.log(ultimas)
    for (let i = 0; i < ultimas.length; i++) {
        
            const row = document.createElement('tr')
            let check ;
            if(ultimas[i].estado == 0){
                check =`<td><label><input<type="chekbox" id="${ultimas[i].id}" class="pulsado" value="${ultimas[i].estado}">Pendiente</label></td>`;
            }else{
                check = `<td><label><input<type="chekbox" id="${ultimas[i].id}" class="pulsado" checked="true"  value="${ultimas[i].estado}">Presentado</label></td>`;
            }

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


async function listadoPildoras() {  
   console.log(await Pildora.getlistadoPildoras());
}

let pildoras = {
	user_id: Auth.getCoder().id,
	nota: 'texto test',
	estado:1 // 1 para entrada, 0 para
	 };
	   
