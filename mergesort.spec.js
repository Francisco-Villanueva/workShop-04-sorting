describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    // tu código acá
    let arregloAntesSplit = [1, 60, 78, 90, 2, 3, 4, 5];
    let arregloSpliteado = [
      [1, 60, 78, 90],
      [2, 3, 4, 5],
    ];
    expect(split(arregloAntesSplit)).toEqual(arregloSpliteado);
  });

  it("es capaz de dividir el arreglo en dos partes", function () {
    // tu código acá
    let arregloAntesSplit = [1, 60];
    let arregloSpliteado = [[1], [60]];
    expect(split(arregloAntesSplit)).toEqual(arregloSpliteado);
  });
});
describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    // testeá el algoritmo
    const arr1 = [1, 4, 6, 7];
    const arr2 = [2, 5, 8, 14];

    const mergedArrays = [1, 2, 4, 5, 6, 7, 8, 14];

    expect(merge(arr1, arr2)).toEqual(mergedArrays);
  });

  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    // testeá el algoritmo
    const arr1 = [1, 10, 15, 150];
    const arr2 = [22, 30, 70, 290];

    const mergedArrays = [1, 10, 15, 22, 30, 70, 150, 290];

    expect(merge(arr1, arr2)).toEqual(mergedArrays);
  });
});
describe("mergeSort", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    // testeá el algoritmo
    const arrayToMergeSort = [1, 2, 10, 50, 12, 4, 5, 6, 7];
    const result = [1, 2, 4, 5, 6, 7, 10, 12, 50];

    expect(mergeSort(arrayToMergeSort)).toEqual(result);
  });
});
