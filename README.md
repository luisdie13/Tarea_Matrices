# Cálculos de Matrices

Este archivo contiene el procedimiento para calcular las operaciones con matrices, como la suma de matrices y la demostración de la propiedad de la adición de matrices.

---

## Ejercicio 1: Calcular A + B

Dados los siguientes matrices:

**Matriz A:**
A = [ 2, 3 ] [ 4, 1 ]

**Matriz B:**
B = [ 1, 5 ] [ 0, 2 ]

### Procedimiento:

La suma de dos matrices \( A + B \) se realiza sumando los elementos correspondientes de cada matriz.

**Cálculo:**

A + B = [ (2 + 1), (3 + 5) ] [ (4 + 0), (1 + 2) ]

A + B = [ 3, 8 ] [ 4, 3 ]

### Resultado:

A + B = [ 3, 8 ] [ 4, 3 ]

---

## Ejercicio 2: Calcular A + B

Dados los siguientes matrices:

**Matriz A:**
A = [ 1, 2, 3 ] [ 4, 5, 6 ] [ 7, 8, 9 ]

**Matriz B:**
B = [ 9, 8, 7 ] [ 6, 5, 4 ] [ 3, 2, 1 ]

### Procedimiento:

Sumamos los elementos correspondientes de cada matriz:

**Cálculo:**

A + B = [ (1 + 9), (2 + 8), (3 + 7) ] [ (4 + 6), (5 + 5), (6 + 4) ] [ (7 + 3), (8 + 2), (9 + 1) ]

A + B = [ 10, 10, 10 ] [ 10, 10, 10 ] [ 10, 10, 10 ]

### Resultado:

A + B = [ 10, 10, 10 ] [ 10, 10, 10 ] [ 10, 10, 10 ]

---

## Ejercicio 3: Demostrar que \( (A + B) + C = A + (B + C) \)

Dados los siguientes matrices:

**Matriz A:**
A = [ 1, 0 ] [ -2, -3 ]

**Matriz B:**
B = [ 4, -1 ] [ 2, 0 ]

**Matriz C:**
C = [ 3, 2 ] [ -1, 1 ]

### Procedimiento:

1. Primero, calculemos \( (A + B) + C \):

**Suma de A + B:**

A + B = [ (1 + 4), (0 + -1) ] [ (-2 + 2), (-3 + 0) ]

A + B = [ 5, -1 ] [ 0, -3 ]

**Suma de (A + B) + C:**
(A + B) + C = [ (5 + 3), (-1 + 2) ] [ (0 + -1), (-3 + 1) ]

(A + B) + C = [ 8, 1 ] [ -1, -2 ]

2. Ahora, calculemos \( A + (B + C) \):

**Suma de B + C:**

B + C = [ (4 + 3), (-1 + 2) ] [ (2 + -1), (0 + 1) ]

B + C = [ 7, 1 ] [ 1, 1 ]


**Suma de A + (B + C):**

A + (B + C) = [ (1 + 7), (0 + 1) ] [ (-2 + 1), (-3 + 1) ]

A + (B + C) = [ 8, 1 ] [ -1, -2 ]

### Resultado:

Como \( (A + B) + C = A + (B + C) \), hemos demostrado la propiedad de la adición de matrices.

---

## Ejercicio 4: Calcular A + B

Dados los siguientes matrices:

**Matriz A:**
A = [ 1, 2 ] [ 3, 4 ]

**Matriz B:**
B = [ 5, 6, 7 ] [ 8, 9, 10 ]

### Procedimiento:

La suma de matrices solo es posible si ambas matrices tienen las mismas dimensiones. En este caso, la **Matriz A** es de dimensión 2x2 y la **Matriz B** es de dimensión 2x3, por lo que **no son compatibles para la suma**.

### Resultado:

Las matrices no son compatibles para la suma, ya que tienen dimensiones diferentes.


## Explicación del Algoritmo para Rotar una Matriz 90 Grados en Sentido Horario

Este algoritmo rota una matriz cuadrada 90 grados en el sentido horario. La rotación se realiza en dos pasos principales:

### 1. **Transposición de la Matriz**
En el primer paso, cambiamos las posiciones de los elementos en la matriz. Específicamente, para cada par de índices `(i, j)`, intercambiamos el valor de la posición `(i, j)` con el de la posición `(j, i)`. Este paso convierte las filas de la matriz en columnas.

### 2. **Inversión de las Filas**
En el segundo paso, después de realizar la transposición, invertimos cada fila de la matriz transpuesta. Este paso es el que completa la rotación de la matriz 90 grados en el sentido horario, colocando los elementos en la posición correcta.

### Procedimiento Resumido:
1. **Transposición:** Intercambia los elementos `(i, j)` con `(j, i)`.
2. **Inversión de Filas:** Invierte cada fila de la matriz transpuesta.



## Procedimiento para la Multiplicación de Matrices

Este documento explica el procedimiento paso a paso para realizar la multiplicación de dos matrices en Node.js.

---

### Explicación Paso a Paso

### 1. Verificación de Compatibilidad

Para que la multiplicación de matrices sea posible, se debe verificar que el número de columnas de la primera matriz (`matrizA`) coincida con el número de filas de la segunda matriz (`matrizB`).

- **Condición**: El número de columnas de `matrizA` debe ser igual al número de filas de `matrizB`.

Si esta condición no se cumple, la multiplicación no es posible, y la función debe:

- Imprimir un mensaje de error en consola.
- Retornar un arreglo vacío.

### 2. Crear la Matriz de Resultados

La matriz resultante tendrá:

- **Filas**: Igual al número de filas de la primera matriz (`matrizA`).
- **Columnas**: Igual al número de columnas de la segunda matriz (`matrizB`).

Inicializamos esta matriz con ceros. Esto nos da una estructura vacía en la que almacenaremos los resultados de las multiplicaciones.

### 3. Multiplicación de Matrices

La multiplicación de matrices se realiza de la siguiente manera:

1. **Iterar** sobre cada fila de la primera matriz (`matrizA`).
2. **Iterar** sobre cada columna de la segunda matriz (`matrizB`).
3. Para cada combinación de fila de `matrizA` y columna de `matrizB`:
   - Multiplicar los elementos correspondientes de la fila de `matrizA` con la columna de `matrizB`.
   - Sumar los resultados de esas multiplicaciones.

El resultado de esta suma se coloca en la posición correspondiente en la matriz de resultados.

### 4. Resultado

Finalmente, la función retorna la matriz resultante de la multiplicación.

---

## Ejemplo de Entrada y Salida

### Entrada

#### `matrizA`:

```javascript
[
  [1, 2, 3],
  [4, 5, 6]
]

matrizB:
[
  [7, 8],
  [9, 10],
  [11, 12]
]

Proceso de Multiplicación

Para calcular el elemento en la posición (i, j) de la matriz resultante, realizamos las siguientes multiplicaciones y sumas:

Para la posición (0, 0):

(1×7)+(2×9)+(3×11)=7+18+33=58

Para la posición (0, 1):

(1×8)+(2×10)+(3×12)=8+20+36=64

Para la posición (1, 0):

(4×7)+(5×9)+(6×11)=28+45+66=139

Para la posición (1, 1):

(4×8)+(5×10)+(6×12)=32+50+72=154

Salida

Resultado de la multiplicación:

[
  [58, 64],
  [139, 154]
]

