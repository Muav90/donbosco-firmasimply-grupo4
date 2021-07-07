import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';


console.log(await Asistencia.getlistadoFirmas());

let firma = {
	user_id: Auth.getCoder().id,
	nota: 'texto test',
	estado:0 // 1 para entrada, 0 para salida
};
//Asistencia.firmar(firma);

document.getElementById("Entrada").addEventListener('click', firma); 
