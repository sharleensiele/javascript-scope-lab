// TASK 1: Declare global variable 'burgers'
const burgers = ['Hamburger', 'Cheeseburger'];

// TASK 2: Declare global variable 'featuredDrink'
let featuredDrink = 'Strawberry Milkshake';

// TASK 3: Create addBurger() function
const addBurger = () => {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
};

// TASK 4: Create if(true) block with block-scoped variable
if (true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// TASK 5: Create changeFeaturedDrink() function
const changeFeaturedDrink = () => {
  featuredDrink = 'The JavaShake';
};

// EXPORTS (for CodeGrade testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    burgers,
    featuredDrink,
    addBurger,
    changeFeaturedDrink
  };
}
