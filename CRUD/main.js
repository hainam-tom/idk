const menu = ["item1", "item2"];
let cart = [];

function createItem() {
  const newItem = prompt(
    `Please choose the item you want to add to your cart:\nAvailable items: ${menu.join(
      ", "
    )}`
  );
  if (newItem && menu.includes(newItem)) {
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${newItem} has been added to your cart.`);
  } else {
    alert(`Invalid item. Please choose from: ${menu.join(", ")}`);
  }
}

function readCart() {
  alert(`Your menu: ${menu.join(", ")}`);
}

function updateItem() {
  const itemToUpdate = prompt(
    `Available items: ${cart.join(", ")}\nWhich item would you like to update?`
  );
  const itemIndex = cart.indexOf(itemToUpdate);
  if (itemIndex !== -1) {
    const newItem = prompt(
      `Available items: ${cart.join(
        ", "
      )}\nWhat do you want to update "${itemToUpdate}" to?`
    );
    if (menu.includes(newItem)) {
      cart[itemIndex] = newItem;
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`"${itemToUpdate}" has been updated to "${newItem}".`);
    } else {
      alert(`Invalid item. Please choose from: ${menu.join(", ")}`);
    }
  } else {
    alert(`${itemToUpdate} is not in your cart.`);
  }
}

function deleteItem() {
  const itemToDelete = prompt(
    `Your cart: ${cart.join(", ")}\nWhich item would you like to delete?`
  );
  const itemIndex = cart.indexOf(itemToDelete);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${itemToDelete} has been deleted from your cart.`);
  } else {
    alert(`${itemToDelete} is not in your cart.`);
  }
}

function handleOperation() {
  const operation = document.getElementById("operation").value.toUpperCase();

  if (operation === "C") {
    createItem();
  } else if (operation === "R") {
    readCart();
  } else if (operation === "U") {
    updateItem();
  } else if (operation === "D") {
    deleteItem();
  } else {
    alert("Invalid operation. Please enter C, R, U, or D.");
  }
}

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
