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
/***
 *   El metodo cleanVar tiens la funcion de resetear las variable
 *   cada vez que es llamada esta funcion las variables que tiene dentro
 *   de restablecen.
*/
const cleanVar = (array) =>{
    isPositive = 1;
    maxConcidencias = 4;
    size = array.length;
    letter = '';
    next = '';
}
/***
 *  sortArray recibe como parametro el array dado por el usuario
 *  y lo guarda en matrix como un nuevo arreglo y asi poder hacer la busqueda
 *  en el arreglo
 * 
 *   */
const sortArray = (array) => {
    for (let i = 0; i < size; i++) {
        let row = array[i];
        matrix[i] = row.split("");
    }
}

/**
 * Busqueda a la derecha hace la busqueda de izquierda a derecha
 * para asi hacer la busqueda de las concidencias cada vez que encuentre
 * una concidencia la variable isPositive aumenta hasta llegar a ser mayor
 * a la variable maxConcidencias.
 */
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

/**
 * Para la busqueda hacia abajo se uso un recorrido con dos for anidados
 * pero en este caso se cambiaron los indices i,j a j,i para que realize
 * la busqueda hacia abajo y de igual manera isPositive al llegar al umbral
 * sale del codigo y muestra la informacion.
 */
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


/**
 * busqueda diagonal
 */
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
/**
 * 
 * @returns 
 */
const result = () => {
    console.clear();
    console.log(isPositive);
    if (isPositive >= maxConcidencias) {
        return "Paciente de Alto Riesgo.";

    } else return "Paciente de Bajo Riesgo.";
}

module.exports = compareDNA;