"use strict"//Ajuda a não ter um conjunto de erros



import fs from 'fs/promises';
const API_URL = "https://v3.football.api-sports.io/teams?id=";//URL DA API football
const API_KEY = "a586a95bb176da3f9b67a1b9cd158871";//Personal Key

export async function fetchInfo(Id) {
    try {
        const response = await fetch(`${API_URL}${Id}`, {
            method: "GET",
            headers: {
                "x-apisports-key": API_KEY,//inclusão da chave no header
            },
        });

        const data = await response.json();//conversão para  formato json
        console.log(`Resposta -> ${Id}:`, data);
        return {//retornar os objetos pedidos
            id : data.response[0].team.id,
            name : data.response[0].team.name,
            stadium: data.response[0].venue.name
        };
    } catch (error) {
        console.log('ERRO NO FETCH', error); //erro
        return null;
    }
}

async function assyncMain() {
    try {
        const data = await fs.readFile("teams-ids.json"); //leitura do arquivo
        const dataids = JSON.parse(data)["teams-ids"]; //extrai a lista dos ids
        const teamsData = await Promise.all(dataids.map(fetchInfo));//busca dos ids de todos as equipas simultaneamente
        const selectTeams = teamsData.filter(team => team !== null); //filtrar as teams certas
        const json = JSON.stringify({ teams: selectTeams }, null, 2);
        
        await fs.writeFile('assync_teams.json', json);//Escrita do recebido num novo arquivo
        console.log('DONE!!');
    } catch (error) {
        console.log('ERRO NO MAIN', error);//erro
    }
}

assyncMain();


//PARA O TEAMS.JSON
export async function myfetch(url){
    const res = {}
    const newurl = new URL(url);//criar um objeto URL
    const identi = newurl.searchParams.get("id");//extração do ID 

    const File = await fs.readFile("teams.json", "utf8");//leitura do arquivo JSON fornecido
    const datajson = JSON.parse(File);
    const team = datajson["response"].filter(now => now.team.id === parseInt(identi))[0]; //Procura a equipa pelo o ID

    if (team == null)return Promise.reject(new Error(`${identi} erro.`));//Caso não encontre a equipa
    
    res.json = function(){
        return Promise.resolve({response:[team]})//equipa encontrada
    }
    
    return Promise.resolve(res)//retornar o objeto
}

export default myfetch;

