# Practice Problem 1: Book Inventory Management System
## Current Topic: Functions, Interfaces
[(Functions Lecture Video)](https://www.youtube.com/watch?v=34xpwykL4Uc&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&index=6&ab_channel=NetNinja) (9 mins)
[(Interface Lecture Video)](https://www.youtube.com/watch?v=BysWJvdPVJc&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&index=9&ab_channel=NetNinja) (11 mins)

## Other Topics: Type Basics, Arrays

## Instructions
Refer to the [JavaScript Cheat Sheet](../../cheatSheet.js) and the [TypeScript Cheat Sheet](../../cheatSheet.ts) for reminders on certain concepts.

**Running your code:** Run `node path/to/typescript/file` in your terminal to execute your code in the terminal.

E.g. if my terminal is in `~/SSE/Workshops`, I will run `node workshop-02-typescript/practice-problems/problem-2/main.ts`

In `main.ts` (TypeScript file):
1. Create an interface named `Book` that represents a book object. Each Book should have the following properties:
        title (string): The title of the book.
        author (string): The author of the book.
        price (number): The price of the book.
        quantity (number): The number of copies in stock.
        isDigital (boolean): Indicates if the book is available in digital format.

2. Create an array named `inventory` to store a list of `Book` objects. Populate this array with at least three books.

3. Write a function named `addBook` that takes a `Book` object as a parameter and adds it to the invenctory array.

4. Write a function named `calculateInventoryValue` that takes no parameters and returns the total value of all books in the inventory (price * quantity).
    Bonus: use `forEach` to do this!

5. Write a function called `getDigitalBooks` that takes no parameters and returns an array of all the books that are digital.
    Bonus: use `filter` to do this!

6. Call your functions at the bottom to test them :>