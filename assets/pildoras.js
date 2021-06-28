var form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hols');
    var obj = {
       nombre: document.getElementById('fname').value,
       descripcion: document.getElementById('lname').value,
       fecha_presentacion: document.getElementById('date').value,
       
    }
    document.getElementById('fname').value = "";

    // LLamada a la funcion con las api en axios y tenga que guardarlo y luego resetearlo
});
