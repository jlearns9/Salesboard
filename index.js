let products = [
    {
    name: "productA",
    emoji: "⭐ ",
    revenue: 200,
    commision: 50
    },
    {
    name: "productB",
    emoji: "🔥 ",
    revenue: 300,
    commision: 75
    }
]

const fireSale = document.getElementById('fire-sale');
const starSale = document.getElementById('star-sale');
const liveSales = document.getElementById('live-sales');
const totalSales = document.getElementById('sales-array');
const liveAchievements = document.getElementById('live-achievements');
const achievements = document.getElementById('achievements');
const totalRevenue = document.getElementById('total-revenue');
const totalCommision = document.getElementById('total-commision');

// Retrieve the counts from localStorage or initialize to 0 if they don't exist
let salesCount = localStorage.getItem('salesCount') ? parseInt(localStorage.getItem('salesCount')) : 0;
let revenueCount = localStorage.getItem('revenueCount') ? parseInt(localStorage.getItem('revenueCount')) : 0;
let commisionCount = localStorage.getItem('commisionCount') ? parseInt(localStorage.getItem('commisionCount')) : 0;
let savedSalesEmojis = localStorage.getItem('salesEmojis') || "";

totalSales.innerHTML = savedSalesEmojis

function updateDisplay() {
    liveSales.innerHTML = `Live Sales - ${salesCount}`;
    totalRevenue.innerHTML = `$ ${revenueCount}`;
    totalCommision.innerHTML = `$ ${commisionCount}`;
    
    if (salesCount > 15 && revenueCount > 2500) {
        achievements.innerHTML = '🔔 💰 🏆';
        liveAchievements.innerHTML = 'Live Achievements - 3';
    } else if (salesCount > 0 && revenueCount > 2500) {
        achievements.innerHTML = '🔔 💰';
        liveAchievements.innerHTML = 'Live Achievements - 2';
    } else if (salesCount > 0) {
        achievements.innerHTML = '🔔';
        liveAchievements.innerHTML = 'Live Achievements - 1';
    }
}

// Initial display on page load
updateDisplay();

function salesTicker() {
    salesCount += 1;
    localStorage.setItem('salesCount', salesCount); // Update localStorage
    updateDisplay();
}

function handleSale(productIndex) {
    let productEmoji = products[productIndex].emoji;
    savedSalesEmojis += productEmoji; // Add the new emoji to the saved emojis
    totalSales.innerHTML = savedSalesEmojis;
    localStorage.setItem('salesEmojis', savedSalesEmojis); // Save the updated emojis to localStorage
    
    revenueCount += products[productIndex].revenue;
    localStorage.setItem('revenueCount', revenueCount); // Update localStorage

    commisionCount += products[productIndex].commision;
    localStorage.setItem('commisionCount', commisionCount); // Update localStorage

    salesTicker();
}

starSale.addEventListener('click', function(event) {
    handleSale(0);
    addRippleEffect(event.currentTarget);
});

fireSale.addEventListener('click', function(event) {
    handleSale(1);
    addRippleEffect(event.currentTarget);
});

//##### Money Effect #####//
const container = document.querySelector('.money-fall');

for (let i = 0; i < 5; i++) {
    const money = document.createElement('span');
    money.innerHTML = "$";
    let randomLeft = Math.random() * window.innerWidth;
    let randomDuration = Math.random() * 5 + 5;
    money.style.left = randomLeft + 'px';
    money.style.animationDuration = randomDuration + 's';
    container.appendChild(money);
}

//##### Ripple Effect #####//
function addRippleEffect(button) {
    button.classList.add('ripple');

    const removeRipple = () => {
        button.classList.remove('ripple');
        button.removeEventListener('animationend', removeRipple);
    }

    button.addEventListener('animationend', removeRipple);
}