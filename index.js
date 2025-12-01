// Lab: Scope - Flatburger Restaurant

// ==========================================
// TASK 1: Declare global variable 'burgers'
// ==========================================
// Use const keyword and assign an array with 'Hamburger' and 'Cheeseburger'
const burgers = ['Hamburger', 'Cheeseburger'];


// ==========================================
// TASK 2: Declare global variable 'featuredDrink'
// ==========================================
// Use let keyword and assign the value 'Strawberry Milkshake'
let featuredDrink = 'Strawberry Milkshake';


// ==========================================
// TASK 3: Create addBurger() function
// ==========================================
// Function that creates a function-scoped variable and adds it to burgers array
const addBurger = () => {
  // Create function-scoped variable 'newBurger' with value 'Flatburger'
  const newBurger = 'Flatburger';
  
  // Add newBurger to the burgers array
  burgers.push(newBurger);
};


// ==========================================
// TASK 4: Create if(true) block with block-scoped variable
// ==========================================
// If statement that always executes and adds a burger using block scope
if (true) {
  // Create block-scoped variable 'anotherNewBurger' with value 'Maple Bacon Burger'
  const anotherNewBurger = 'Maple Bacon Burger';
  
  // Add anotherNewBurger to the burgers array
  burgers.push(anotherNewBurger);
}


// ==========================================
// TASK 5: Create changeFeaturedDrink() function
// ==========================================
// Function that changes the value of the global featuredDrink variable
const changeFeaturedDrink = () => {
  // Change featuredDrink to 'The JavaShake'
  featuredDrink = 'The JavaShake';
};


// ==========================================
// TESTING (Optional - for your verification)
// ==========================================
// Uncomment the lines below to test your code

// console.log('Initial burgers:', burgers);
// console.log('Initial featured drink:', featuredDrink);

// addBurger();
// console.log('After addBurger():', burgers);

// console.log('After if(true) block:', burgers);

// changeFeaturedDrink();
// console.log('After changeFeaturedDrink():', featuredDrink);


// ==========================================
// EXPORTS (for CodeGrade testing)
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    burgers,
    featuredDrink,
    addBurger,
    changeFeaturedDrink
  };
}