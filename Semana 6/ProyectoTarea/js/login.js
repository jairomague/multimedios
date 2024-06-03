document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email: email,
        password: password
    };


    fetch('https://paginas-web-cr.com/Api/apis/AutenticarUsuario.php', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.code == 200) {
            console.log("Exitoso");
            document.getElementById('response').innerText = 'Login exitoso!';
            window.location.href = 'index.html';
        } else {
            console.log("No Exitoso");
            document.getElementById('response').innerText = 'Error de autenticación: ' + (data.message || 'Revise sus credenciales');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Error al conectarse con el servidor';
    });
});
