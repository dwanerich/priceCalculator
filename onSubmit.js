const form = document.getElementById('form');
const milkInput = document.getElementById('milkInput');
const breadInput = document.getElementById('breadInput');
const appleInput = document.getElementById('appleInput');
const bananaInput = document.getElementById('bananaInput');
const totalPrice = document.getElementById('totalPrice');
const youSave = document.getElementById('youSave');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let whatYouSave = "$" + 0;
    totalPrice.innerText =
        milkInput.value * Inventory['milk']['unit_price'] +
        breadInput.value * Inventory['bread']['unit_price'] +
        appleInput.value * Inventory['apple']['unit_price'] +
        bananaInput.value * Inventory['banana']['unit_price'];
    
    youSave.innerHTML = whatYouSave
    console.log('submit defaulted');
});
