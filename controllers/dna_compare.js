let matrix = [];
let size;
let maxConcidencias;
let isPositive;
let letter;
let next;

const compareDNA = (array = []) => {
    cleanVar(array);
    sortArray(array);

    buscarDiagonal();
    if (isPositive < maxConcidencias){
        cleanVar(array);
        buscarDerecha();
    }    
    if (isPositive < maxConcidencias){
        cleanVar(array);
        buscarAbajo();
    }
    return result();

}

const cleanVar = (array) =>{
    isPositive = 1;
    maxConcidencias = 4;
    size = array.length;
    letter = '';
    next = '';
}

const sortArray = (array) => {
    for (let i = 0; i < size; i++) {
        let row = array[i];
        matrix[i] = row.split("");
    }
}

// Buscar a la derecha
const buscarDerecha = () => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (letter == '') letter = matrix[i][j];

            if (matrix[i][j + 1] !== undefined)
                next = matrix[i][j + 1];
            else next = '';

            if (letter == next) isPositive++;
            else {
                if (isPositive < maxConcidencias) {
                    letter = '';
                    isPositive = 1;
                } else break;
            }

        }
        if (isPositive >= maxConcidencias) break;
    }
}

// Buscar abajo
const buscarAbajo = () => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            if (letter == '') letter = matrix[j][i];

            if (matrix[j + 1] !== undefined)
                next = matrix[j + 1][i];
            else next = '';

            if (letter == next) isPositive++;
            else {
                if (isPositive < maxConcidencias) {
                    letter = '';
                    isPositive = 1;
                } else break;
            }
        }
        if (isPositive >= maxConcidencias) break;
    }
}


// Buscar en diagonal
// altura, anchura = size (mxn)
// i diagonal
// j vertical
// z horizontal
const buscarDiagonal = () => {
    let next = [];

    for (let i = 1 - size; i < size; i++) {
        next = [];
        for (let j = -Math.min(0, i), z = Math.max(0, i); j < size && z < size; j++, z++) {

            letter = matrix[j][z];
            if (next[0] == letter) {
                isPositive++;
                next.push(letter);
            } else {
                if (isPositive < maxConcidencias) {
                    // next = [];
                    next = [letter]
                    isPositive = 1;
                } else break;
            }
        }
        if (isPositive >= maxConcidencias) break;
    }
}

const result = () => {
    console.clear();
    console.log(isPositive);
    if (isPositive >= maxConcidencias) {
        return "Paciente de Alto Riesgo.";

    } else return "Paciente de Bajo Riesgo.";
}

module.exports = compareDNA;