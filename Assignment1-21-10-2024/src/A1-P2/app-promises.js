
"use strict"//Ajuda a não ter um conjunto de erros



import fs from 'fs/promises'
const API_URL = "https://v3.football.api-sports.io/teams?id=" //URL DA API football
const API_KEY = "a586a95bb176da3f9b67a1b9cd158871" //Personal Key

//PARA A API
export function fetchInfo(Id) {

    return fetch( `${API_URL}${Id}`, {
        method: "GET",
        headers: {
            "x-apisports-key": API_KEY //inclusão da chave no header
        }
    })

    .then(Res => Res.json()) //conversão para  formato json
    
    .then(data => {
        console.log(`Resposta -> ${Id}:`, data)
        const receiveData = JSON.stringify(data) //conversão para json
        const parseReceive = JSON.parse(receiveData) //string para objeto
        // Estração de informação
        const team = parseReceive.response[0].team   
        const venue = parseReceive.response[0].venue
        return { //retornar os objetos pedidos
            id: team.id, 
            name: team.name,
            stadium: venue.name
            }
            }
        ) 
    //caso erro
    .catch(ERROR => {
        console.log('ERRO NO FETCH', ERROR)
        return null
    }
    )
}



function promisesMain() {
    const promise = fs.readFile("teams-ids.json") //lê o arquivo
    promise.then(data => {
            const parse = JSON.parse(data)
            const dataids = parse["teams-ids"]
            return Promise.all(dataids.map(it => fetchInfo(it)))//busca dos ids de todos as equipas simultaneamente
        }
        )

        .then(dataTeams => {
            const selectTeams = dataTeams.filter(team => team !== null)//filtrar as teams com sucesso
            const json = JSON.stringify({teams: selectTeams}, null , 2) //conversão para JSON
            return fs.writeFile('promises_teams.json', json) //Escrita do recebido num novo arquivo
        })

        .then(() => console.log('DONE!!'))

        .catch(ERROR => console.log('ERRO NO MAIN', ERROR)) //Erro
  }

promisesMain()




// PARA O TEAMS.JSON
export function myfetch(url) {
    const res = {}; 
    const newurl = new URL(url);//criar um objeto URL
    const identi = newurl.searchParams.get("id"); //extração do ID 

    return fs.readFile("teams.json", "utf8")//leitura do arquivo JSON fornecido
        .then(teamsContent => {
            const teamsData = JSON.parse(teamsContent);
            const team = teamsData.response.filter(now => now.team.id === parseInt(identi))[0]; //Procura a equipa pelo o ID

            if (team == null) return Promise.reject(new Error(`${identi} erro.`)); //Caso não encontre a equipa

            res.json = function() {
                return Promise.resolve({ response:[team]}); //equipa encontrada
            };

            return Promise.resolve(res); //retornar o objeto
        })
        .catch(ERROR => console.log('ERRO NO myfetch', ERROR)) //erro
        
    }

export default myfetch; 
