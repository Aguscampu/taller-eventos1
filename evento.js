document.getElementById('miDiv').addEventListener('click', function() {
    alert('Hola! Soy el div');
});

document.querySelector('button').addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation(); // Detiene la propagación del evento click
});
