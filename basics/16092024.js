console.log('Hello World')

let a = "STR" //não é para usar o var
console.log(a)
console.log(typeof (a))

let b
console.log(b)
console.log(typeof (b))

b = null
console.log(b)
console.log(typeof (b))

console.log("31" + 2)
console.log("31" - 2)
console.log(typeof ("31" - 2))

const k = "21"
const z = 21
console.log(k == z)
console.log(k === z)


let array = [123,,"STR"]
console.log(array.length)
console.log(array)
console.log(array[1])
console.log(array[2])


array[100]=100
console.log(array.length)

array.push("last")
console.log(array.length)
console.log(array[101])

array[102] = function () {return "func in 102"}

console.log(array.length)
console.log(array[102]())
console.log(typeof(array[102]()))

// PODE SE ACRESCENTAR PROPRIEDADES A QUAISQUER OBJETOS

array.name="XPTO"
console.log(array.name)


const std1= {studentName: "Filipe", number:12}
console.log(std1)

std1.email = "fartodisto@gmail.com"
console.log(std1)

delete std1.studentName
console.log(std1)

function createStudent(name, number){
    const std= {}
    std.studentName = name
    std.number= number

    return std
}

const std2 = createStudent("std2", 2)
const std3 = createStudent("std3", 3)
std2.email = "fartodisto2@gmail.com"
console.log(std2)
console.log(std3)

function showProps( obj){ //vai iterar pelos valores do array
    for(let p in obj){
        console.log(p + " : " + obj[p]) // p é o nome da propriedade
    }
}
showProps(std2) 

console.log(std2.studentName)       
console.log(std2["studentName"])
//linha 81 e 82 igual



//funções 
function f1(){
    console.log("Hello World")
}
f1()

function f2(){
    return "Hello World"
}
console.log(f2())

const f = function(){ return "Hello World"}
console.log(f())

console.log(f2.name)
f2.x="PROP X"
f2.m=function(){ return "FUNC M"}
console.log(f2.x)
console.log(f2.m())


function f4 (p1,p2,p3,p4){
    console.log("Start f4")
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
    console.log("p3 = " + p3)
    console.log("p4 = " + p4)

}
f4()
f4(1)
f4(1,2)
f4(1,2,3)
f4(1,2,3,4)

