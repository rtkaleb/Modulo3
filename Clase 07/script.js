//Users
const ivanUser = "ivan"
const ivanPassword = "1234"

function logIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (username === ivanUser && password === ivanPassword) {
        localStorage.setItem("loggedUser", username);
        window.location.href = "home.html";
    }else{
        error.textContent = "Usuario o contraseña incorrecta"
    }
}