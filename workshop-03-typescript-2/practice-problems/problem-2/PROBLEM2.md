# Practice Problem 2: Card Collection
## Current Topic: Functions, Interfaces
[(Functions Lecture Video)](https://www.youtube.com/watch?v=34xpwykL4Uc&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&index=6&ab_channel=NetNinja) (9 mins)
[(Interface Lecture Video)](https://www.youtube.com/watch?v=BysWJvdPVJc&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&index=9&ab_channel=NetNinja) (11 mins)

## Other Topics: Type Basics, Arrays, Array Functions

## Instructions
Refer to the [JavaScript Cheat Sheet](../../cheatSheet.js) and the [TypeScript Cheat Sheet](../../cheatSheet.ts) for reminders on certain concepts.

You will help implement functionality for a card collection in React :\) feel free to be as creative as you want!

Until you have the correct structure implemented, there will be red line errors all over your code. This will help you know when you have implemented the syntax correctly :\)
**Running your code:** Ensure your terminal is in the `card-collections` folder. Run `npm install` to install dependencies, then `npm start` to run the project.

In `main.ts` (ONLY MODIFY THIS FILE):
1. CharacterType Enum:
    Create an Enum for CharacterType (think Pokemon types, like Rock type, Fire type, Grass type, etc. You can be creative!).

2. Character Interface:
    Create an interface for a character with these fields: name, image, type, hp, description (ensure the spelling is EXACTLY like this!!)
    The image field will be the URL of an image of your character (you can find some online).

3. Character Array:
    Create an array of at least 3 characters

4. addCharacter Function
    Write a function that takes arguments for name, image, type, hp, and description. Use them to make a new character and then add that new character to your collection.

5. removeCharacter Function:
    Write a function that takes an argument for name. Find this character in your characters array and remove it. Do this using a method of choice (characters.filter(...) or characters.find(...) are good options!).