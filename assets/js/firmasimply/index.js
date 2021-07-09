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



async function listadoTareas() {

	console.log(await Tarea.getlistadoTareas());
}

  
let tareas = {
	user_id: Auth.getCoder().id,
	nota: 'texto test',
	estado:1 // 1 para entrada, 0 para
	 };
	
	 
async function listadoPildoras() {  
   console.log(await Pildora.getlistadoPildoras());
}

let pildoras = {
	user_id: Auth.getCoder().id,
	nota: 'texto test',
	estado:1 // 1 para entrada, 0 para
	 };
	   
