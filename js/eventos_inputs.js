
const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {


console.log(e.target)

})


const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input')

function functionpassword() {

    inputPassword.type = "text"

    setTimeout(() => {

        inputPassword.type = 'password'
    }, 3000);
    
 }