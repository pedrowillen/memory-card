let images = [
    'images/bootstrap.png',
    'images/css.png',
    'images/electron.png',
    'images/firebase.png',
    'images/html.png',
    'images/javascript.png',
    'images/jquery.png',
    'images/mongo.png',
    'images/node.png',
    'images/react.png',
    'images/bootstrap.png',
    'images/css.png',
    'images/electron.png',
    'images/firebase.png',
    'images/html.png',
    'images/javascript.png',
    'images/jquery.png',
    'images/mongo.png',
    'images/node.png',
    'images/react.png',
];

document.addEventListener('DOMContentLoaded', () => {
    spreadImages(images);
})

function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function spreadImages(images) {
    let cardsBack = document.querySelectorAll('.card-back');
    let selectedIndex = [];

    //generate random number and verify if exists
    while (selectedIndex.length < images.length) {
        let randomIndex = generateRandomIndex(images);
        if(!selectedIndex.includes(randomIndex)) {
            selectedIndex.push(randomIndex);
        }
    }
    
    for(let i = 0; i < cardsBack.length; i++) {
        cardsBack[i].innerHTML = `<img src="${images[selectedIndex[i]]}">`
    }
}