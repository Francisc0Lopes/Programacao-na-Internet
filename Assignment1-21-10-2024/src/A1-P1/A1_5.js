/*
* Autor: Francisco Lopes Nº49852 LEIRT51D
* Docente: Filipe Freitas
* Descrição:  Acredito que o trabalho proposto foi bem conseguido 
* Data: 9/10/2024
*/

"use strict"//Ajuda a não ter um conjunto de erros


 export function checkUsersValid(goodUsers) {
    return function (users) {
        return users.every(userNow =>  // every para verificar se todos os usuários são validos.
            goodUsers.some(goodUser => goodUser.id === userNow.id)    // Verifica se o usuário está presente na lista

        );
    };
}
