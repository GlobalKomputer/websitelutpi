document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartButton = document.getElementById('cart-button');
    const cartSection = document.getElementById('cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.dataset.id;
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.substring(1));
            
            const existingProduct = cart.find(item => item.id === productId);
            
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }
            
            updateCart();
        });
    });

    cartButton.addEventListener('click', () => {
        cartSection.classList.toggle('hidden');
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout functionality not implemented.');
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        cartButton.textContent = `Cart (${cart.length})`;
    }
});
