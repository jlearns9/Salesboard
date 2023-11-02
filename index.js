let products = [
    {
    name: "productA",
    emoji: "⭐",
    revenue: 200,
    commision: 50
    },
    {
    name: "productB",
    emoji: "🔥",
    revenue: 300,
    commision: 75
    }
]

const fireSale = document.getElementById('fire-sale')
const starSale = document.getElementById('star-sale')
const liveSales = document.getElementById('live-sales')
const totalSales = document.getElementById('sales-array')
const liveAchievements = document.getElementById('live-achievements')
const achievements = document.getElementById('achievements')
const totalRevenue = document.getElementById('total-revenue')
const totalCommision = document.getElementById('total-commision')

let salesCount = localStorage.getItem('salesCount') ? parseInt(localStorage.getItem('salesCount')) : 0;
let revenueCount = localStorage.getItem('revenueCount') ? parseInt(localStorage.getItem('revenueCount')) : 0;
let commisionCount = localStorage.getItem('commisionCount') ? parseInt(localStorage.getItem('commisionCount')) : 0;


function salesTicker() {
    salesCount += 1
    liveSales.innerHTML = `Live Sales - ${salesCount}`
}

function handleSale(productIndex) {
    totalSales.innerHTML += products[productIndex].emoji;
    salesTicker();
    
    revenueCount += products[productIndex].revenue;
    totalRevenue.innerHTML = `$ ${revenueCount}`;
    
    commisionCount += products[productIndex].commision;
    totalCommision.innerHTML = `$ ${commisionCount}`;
    
    if (salesCount > 15 && revenueCount > 2500) {
        achievements.innerHTML = '🔔 💰 🏆';
        liveAchievements.innerHTML = 'Live Achievements - 3'
    } else if (salesCount > 0 && revenueCount > 2500) {
        achievements.innerHTML = '🔔 💰';
        liveAchievements.innerHTML = 'Live Achievements - 2'
    } else if (salesCount > 0) {
        achievements.innerHTML = '🔔';
        liveAchievements.innerHTML = 'Live Achievements - 1'
    }
}

starSale.addEventListener('click', function() {
    handleSale(0);
});

fireSale.addEventListener('click', function() {
    handleSale(1);
});


//##### CHATGPT CREDIT #####//
const container = document.querySelector('.money-fall');

for (let i = 0; i < 5; i++) {
    const money = document.createElement('span');
    money.innerHTML = "$";
    let randomLeft = Math.random() * window.innerWidth;  // Use window's innerWidth
    let randomDuration = Math.random() * 5 + 5;
    money.style.left = randomLeft + 'px';
    money.style.animationDuration = randomDuration + 's';
    container.appendChild(money);
}