function bubbleSort(array) {
  /* tu codigo acá */
  //retornar el array ordenado de menor a mayor por definicion del bubble
  let len = array.length;
  let contador = 0;
  let cambio;

  do {
    cambio = false;

    for (var i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        contador++;
        swap(i, i + 1, array, contador);
        cambio = true;
      }
    }

    len--;
  } while (cambio);

  return { array, contador };
}

function swap(mayorIndex, menorIndex, array, contador) {
  /* fn para intercambiar 2 valores*/

  var aux = array[mayorIndex];
  array[mayorIndex] = array[menorIndex];
  array[menorIndex] = aux;

  // return array;
}
