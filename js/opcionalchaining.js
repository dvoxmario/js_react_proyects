// opcional chaining (?)

const alumno = {
    nombre: 'juan', 
    clase: 'programacion 1',
    aprobado: 'true',
    examenes: {
        examen1: 90
    }

}

console.log(alumno.examenes?.examen1)

console.log('despues de ALUMNO')




// Nullish coalescing operator (??)

const pagina = null ?? 1
console.log(pagina)
