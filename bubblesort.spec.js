describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([]).array).toEqual([]);
  });
});
// Si no sabés por dónde arrancar, te damos algunas ideas:

// Un Arreglo desordenado que termine ordenado.
// Un Arreglo ordenado que debe mantenerse ordenado.
// Un Arreglo a la inversa ([3,2,1]) que termine ordenado.

describe("Bubble Sort", function () {
  it("Un Arreglo desordenado que termine ordenado.", function () {
    let arrayUnSorted = [15, 16, 2, 14, 20, 4, 5];
    let arraySorted = arrayUnSorted.sort((a, b) => a - b); //con sort() ordena de menor a mayor (a-b)
    expect(bubbleSort(arrayUnSorted).array).toEqual(arraySorted);
  });

  // it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
  //   let arrayUnSorted = [2, 4, 5, 14, 15, 16, 20];
  //   expect(bubbleSort(arrayUnSorted).array).toEqual(arrayUnSorted);
  // });
  // it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado.", function () {
  //   let arrayUnSorted = [3, 2, 1];
  //   let arraySorted = arrayUnSorted.sort((a, b) => a - b); //con sort() ordena de menor a mayor (a-b)
  //   expect(bubbleSort(arrayUnSorted).array).toEqual(arraySorted);
  // });
});
describe("probando spies", function () {
  it("swap debería ejectuarse 1 vez", function () {
    spyOn(window, "swap").and.callThrough();
    // callThrough le dice al spy que utilice el método original window['swap']
    let arrayToSort = [1, 2, 3, 5, 7, 6];

    const response = bubbleSort(arrayToSort);

    expect(window.swap.calls.count()).toEqual(response.contador);
  });
});

// describe("Swap", function () {
//   it("swap", function () {
//     let arrayUnSorted = [4, 2, 1, 3];
//     let arraySwapped = [2, 4, 1, 3]; //con sort() ordena de menor a mayor (a-b)
//     // let arraySwapped = [2, 1, 3, 4]; //con sort() ordena de menor a mayor (a-b)

//     expect(swap(0, 1, arrayUnSorted)).toEqual(arraySwapped);
//   });
// });
