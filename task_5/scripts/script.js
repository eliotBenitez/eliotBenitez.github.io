let list = {
    1: 120,
    2: 64,
    3: 89,
    4: 349,
    5: 89,
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed");
});

function buttonClicked() {
    let product = document.getElementById('selectItem');
    let count = document.getElementById('inputCount');
    let display = document.getElementById('calc-screen');

    display.value = list[parseInt(product.value)] * parseInt(count.value);
};