let images = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',
]

document.addEventListener('DOMContentLoaded', () => {
    spreadImages(images);
})

function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function spreadImages(images) {
    let cardsBack = document.querySelectorAll('.card-back');
    images.forEach(img => images.push(img));
    let selectedIndex = [];

    //generate random number and verify if exists
    while (selectedIndex.length < images.length) {
        let randomIndex = generateRandomIndex(images);
        if (!selectedIndex.includes(randomIndex)) {
            selectedIndex.push(randomIndex);
        }
    }

    for (let i = 0; i < cardsBack.length; i++) {
        cardsBack[i].innerHTML = `<img src="images/${images[selectedIndex[i]]}.png">`
    }
}