
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