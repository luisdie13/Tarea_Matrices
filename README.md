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
