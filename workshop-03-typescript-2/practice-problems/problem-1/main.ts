// Fill in for exercises!

//Functions example

// function addTwoNumbers(a:number, b:number){
//     return a + b 
// }


// const divide = (a:number, b:number): number => {
//     return a / b 
// }


//Making a Book & Author Interface (Object) 


interface Author {
    name: string, 
    age: number
}

interface Book{
    title: string,
    isbn: number,
    author: Author
}




const authorOne: Author = {name: "Dostovesky", age: 101}

const Book1: Book = {title:"Life of Pi", isbn: 12022202, author: authorOne}

const authorTwo: Author = {name: "Jhumpa", age: 23}

const Book2: Book = {title: "Unaccostmed Earth", isbn: 20203230, author: authorTwo}

const authorThree: Author = {name: "Murakami", age: 65}
const Book3: Book = {title: "Norweigen Wood", isbn: 2302432, author:authorThree}


console.log(Book2.author.name) //Prints book author name 


let inventory: Book[] = [Book1, Book2, Book3]

console.log("The title is: " + inventory[0].title)


console.log(Book1.title + " " + Book2.title + " " + Book3.title)


//Question 3
let addBook = (userBook: Book) =>{
    inventory.push(userBook)
}



const Book4: Book = {title:"XYZ", isbn:232323, author:authorThree}

addBook(Book4)
console.log(inventory.length)


//Question 4
let calculateInventoryValue = ()=>{
    for (let i =0; i < inventory.length;i++){
        console.log(inventory[i].title)
    }
}


calculateInventoryValue() 