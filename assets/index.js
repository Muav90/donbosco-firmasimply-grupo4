import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';
getListadoFirmas();

async function getListadoFirmas() {
    let respuesta = await Asistencia.getlistadoFirmas();
    //console.log(respuesta);
    // Tu Código

Asistencia.getlistadoFirmas();

// Registrar una firma

let firma = {
    user_id: Auth.getCoder().id,
    nota: 'texto test',
    estado: 1 // 1 para entrada, 0 para salida
};
Asistencia.firmar(firma);

// Consultar el número de firmas de hoy
Asistencia.getNumFirmasHoy();
}
// Funcionalidad de Firmar

let firma = {
    user_id: Auth.getCoder().id,
    nota: 'texto test',
    estado: 1 // 1 para entrada, 0 para salida
};
Asistencia.firmar(firma);

// Consultar el número de firmas de hoy
Asistencia.getNumFirmasHoy();


// Funcionalidad de Firmar

const hostName = 'http://143.198.170.155';

async function login(data = {}) {
  return await apiCall('POST', hostName + '/api/login', null, data);
};

async function logout(token) {
  return await apiCall('POST', hostName + '/api/logout', token, null);
}

async function listadoFirmas(token) {
    return await apiCall('GET', hostName + '/api/listadoFirmas', token, null);
  };
  
  async function firmar(token, data = {}) {
    return await apiCall('POST', hostName + '/api/firmar',token, data);
  };
  
  async function getNumFirmasHoy(token) {
    return await apiCall('POST', hostName + '/api/numeroFirmasHoy', token, null);
  };

// Funcionalidad mostrar Listado Tareas

async function listadoTareas(token) {
  return await apiCall('GET', hostName + '/api/listadoTareas', token, null);
};

async function crearTarea(token, data={}) {
  return await apiCall('POST', hostName + '/api/crearTarea', token, data);
};

async function marcarTarea(token, data={}, tareaId) {
  return await apiCall('PUT', hostName + '/api/marcarTarea/' + tareaId, token, data);
};

async function borrarTarea(token, tareaId) {
  return await apiCall('DELETE', hostName + '/api/borrarTarea/' + tareaId, token, null);
};
// Categoria
async function listadoCategorias(token) {
  return await apiCall('GET', hostName + '/api/listadoCategorias', token, null);
};

// Funcionalidad mostrar Listado Píldorasasync function listadoPildoras(token) {
  async function listadoPildoras(token) {
    return await apiCall('GET', hostName + '/api/listadoPildoras', token, null);
  };
  
  async function crearPildora(token, data={}) {
    return await apiCall('POST', hostName + '/api/crearPildora', token, data);
  };
  
  async function marcarPildora(token, data, pildoraId) {
    return await apiCall('PUT', hostName + '/api/marcarPildora/' + pildoraId, token, data);
  };
  
  async function borrarPildora(token, pildoraId) {
    return await apiCall('DELETE', hostName + '/api/borrarPildora/' + pildoraId, token, null);
  };
  
const apiCall = async (method, url, token = null, data = null) => {
  let config = {
    method: method,
    url: url,
  }

  if (token !== null) {
    config['headers'] = {'Authorization': `Bearer ${token}`};
  }

  if (data !== null) {
    config['data'] = data;
  }

  const response = await axios(config);

  return response.data;
}
import {
  login,
  logout,
 } from '../API/llamadasApi.js';

export default class Auth {
    static async login(coder){
        let res = await login(coder);
        localStorage.setItem('coder', JSON.stringify(res.user));
        localStorage.setItem('token', JSON.stringify(res.token));
    }

    static async logout(){
        let res = await logout(JSON.parse(localStorage.getItem('token')));
        localStorage.clear();
    }

    static getCoder(){
        return JSON.parse(localStorage.getItem('coder'));
    }

    static getToken(){
        return JSON.parse(localStorage.getItem('token'));
    }
} 