const formulario = document.getElementById('formularioContacto');
const enviarBtn = document.getElementById('enviarBtn');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const nombreValor = nombreInput.value;
    const mensaje = document.getElementById("mensaje");
    const mensajeValor = mensaje.value;
    const correo = document.getElementById("correo");
    const correoValor = correo.value;

    Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: `Gracias por tus comentarios ${nombreValor}.
        Te responderemos lo más pronto posible.`,
    });

    formulario.reset();
});