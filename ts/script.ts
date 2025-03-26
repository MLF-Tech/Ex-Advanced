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
    txt2 += men + " ";
}
console.log(txt2);


// // Display the data in the browser
// const outputElement = document.getElementById("output");
    
// // outputElement?.innerHTML = txt2;

// if (outputElement) {
//     outputElement.innerHTML = txt2; 
// } else {
//     console.error("Element with ID 'output' not found.");
// }

// Definition of subcategories with let
// let appetizers: string[] = ["Bruschetta", "Tagesuppe", "Tagliere di formaggi"];
// let mainCourses: string[] = ["Pasta Carbonara", "Pizza Margherita", "Osso Buco"];
// let secondCourses: string[] = ["Grilled Meat", "Seafood Special", "Classic Italian"];
// let desserts: string[] = ["Tiramisu", "Panna Cotta", "Delicate Pastries"];
// let beverages: string[] = ["Italian Wine", "Aperitifs", "Non-Alcoholic Drinks"];
// let coffees: string[] = ["Espresso", "Cappuccino", "Specialty Brews"];

//We could also use a mixed array for the let ones to show the prices, for example:
//let appetizers:Array<string | number> = ["Bruschetta", 10, "Tagesuppe", 5, "Tagliere di formaggi", 15]



// ALTERNATIVE APPROACH WITH ARRAY OF OBJECTS

interface MenuCategory {
    title: string;
    description: string;
    img: string;
  }
  
  const menuCategories: MenuCategory[] = [
    {
      title: "Appetizers",
      description: "Delight in a fusion of Viennese charm and Italian flavors.",
      img: "/img/appetizers-6281830_1280.jpg"
    },
    {
      title: "Main Course",
      description: "Savor the heart of Italy with our exquisite main courses.",
      img: "/img/maincourse_tagliatelle-1632153_1280.jpg"
    },
    {
      title: "Second Course",
      description: "Indulge in our expertly prepared second courses.",
      img: "/img/second course_schnitzerl.jpeg"
    },
    {
      title: "Desserts",
      description: "End on a sweet note with our irresistible desserts.",
      img: "img/cookies-4053771_1280.jpg"
    },
    {
      title: "Beverages",
      description: "Complement your meal with our selection of fine drinks.",
      img: "img/beverages.jpeg"
    },
    {
      title: "Coffee",
      description: "Experience a fusion of true Italian & Viennese coffee culture.",
      img: "img/coffee.jpeg"
    }
  ];


// APPROACH 1: Displaying via Bootstrap cards
  
  // Select the container to display the cards
  const cardContainer = document.getElementById("card-container");
  
  // Loop through menuCategories and generate the HTML for the cards
  let cardHTML = "";
  menuCategories.forEach((category) => {
    cardHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${category.img}" class="card-img-top" alt="${category.title}">
          <div class="card-body">
            <h5 class="card-title">${category.title}</h5>
            <p class="card-text">${category.description}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  // Insert the cards into the card container
  if (cardContainer) {
    cardContainer.innerHTML = cardHTML;
  }
  



// APPROACH 2: Displaying via Bootstrap slides
// this feels way more complicated and complex. slides are displayed but the indicators and controlls are not; think they have to be added dynamically via typescript too;

 
// Get the carousel inner container element
const carouselInner = document.querySelector('.carousel-inner');

// Initialize the carousel items
let carouselItems = '';

// Loop through the array and create the carousel items
menuCategories.forEach((category, index) => {
    const isActive = index === 0 ? 'active' : '';  // Set the first item as active
    carouselItems += `
        <div class="carousel-item ${isActive}">
            <img class="d-block mx-auto w-60" src="${category.img}" alt="${category.title}">
            <div class="carousel-caption d-none d-md-block">
                <h2 class="display-5">${category.title}</h2>
                <p class="h3">${category.description}</p>
            </div>
        </div>
    `;
});

// Add the carousel items to the carousel-inner
if (carouselInner) {
    carouselInner.innerHTML = carouselItems;
} else {
    console.error("Element with class 'carousel-inner' not found.");
}
