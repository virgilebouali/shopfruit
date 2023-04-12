let fruits = document.getElementById('fruits');
let fruits2 = document.getElementById('fruits2');

window.addEventListener('scroll', () => {

    let value = window.scrollY;
    fruits.style.top = value * 2.5 + "px";
    fruits2.style.top = value * 2.5 + "px";

})


const monTableau = [];

const panier = ["banane", "kiwi", "pancakes"];

panier [2]