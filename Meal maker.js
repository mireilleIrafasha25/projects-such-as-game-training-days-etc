const menu = {
    _meal: '',
    _price: 0,
    // Setter method for meal
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        } else {
            console.log('Please provide a valid meal name.');
        }
    },
    // Setter method for price
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number' && priceToCheck >= 0) {
            this._price = priceToCheck;
        } else {
            console.log('Please provide a valid price.');
        }
    },
    // Getter method for today's special
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price.toFixed(2)}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
};

// Example usage:
menu.meal = 'Spaghetti';
menu.price = 5;

console.log(menu.todaysSpecial); // Output: Today's Special is Spaghetti for $5.00!
