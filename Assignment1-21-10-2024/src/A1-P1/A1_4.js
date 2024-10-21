/*
* Autor: Francisco Lopes Nº49852 LEIRT51D
* Docente: Filipe Freitas
* Descrição:  Acredito que o trabalho proposto foi bem conseguido 
* Data: 9/10/2024
*/


"use strict"//Ajuda a não ter um conjunto de erros

//Agrupa os elementos de um array caso passe pela função transformadora
Array.prototype.groupBy = function (transformer) {
    return this.reduce((arry, el) => { 
        const key = transformer(el); //obter a chave
        if (!arry[key]) arry[key] = [];  // Se a chave ainda não existir no objeto cria um novo array
        arry[key].push(el); //adiciona o elemento à chave
        return arry;
    }, 
    {});
};



