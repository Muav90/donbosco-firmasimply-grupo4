import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';
 getListadoFirmas();

async function getListadoFirmas() {
    let respuesta = await Asistencia.getlistadoFirmas();
    //console.log(respuesta);
    // Tu Código// Consultar el listado de firmas
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

return await listadoFirmas(TOKEN);
  
import {
  listadoFirmas,
  firmar,
  getNumFirmasHoy,
 } from './API/llamadasApi.js';

const TOKEN = JSON.parse(localStorage.getItem('token'));

export default class Asistencia {
    /**
     * Devuelve el listado de firmas
     * @returns
     */
    static async getlistadoFirmas() {
        return await listadoFirmas(TOKEN);
    }

    /**
     * Registrar firma de asistencia
     * El objeto firma debe contener los siguientes parametros
     * user_id [required]
     * nota [optional]
     * estado [required]
     * @param {*} firma
     * @returns
     */
    
    static firmar(firma) {
        return firmar(TOKEN, firma)
    }

    /**
     * Devlueve el numero de firmas registradas de hoy
     * @param {*} coderId
     * @returns
     */
    static getNumFirmasHoy() {
        return getNumFirmasHoy(TOKEN);
    }
}

// Funcionalidad de Firmar
const hostName = 'http://143.198.170.155';

async function listadoFirmas(token) {
    return await apiCall('GET', hostName + '/api/listadoFirmas', token, null);
  };
  
  async function firmar(token, data = {}) {
    return await apiCall('POST', hostName + '/api/firmar',token, data);
  };
  
  async function getNumFirmasHoy(token) {
    return await apiCall('POST', hostName + '/api/numeroFirmasHoy', token, null);
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

  class asistencia {
    constructor(ultimas4firmasregistradas, ultimas6tareaspendientes,  ultimas4pildoraspendientes) {
        this.ultimas4firmasregistradas = ultimas4firmasregistradas
        this.ultimas6tareaspendientes = ultimas6tareaspendientes
        this.ultimas4pildoraspendientes = ultimas4pildoraspendientes
    }
      }

      class Store {
        static addAsistenciasToList(asistencias) {
              const asistencias = Store.getAsistencias();
              asistencias.push(asistencias);
              localStorage.setItem('asistencias', JSON.stringify(asistencias));
          }
   }
    const defaultAsistencia =  [
      {
          crear: 'ultimas4firmasregistradas',
          crear: 'ultimas6tareaspendientes',
          crear: 'ultimas4pildoraspendientes'
      },
  ]

    
  class UI {

    static showAlert(asistencias) {
      const div = document.createElement('div')
      div.innerText = asistencias
      div.asistencias = `alert alert-${asistencias}`
      document.getElementById('asistencias-form').prepend(div)
  
      setTimeout(() => {
        div.remove()
      }, 2000)
    }
    static displayfirma() {
        defaultfirma.forEach((firma) => UI.addfirma(firma))
    }
    static  clearFields() {

      const ultimas4firmasregistradas = document.getElementById('ultimas4firmasregistradas').value = ' '
      const ultimas6tareaspendientes = document.getElementById('ultimas6tareaspendientes').value = ' '
      const ultimas4pildoraspendientes = document.getElementById('ultimas4pildoraspendientes').value = ' '
      

  }

  static UIdeleteAsistencia() {
    document.getElementById('asistencias-list').addEventListener('click', handleRemove)
  function handleRemove(e) {
    UI.deleteBook(e.target)
  }
  if(target.classList.contains('delete')){  

  }
   }
     

    static addfirma() {
        const list = document.getElementById('addfirma-list')// get the #book-list DOM node here
        const row = document.createElement('tr') // create a TR row element here (document.createElement)
        row.innerHTML = `
            <td>${ultimas4firmas}</td>
            <td>${ultimas6tareaspendientes}</td>
            <td>${ultimas4pildoraspendientes}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `
        list.appendChild(row)
       
    }
}
    UI.displayfirma()

    document.querySelector('#asistencia-form').addEventListener('submit', addABook, false)

    function addAsistenciastolist(e) {

      e.preventDefault()

      const ultimas4firmasregistradas = document.getElementById('ultimas4firmasregistradas').value
      const ultimas6tareaspendientes = document.getElementById('ultimas6tareaspendientes').value
      const ultimas4pildoraspendientes= document.getElementById('ultimas4pildoraspendientes').value

      const asistencias = new asistencias(ultimas4firmasregistradas, ultimas6tareaspendientes, ultimas4pildoraspendientes)

      UI.addAsistenciasToList(asistencias)

      UI.clearFields()

      document.getElementById('asistencia-list').addEventListener('click', handleRemove)

  function handleRemove(e) {

	UI.deleteAsistencia(e.target)
	UI.showAlert('asistencia Removed', 'success')
	Store.removeAsistencia(e.target.parentElement.previousElementSibling.textContent)

  }

// Funcionalidad mostrar Listado Tareas

// Funcionalidad mostrar Listado Píldoras


  }
