
function changeConsolelog(){ //ESTUDAR ESTA FUNÇÃO PARA 30/09
    const oldConsolelog= console.log
    console.log=function(p){
        oldConsolelog.call(console, (Date()+ "-" +p))
    }

}
changeConsolelog()
console.log("Y")


/////////////////////////////////////////////////////
////////////////////////////////////////////////////

"use strict" //avisa para quando algo não se devia fazer    USAR O STRICT


function f1(){//Esta undefined porque nao ha nenhuma referencia do objeto
    console.log(this)
}

f1()


const obj = {
    a:"STR",
    m: f1
}

obj.m()

//this é a referência para o próprio objeto


function Student(name,number){
    console.log(this)
    this.name=name
    this.number = number
}

const std= new Student("Filipe", 1234)


function f2(p1,p2){
console.log(`p1 = ${p1} p2 = ${p2}`)
console.log(`this =`, this)

}

f2.call(std, 1, 2)

f2.apply(std, [1,2])


//quando numa thread coloco um loop infinito vai bloquear ->pergunta teste

//Sempre que tiver a trabalhar num modelo assincrono, ter atençáo as chamadas de funções devido ao tempo que cada uma tem


function add ( a,b){
    return a+b;
    
}

console.log("Before add")
const result = console.log(add(2,3))
console.log("After add")
processResult(result)

function addCB( a,  b, cb){
    cb(a+b)
}

console.log("Before addCB")

console.log("After addCB")



//FAZENDO EXPORT CONSIGO FAZER IMPORT NOUTRO LADO




