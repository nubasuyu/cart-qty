
// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
  // Function to update the total price
  const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll(".card-body").forEach(item => {
          const unitPrice = parseFloat(item.querySelector(".unit-price").textContent.replace("$", ""));
          const quantity = parseInt(item.querySelector(".quantity").textContent);
          total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = `${total.toFixed(2)} $`;
  };

  // Add event listeners to each product card
  document.querySelectorAll(".card-body").forEach(item => {
      const plusButton = item.querySelector(".plus-btn");
      const minusButton = item.querySelector(".minus-btn");
      const deleteButton = item.querySelector(".fa-trash-alt");
      const likeButton = item.querySelector(".like-btn");
      const quantityElement = item.querySelector(".quantity");

      // Handle quantity increase
      plusButton.addEventListener("click", () => {
          let quantity = parseInt(quantityElement.textContent);
          quantityElement.textContent = quantity + 1;
          updateTotalPrice();
      });

      // Handle quantity decrease
      minusButton.addEventListener("click", () => {
          let quantity = parseInt(quantityElement.textContent);
          if (quantity > 0) {
              quantityElement.textContent = quantity - 1;
              updateTotalPrice();
          }
      });

      // Handle item deletion
      deleteButton.addEventListener("click", () => {
          item.remove();
          updateTotalPrice();
      });
 });


  // Initial total price calculation
  updateTotalPrice();
});

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all like buttons
    const likeButtons = document.querySelectorAll('.like-btn');

    // Add a click event listener to each like button
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle the 'liked' class
            this.classList.toggle('liked');

            // Change color based on the 'liked' class
            if (this.classList.contains('liked')) {
                this.style.color = 'red'; // Heart turns red when liked
            } else {
                this.style.color = 'black'; // Heart reverts to black when unliked
            }
        });
    });
});
