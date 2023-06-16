## plugin react para vite
 npm i @vitejs/plugin-react -E
## instalar react
 npm i react react-dom -E
## eslint
 npm i standard -D

## route
npm i react-router-dom


## Para activar el modo oscuro y el modo claro instalamos las dependencias
npm i styled-components
npm i react-icons



## eliminar

Si deseas dividir un arreglo en dos partes a partir de un punto específico, puedes utilizar el método slice() de JavaScript. Este método devuelve una nueva matriz que contiene los elementos seleccionados desde el índice inicial hasta el índice final especificado, sin incluir este último. Aquí te muestro un ejemplo:

javascript
Copy code
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const puntoDeDivision = 5;

const primeraParte = arreglo.slice(0, puntoDeDivision);
const segundaParte = arreglo.slice(puntoDeDivision);

console.log(primeraParte); // [1, 2, 3, 4, 5]
console.log(segundaParte); // [6, 7, 8, 9, 10]
En este ejemplo, el arreglo se divide en dos partes en el índice 5 (que corresponde al número 6 en el arreglo). La primera parte contiene los elementos desde el índice 0 hasta el índice 4, mientras que la segunda parte contiene los elementos desde el índice 5 hasta el final del arreglo.

Puedes ajustar el valor de puntoDeDivision según tus necesidades para dividir el arreglo en diferentes puntos.




