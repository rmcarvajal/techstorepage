


document.addEventListener('DOMContentLoaded', function () {    // Espera a que el DOM esté completamente cargado antes de ejecutar el script
    
    document.querySelector('.toggle-password').addEventListener('click', function () {   // Selecciona el elemento con la clase 'toggle-password' y agrega un evento 'click'
        
        const passwordInput = this.previousElementSibling;  // Selecciona el elemento anterior al ícono, que es el campo de entrada de la contraseña
        if (passwordInput.type === 'password') {    // Verifica el tipo de entrada del campo de contraseña
            passwordInput.type = 'text';            // Si el tipo es 'password', cámbialo a 'text' para mostrar la contraseña
            this.classList.remove('fa-eye');        // Cambia la clase del ícono para mostrar el ícono de 'ojo cerrado'
            this.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';           // Si el tipo es 'text', cámbialo a 'password' para ocultar la contraseña
            this.classList.remove('fa-eye-slash');     // Cambia la clase del ícono para mostrar el ícono de 'ojo abierto'
            this.classList.add('fa-eye');
        }
    });
});

console.log('login.js is loaded');  //Si ves este mensaje en la consola del navegador, significa que el archivo se está cargando correctamente.
