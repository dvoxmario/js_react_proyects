 

 const formulario = document.querySelector('#formulario')
 formulario.addEventListener('submit', e => {
    e.preventDefault

    const nombre = document.querySelector('#nombre')
    const password = document.querySelector('#password').value


    // prevenir nuevas alertas 

    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()

    const alerta = document.createElement('DIV')
    alerta.textContent = 'contenido alerta'
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')
     
    console.log(alerta)





    if(nombre === '' || password === '') {
        console.log('todos los campos son obligatorios...')
        alerta.classList.add('bg-red-500')
    } else{
        console.log('todo bien, iniciando sesion ')
        alerta.classList.add('bg-green-500')

    }

    formulario.appendChild(alerta)

    setTimeout(() => {

        alerta.remove

    }, 3000);


 })