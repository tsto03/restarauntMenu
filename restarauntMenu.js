let menuItem = {
    name: 'Kale Caesar Salad',
    nickName: 'All Hail Kale',
    referenceID: 'SLD001',
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    whenToOrder: 'Available for lunch and dinner only', 
    highInCalories: false,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons', 'Lemon juice'],
    numIngredients: function() {
      return this.ingredients.length;
    }
  }


  // START HERE
// TEXT 1: Howdy friend!  Thanks sooo much for doing this. I'm thinking this all out loud, so be
// patient with me.  Here's the work I attempted so far, but I need your help to get this right.
// **It would be nice to track the year I added the dish to my menu. My salad was added in 2017**.
menuItem.yearAdded = 2017; 

// function item (){
//   console.log(`Kale has been menu king since ${this.yearAdded}!`)
// }



// TEXT 2: Although we provide breakfast, lunch, and dinner, not all dishes are available around the clock.
// Please add something to track which menu the dish will be featured on. The Caesar salad is for
// lunch and dinner
menuItem.whenToOrder = 'Available for lunch and dinner only!'; 



// TEXT 3: Yikes! When I first did the menu, I broke dishes down to low and high in calories.  I don't
// like this anymore, so can you remove it and change it to the number of calories?
// The salad stands at 560 calories
delete menuItem.highInCalories; 

menuItem.numOfCalories = 560; 



// TEXT 4: Don't you think the nickname is stupid?  Remove it.  Sooo not needed.
delete menuItem.nickName; 



// TEXT 5: OMG!  I forgot to add lemon juice to the list of ingredients.  Can you add this?
// *added inside of object brackets 



// **WILL PRINT key/value pairs for menuItem
console.log("\n\n******menuItem Object******");
Object.entries(menuItem).forEach(([key, value]) => {
  if (key != 'numIngredients')
    console.log(`${key}: ${value}`)
  });
console.log(`Number of ingredients = ${menuItem.numIngredients()}`);
  