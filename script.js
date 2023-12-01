// Dummy chocolate data
const chocolateData = [
    { name: 'Milk Chocolate', price: 2.5 },
    { name: 'Dark Chocolate', price: 3.0 },
    { name: 'White Chocolate', price: 2.0 },
    {name: ' Crunch Chocolate', price: 2.0},
    { name: 'Baking Chocolate', price: 3.5 },
    { name: ' Chocolate Chips', price: 3.0 },
    { name: ' Chocolate bar', price: 2.0 },
    {name: ' Ruby Chocolate', price: 2.0},
    { name: 'Compound Chocolate', price: 2.5 },
    { name: 'Semisweet Chocolate', price: 3.0 },
    { name: 'Cocoa Chocolate', price: 2.0 },
    {name: ' Bittersweet Chocolate', price: 2.0}
    // Add more chocolates as needed
];

let selectedChocolates = [];
let totalPrice = 0;

function renderChocolateOptions() {
    const chocolateOptionsContainer = document.getElementById('chocolate-options');
    chocolateOptionsContainer.innerHTML = '';

    chocolateData.forEach(chocolate => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label>${chocolate.name}</label>
            <button onclick="handleAddClick('${chocolate.name}', ${chocolate.price})">Add</button>
        `;
        chocolateOptionsContainer.appendChild(div);
    });
}

function handleAddClick(name, price) {
    if (selectedChocolates.length >= 8) {
        openModal();
        return;
    }

    selectedChocolates.push({ name, price });
    totalPrice += price;

    updateSelectedChocolates();
    updateTotalPrice();
}

function updateSelectedChocolates() {
    const selectedList = document.getElementById('selected-list');
    selectedList.innerHTML = '';

    selectedChocolates.forEach(chocolate => {
        const li = document.createElement('li');
        li.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
        selectedList.appendChild(li);
    });
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function openModal() {
    const modal = document.getElementById('myModal');
    modal.classList.add('show-modal');
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.classList.remove('show-modal');
}

// Render initial chocolate options
renderChocolateOptions();
