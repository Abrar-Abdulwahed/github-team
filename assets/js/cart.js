// let cart = 0;
// const addToCart = ()=>{
//     localStorage.setItem('cart' , ++cart);
//     document.getElementById("cart-quantity").innerHTML = window.localStorage.getItem('cart');
// }

const cartCounter   = document.getElementById('cart-quantity');
const carts         = document.querySelectorAll('.js-cart');

let storeCart = localStorage.getItem('cart_counter');
let counter   = 0;

const addToCart = () =>
{
    storeCart = storeCart === null ? 0 : storeCart;
    counter   = storeCart;

    counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";

    cartCounter.innerText = counter;

    carts.forEach (element => 
        {
            element.addEventListener('click' , (e) => 
            {
                counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";
                counter++;
                cartCounter.innerText = counter > 9 ? "9+" : counter;
                localStorage.setItem('cart_counter', counter)
            })
    });
};

window.addEventListener("load", addToCart);
