/*
* Autor: Francisco Lopes Nº49852 LEIRT51D
* Docente: Filipe Freitas
* Descrição:  Acredito que o trabalho proposto foi bem conseguido 
* Data: 9/10/2024
*/




"use strict"//Ajuda a não ter um conjunto de erros
import { validateArrayElements } from './A1_1.js';


// Função que filtra e retorna elementos válidos de um array que cumpram os validadores
export function copyValidArrayElements(arr, elementValidators){
    return arr.filter(idx => elementValidators.some(validator => validateArrayElements([idx], validator)));//filter para criar um array com elementos que passem nos validadores
}

