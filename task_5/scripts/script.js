document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed");
});

function buttonClicked() {
    let product = document.getElementById('selectItem');
    let count = document.getElementById('inputCount');
    let display = document.getElementById('calc-screen');

    if (/^\d+$/.test(count.value)) {
        display.value = parseInt(product.value) * parseInt(count.value);
    } else {
        alert("Для ввода нужно указывать числа!")
    }
};