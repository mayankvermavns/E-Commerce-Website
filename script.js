let total = 0;
let count = 0;

function addToCart(item, price) {
    const cartItems = document.getElementById("cart-items");
    const li = document.createElement("li");
    li.innerText = `${item} - ₹${price}`;
    cartItems.appendChild(li);

    total += price;
    count++;

    document.getElementById("total").innerText = total;
    document.getElementById("item-count").innerText = count;
}
