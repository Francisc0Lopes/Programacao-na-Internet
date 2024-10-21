/*
* Autor: Francisco Lopes Nº49852 LEIRT51D
* Docente: Filipe Freitas
* Descrição:  Acredito que o trabalho proposto foi bem conseguido 
* Data: 9/10/2024
*/


"use strict" //Ajuda a não ter um conjunto de erros
import { copyValidArrayElements as validateArrayElements } from './A1_2.js'; 

Array.prototype.copyValidArrayElements = function(elementValidators) {
    return validateArrayElements(this, elementValidators);
};
