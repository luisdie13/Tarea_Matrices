function rotar(matriz) {
    const n = matriz.length;
    
    // Paso 1: Transponer la matriz (cambiar filas por columnas)
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        // Intercambiamos los elementos en las posiciones (i, j) y (j, i)
        let temp = matriz[i][j];
        matriz[i][j] = matriz[j][i];
        matriz[j][i] = temp;
      }
    }
  
    // Paso 2: Invertir cada fila de la matriz transpuesta
    for (let i = 0; i < n; i++) {
      let inicio = 0;
      let fin = n - 1;
      while (inicio < fin) {
        // Intercambiamos los elementos en las posiciones (i, inicio) y (i, fin)
        let temp = matriz[i][inicio];
        matriz[i][inicio] = matriz[i][fin];
        matriz[i][fin] = temp;
        inicio++;
        fin--;
      }
    }
  
    return matriz;
  }
  
  // Ejemplo de uso
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Matriz original:");
  console.log(matriz);
  
  let matrizRotada = rotar(matriz);
  
  console.log("Matriz rotada 90 grados en sentido horario:");
  console.log(matrizRotada);