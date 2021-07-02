class form {
  constructor(ultimas4firmasregistradas, ultimas6tareaspendientes, ultimas4pildoraspendientes) {
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
const defaultAsistencia = [
  {
    crear: 'ultimas4firmasregistradas',
    crear: 'ultimas6tareaspendientes',
    crear: 'ultimas4pildoraspendientes'
  },
]
console.log(crearFirma);

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
  static clearFields() {

    const ultimas4firmasregistradas = document.getElementById('ultimas4firmasregistradas').value = ' '
    const ultimas6tareaspendientes = document.getElementById('ultimas6tareaspendientes').value = ' '
    const ultimas4pildoraspendientes = document.getElementById('ultimas4pildoraspendientes').value = ' '


  }

  static UIdeleteAsistencia() {
    document.getElementById('asistencias-list').addEventListener('click', handleRemove)
    function handleRemove(e) {
      UI.deleteBook(e.target)
    }
    if (target.classList.contains('delete')) {

    }
  }


  static addfirma() {
    alert("funciona")
    const list = document.getElementById('addfirma-list')// get the #book-list DOM node here
    const row = document.createElement('tr') // create a TR row element here (document.createElement)
    row.innerHTML = `
            <td>hola</td>
            <td>gfgf</td>
            <td>gfg}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `
    list.appendChild(row)

  }
}
UI.displayfirma()

document.querySelector('#entrada').addEventListener('click', UI.addfirma, false)
console.log(document.querySelector('#entrada').addEventListener('click', UI.addfirma, false))
function addAsistenciastolist(e) {

  e.preventDefault()

  const ultimas4firmasregistradas = document.getElementById('ultimas4firmasregistradas').value
  const ultimas6tareaspendientes = document.getElementById('ultimas6tareaspendientes').value
  const ultimas4pildoraspendientes = document.getElementById('ultimas4pildoraspendientes').value

  const asistencias = new asistencias(ultimas4firmasregistradas, ultimas6tareaspendientes, ultimas4pildoraspendientes)

  UI.addAsistenciasToList(asistencias)

  UI.clearFields()

  document.getElementById('asistencia-list').addEventListener('click', handleRemove)

  function handleRemove(e) {

    UI.deleteAsistencia(e.target)
    UI.showAlert('asistencia Removed',)
    Store.removeAsistencia(e.target.parentElement.previousElementSibling.textContent)

  }

  // Funcionalidad mostrar Listado Tareas

  // Funcionalidad mostrar Listado Píldoras


}
