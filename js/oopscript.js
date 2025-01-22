// Class representing a Product
class Product {
  constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
  }
}

// Class representing an item in the shopping cart
class ShoppingCartItem {
  constructor(product, quantity = 1) {
      this.product = product;
      this.quantity = quantity;
  }

  // Method to calculate the total price for this item
  getTotalPrice() {
      return this.product.price * this.quantity;
  }
}

// Class representing the Shopping Cart
class ShoppingCart {
  constructor() {
      this.items = [];
  }

  // Method to add an item to the cart
  addItem(product, quantity = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
          existingItem.quantity += quantity;
      } else {
          this.items.push(new ShoppingCartItem(product, quantity));
      }
  }

  // Method to remove an item from the cart
  removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Method to get the total price of all items in the cart
  getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to display items in the cart
  displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach(item => {
          console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice().toFixed(2)}`);
      });
      console.log(`Total: $${this.getTotalPrice().toFixed(2)}`);
  }
}

// Example usage
const product1 = new Product(1, "Baskets", 100);
const product2 = new Product(2, "Socks", 20);
const product3 = new Product(3, "Bag", 50);

const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 3);
cart.addItem(product3);

// Displaying the cart
cart.displayCart();

// Removing an item from the cart
cart.removeItem(2);

// Displaying the updated cart
cart.displayCart();
