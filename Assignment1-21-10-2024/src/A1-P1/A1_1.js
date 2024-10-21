/*
* Autor: Francisco Lopes Nº49852 LEIRT51D
* Docente: Filipe Freitas
* Descrição:  Acredito que o trabalho proposto foi bem conseguido 
* Data: 9/10/2024
*/



"use strict"//Ajuda a não ter um conjunto de erros

 export function validateArrayElements(arr, elementValidator){
    for (let i = 0; i < arr.length; i++) {
        for (const validator of elementValidator.validators) {
            if (!validator(arr[i]))return false;    //Caso algum validador retorne falso com o elemento
        }
    }
    return true;
}








