document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed");
});

function buttonClicked() {
    let product = document.getElementById('selectItem');
    let count = document.getElementById('inputCount');
    let display = document.getElementById('calc-screen');

    display.value = parseInt(product.value) * parseInt(count.value);
};