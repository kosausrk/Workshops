// Fill in for exercises!
var authorOne = { name: "Dostovesky", age: 101 };
var Book1 = { title: "Life of Pi", isbn: 12022202, author: authorOne };
var authorTwo = { name: "Jhumpa", age: 23 };
var Book2 = { title: "Unaccostmed Earth", isbn: 20203230, author: authorTwo };
var authorThree = { name: "Murakami", age: 65 };
var Book3 = { title: "Norweigen Wood", isbn: 2302432, author: authorThree };
console.log(Book2.author.name); //Prints book author name 
var inventory = [Book1, Book2, Book3];
console.log("The title is: " + inventory[0].title);
console.log(Book1.title + " " + Book2.title + " " + Book3.title);
//Question 3
var addBook = function (userBook) {
    inventory.push(userBook);
};
var Book4 = { title: "XYZ", isbn: 232323, author: authorThree };
addBook(Book4);
console.log(inventory.length);
//Question 4
var calculateInventoryValue = function () {
    for (var i = 0; i < inventory.length; i++) {
        console.log(inventory[i].title);
    }
};
console.log(calculateInventoryValue());
