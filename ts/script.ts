// Define for each variable/array the data type with a strict data type definition
const menu: string [] = ["Appetizers", "Main Course", "Second Course", "Desserts", "Beverages", "Coffee"];

//list the array items
console.log(menu)

//Displaying data with loops
//forEach
menu.forEach(function(value, index){
    console.log(`This is our menu ${value} with index ${index}`);
});

//Do we want also trying the other loops? Do you want to try one?
//for in
// COMM JUlIA: did the for in Loop here; but don't know if it really makes sense to use it as this loop is actually for objects;


let txt1: string ="";

for (const x in menu){
    txt1 += menu[x];
}

console.log(txt1);


//for.of
// COMM JULIA: did the for of loop here. :)

let txt2: string = "";

for (const men of menu) {
   txt2 +=  men + " ";
}

console.log(txt2);




// Define some appropriate value as const:
// At this point I would suggest to call menu as const and then create variables (let) for each course, like this:

// Definition of menu as Const
// const menu: string[] = ["Appetizers", "Main Course", "Second Course", "Desserts", "Beverages", "Coffee"];

// Definition of subcategories with let
// let appetizers: string[] = ["Bruschetta", "Tagesuppe", "Tagliere di formaggi"];
// let mainCourses: string[] = ["Pasta Carbonara", "Pizza Margherita", "Osso Buco"];
// let secondCourses: string[] = ["Grilled Meat", "Seafood Special", "Classic Italian"];
// let desserts: string[] = ["Tiramisu", "Panna Cotta", "Delicate Pastries"];
// let beverages: string[] = ["Italian Wine", "Aperitifs", "Non-Alcoholic Drinks"];
// let coffees: string[] = ["Espresso", "Cappuccino", "Specialty Brews"];

//We could also use a mixed array for the let ones to show the prices, for example:
//let appetizers:Array<string | number> = ["Bruschetta", 10, "Tagesuppe", 5, "Tagliere di formaggi", 15]




// COMM JULIA: i agree with you that we should declare the menu as a const! I did already change it at the top. hope that's fine for you. I like the subcategories. But not sure if we need them. what will we do with them? let's talk about it tomorrow! :)