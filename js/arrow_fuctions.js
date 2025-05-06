
/* no se usa el termino function y se usa el apuntador,
tampoco pueden ser inicializadas sin ser declaradas.*/

const sumar = (numero1 = 0, numero2 = 0) => {
    console.log(numero1 + numero2)

}

sumar(10, 20)
sumar(300, 1)
sumar(100)

