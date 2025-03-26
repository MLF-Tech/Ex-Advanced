// Define for each variable/array the data type with a strict data type definition
// Define a meaninful Const
const menu: string [] = ["Appetizers", "Main Course", "Second Course", "Desserts", "Beverages", "Coffee"];

//list the array items
console.log(menu)

//Displaying data with loops
//forEach
menu.forEach(function(value, index){
console.log(`This is our menu ${value} with index ${index}`);
});

//for in
let txt1: string ="";
for (const x in menu){
    txt1 += menu[x];
}
console.log(txt1);

//for.of

let txt2: string = "";
for (const men of menu) {
    txt2 +=  men + " ";
}
console.log(txt2);


// Display the data in the browser
const outputElement = document.getElementById("output");
    
// outputElement?.innerHTML = txt2;

if (outputElement) {
    outputElement.innerHTML = txt2; 
} else {
    console.error("Element with ID 'output' not found.");
}

// Definition of subcategories with let
// let appetizers: string[] = ["Bruschetta", "Tagesuppe", "Tagliere di formaggi"];
// let mainCourses: string[] = ["Pasta Carbonara", "Pizza Margherita", "Osso Buco"];
// let secondCourses: string[] = ["Grilled Meat", "Seafood Special", "Classic Italian"];
// let desserts: string[] = ["Tiramisu", "Panna Cotta", "Delicate Pastries"];
// let beverages: string[] = ["Italian Wine", "Aperitifs", "Non-Alcoholic Drinks"];
// let coffees: string[] = ["Espresso", "Cappuccino", "Specialty Brews"];

//We could also use a mixed array for the let ones to show the prices, for example:
//let appetizers:Array<string | number> = ["Bruschetta", 10, "Tagesuppe", 5, "Tagliere di formaggi", 15]

