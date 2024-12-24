function multiply(matrizA, matrizB) {
    // Obtener el número de filas y columnas de cada matriz
    const filasA = matrizA.length;
    const columnasA = matrizA[0].length;
    const filasB = matrizB.length;
    const columnasB = matrizB[0].length;
  
    // Condición inicial: la cantidad de columnas de matrizA debe coincidir con la cantidad de filas de matrizB
    if (columnasA !== filasB) {
      console.log("Las matrices no son compatibles para la multiplicación.");
      return []; // Si no son compatibles, retornar un arreglo vacío
    }
  
    // Crear una matriz vacía para almacenar el resultado, con tantas filas como matrizA y tantas columnas como matrizB
    let resultado = new Array(filasA).fill().map(() => new Array(columnasB).fill(0));
  
    // Realizar la multiplicación de matrices
    for (let i = 0; i < filasA; i++) { // Iterar sobre las filas de matrizA
      for (let j = 0; j < columnasB; j++) { // Iterar sobre las columnas de matrizB
        for (let k = 0; k < columnasA; k++) { // Iterar sobre las columnas de matrizA (que son iguales a las filas de matrizB)
          // Multiplicar y sumar al resultado
          resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return resultado; // Retornar la matriz resultante
  }
  
  // Ejemplo de uso
  let matrizA = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  let matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];
  
  console.log("Matriz A:");
  console.log(matrizA);
  console.log("Matriz B:");
  console.log(matrizB);
  
  let resultado = multiply(matrizA, matrizB);
  
  console.log("Resultado de la multiplicación:");
  console.log(resultado);
  