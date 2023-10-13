const prices = {
    "clear_laptop": 1200,
    "change_RAM": {
        1: 4200,
        2: 8200,
        3: 12900
    },
    "change_os": {
        "minimal": 1800,
        "full": 3600
    }
};

function buttonClicked() {
    let product = document.getElementById('selectItem');
    let count = document.getElementById('inputCount');
    let display = document.getElementById('calc-screen');

    display.value = parseInt(product.value) * parseInt(count.value);
};

function update() {
    let radio = document.querySelector('input[name = radioList]:checked');
    let select = document.getElementById('selectRAM');
    let chbox = document.getElementById('checkFull');
    let chbox_div = document.getElementById('checkboxFull');
    let countProduct = document.getElementById('countProducts');
    let display = document.getElementById('calc-display');

    switch (radio.value) {
        case "1":
            select.style.display = "none";
            chbox.style.display = "none";

            display.value = prices['clear_laptop'] * parseInt(countProduct.value);

            break;
        case "2":
            select.style.display = "flex";
            chbox_div.style.display = "none";

            display.value = prices['change_RAM'][parseInt(select.value)] * parseInt(countProduct.value);

            break;
        case "3":
            select.style.display = "none";
            chbox_div.style.display = "flex";

            if (chbox.checked) {
                display.value = prices['change_os']['minimal'] * parseInt(countProduct.value);
            } else {
                display.value = prices['change_os']['full'] * parseInt(countProduct.value);
            }

            break;
        default:
            console.log("ошибка");
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed");

    let radios = document.getElementsByName('radioList');
    radios.forEach((e) => {
        e.addEventListener("change", update);
    });

    let checkbox = document.getElementById('checkFull');
    checkbox.addEventListener("change", update);

    let select = document.getElementById('selectRAM');
    select.addEventListener("change", update);

    let countProduct = document.getElementById('countProducts');
    countProduct.addEventListener("change", update)
});

update();