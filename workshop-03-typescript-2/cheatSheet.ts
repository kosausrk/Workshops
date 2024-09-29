function typescriptCheatSheet() {
    /**
     * Basic Types
     */
    // Basic Types: string, number, boolean, null, undefined
    let myLife: string = "Please help I spent 14 hours on the SWEN 331 fuzzer project help me";
    let theMeaningOfLife: number = 42;
    let areYouOnTechCommitteeYoudBetterBeIHopeYouFilledOutTheSignupForm: boolean = true;
    let lifesPurpose = undefined;
    let myFreeTimeAsASoftwareEngineeringMajor = null;

    // Type union: when things can have multiple types
    let maybeAStringOrSomethingIDK: string | boolean | null = null;
    maybeAStringOrSomethingIDK = "I'm a string now :)";
    maybeAStringOrSomethingIDK = false;


    /**
     * Arrays
     */
    // Arrays: hold multiple values of a specific type
    let classCodes: number[] = [101, 123, 124, 250, 261, 256, 262, 344, 331, 340]
    let literallyAnything: any[] = [':)', false, 0, null, 'hehehehe']

    // Array methods
    classCodes.push(444) // now 444 is part of the array
    let swen444: number | undefined = classCodes.pop(); // REMOVES and returns the last element of the array

    
    /**
     * Object Literals
     */
    // Basic Object: Define the shape using types
    let person: { name: string; age: number } = {
        name: "Your name",
        age: 21
      };

    // Optional Properties: Use ? to denote optional properties
    let user: { name: string; age?: number } = {
        name: "Your name" // you don't have an age you are ageless
      };
}