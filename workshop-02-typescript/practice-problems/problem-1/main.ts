
function main(){
// Fill in for exercises!
//Benefits of TypeScript 

//1- benefits error feedback 

// ** With TS, once you assign variable type, you cannot change it ever 

/*
let new_age:number = 30 
let new_firstName: string = "Mario"
let new_isFictional: boolean 

new_age = 31

firstName = "Luigi"
isFictional = true 

let planet = "Earth" //TS automatically infers type 
let moons = 1 
let isLarge = false

planet = "Saturn"


moons = 123 //You can change value but NOT type!!! 
isLarge = true 

// null & undefined 

let something: null 
let anotherThing: undefined 


*/ 

//something = 12, this will return an error 


//Arrays & Objects 

let names: string[] = ["Mario", "Luigi", "Peach"] //Only string names are allowed 
let ages: number[] = [25,28,32] //Only number arrays allowed 


names.push("Yoshi")
ages.push(42)
ages.push(69)

//Type Inference 
let fruits = ["apples", "pears", "bananas"] //ts infers the type of the array is fruits 
fruits.push("kiwi")

let myFruit = fruits[3] 
console.log(myFruit)


//Object Literals 
let user: {firstName:string, age:number, id:number, email:string} = { //Strict Types 
    firstName:"mario",
    age:30, 
    id: 1, 
    email: "peach@netninja.dev"
}

user.firstName = "Peach" 
user.email = "peach@netninja.dev"

console.log(user)

    
}

main()