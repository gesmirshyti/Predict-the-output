var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
    crustType : crustType,
    sauceType : sauceType,
    cheeses : cheeses,
    toppings : toppings
};
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin crust", "tomato", ["mozzarella", "cheddar"], ["pepperoni", "mushrooms"]);
console.log(p3);

var p4 = pizzaOven("thick crust", "pesto", ["parmesan", "gouda"], ["chicken", "artichokes", "spinach"]);
console.log(p4);

function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "flat bread", "thin"],
        sauceTypes = ["traditional", "marinara", "buffalo", "pesto"],
        cheesesTypes = ["mozzarella", "feta", "cheddar"],
        toppingsTypes = ["mushrooms", "olives", "onions", "pepperoni", "sausage"];
    
    var randomCrustTypes = crustTypes[Math.floor(Math.random() * crustTypes.length)],
        randomsauceTypes = sauceTypes[Math.floor(Math.random() * sauceTypes.length)],
        randomcheeses = cheesesTypes[Math.floor(Math.random() * cheesesTypes.length)],
        randomtoppings = toppingsTypes[Math.floor(Math.random() * toppingsTypes.length)];
    
    return {
      crustType: randomCrustTypes,
      sauceType: randomsauceTypes,
      cheeses: randomcheeses,
      toppings: randomtoppings 
    };
    
  }
  var randomPizza1 = randomPizza();
  
  console.log(randomPizza1);