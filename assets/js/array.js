let list = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
let list2 = ['A', 'B', 'C', 'D', 'E', 'F',];
let list3 = ['F', 'E', 'D', 'C', 'B', 'A',];

//Remover item da lista
/*
    Repare que o método splice recebe dois parâmetros, o primeiro é o
    índice do array, o segundo parâmetro é a quantidade que você irá
    remover da lista
*/
//list.splice(x, y);

/*Concatenar dois arrays
let res = list.concat(list2);*/

/*Ordenar o array por ordem alfabética
let res = list3.sort();*/

/*Invertendo a ordem do array*/
let res = list2.reverse();

document.getElementById("array").innerHTML = res;