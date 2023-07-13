function split(wholeArray) {
  const medio = Math.floor(wholeArray.length / 2);
  const mitad1 = wholeArray.slice(0, medio);
  const mitad2 = wholeArray.slice(medio, wholeArray.length);

  return [mitad1, mitad2];
}

function merge(arr1, arr2) {
  let result = [];
  let i = 0; //indice que recorre el arreglo 1
  let j = 0; //indice que recorre el arreglo 2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  let arrToConcat;

  if (i === arr1.length) {
    //arreglo  1 cargado, check
    // quedan valores por cargar del arr2
    arrToConcat = arr2.slice(j, arr2.length);
  } else if (j === arr2.length) {
    // quedan valores por cargar del arr1
    arrToConcat = arr1.slice(i, arr1.length);
  }
  return result.concat(arrToConcat);
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let [left, rigth] = split(array);
  let unionDeSantaFe = merge(mergeSort(rigth), mergeSort(left));

  return unionDeSantaFe;
}
