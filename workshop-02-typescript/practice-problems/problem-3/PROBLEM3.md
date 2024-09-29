# Practice Problem 3: Use an Interface for User Information
## Topic: Interfaces
[(Interface Lecture Video)](https://www.youtube.com/watch?v=BysWJvdPVJc&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&index=9&ab_channel=NetNinja) (11 mins)

## Instructions
Refer to the [JavaScript Cheat Sheet](../../cheatSheet.js) for reminders on certain concepts.

**Compiling your code:** Run `node path/to/typescript/file` in your terminal to execute your code in the terminal.

E.g. if my terminal is in `~/SSE/Workshops`, I will run `node workshop-02-typescript/practice-problems/problem-3/main.ts`

In `main.ts` (TypeScript file):
1. Copy and paste the code from last problem into this file, then comment the code out from the last problem.
2. Create an interface User that has the following properties:
    name
    age
    favoriteFoods
3. Update the displayUserInfo function to take an argument of type User.
4. Create another user object that follows the User interface and pass it to the displayUserInfo function.