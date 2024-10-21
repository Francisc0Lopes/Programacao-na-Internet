/*
* Autor: Francisco Lopes Nº49852 LEIRT51D
* Docente: Filipe Freitas
* Descrição:  Acredito que o trabalho proposto foi bem conseguido 
* Data: 9/10/2024
*/


"use strict"//Ajuda a não ter um conjunto de erros

export function memoize(func) {
    const cache = new Map();  
    return function(...args){ //aceita um número variável de argumentos
        const key = JSON.stringify(args);  
        if (cache.has(key)){ //verifica se os argumentos já estão no map
            return cache.get(key);  
        }
        //caso não tenha chama a função fornecida
        const result = func(...args);  
        cache.set(key, result);  //armazena o resultado 
        return result;
    };
}
