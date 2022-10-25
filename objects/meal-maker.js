let mealsArray = [
    "spaghetti",
    "roasted lamb with potatoes",
    "sweet potatoes in gravy sauce",
    "Yorkshire pudding",
    "avocado pancakes",
    "meat dumplings",
    "tomato soup with breadcrumbs",
    "baked vegetables",
    "spicy meatballs",
    "spring rolls",
    "shrimp pasta",
];
let priceArray = [
    10,
    5,
    3.5,
    15,
    18,
    12.5,
    7,
    2.5,
    6,
    9.99,
    8.99,
    7.99,
    5.99,
    3.99,
];
let randomMeal = mealsArray[Math.floor(Math.random() * mealsArray.length)];
let randomPrice = priceArray[Math.floor(Math.random() * priceArray.length)];

let menu = {
    _meal: "",
    _price: 0,
    set mealSetter(mealToCheck) {
        if (typeof mealToCheck === "string") {
            return (this._meal = mealToCheck);
        } else {
            return "Please enter a valid meal.";
        }
    },
    set priceSetter(priceToCheck) {
        if (typeof priceToCheck === "number") {
            return (this._price = priceToCheck);
        } else {
            return "Please enter a valid price.";
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return "Today's special is: " + randomMeal + " for $" + randomPrice;
        } else {
            return "Meal or price was not set correctly";
        }
    },
};

menu.mealSetter = "pancakes with nutella";
menu.priceSetter = 10;

console.log(menu.todaysSpecial);
