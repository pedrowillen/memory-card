document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');
    let cardsBack = document.querySelectorAll('.card-back');

    for (var i = 0; i < cardsBack.length; i++) {
        cardsBack[i].setAttribute('id', `${i}`)
    }

    cards.forEach(card => card.addEventListener('click', handleMove));
})

let clickedCards = []

let clickedCardInner = [];

function handleMove(event) {
    let cardFront = event.target
    let cardInner = cardFront.parentNode;
    let cardBack = cardFront.nextElementSibling;

    cardInner.classList.add('rotate');
    clickedCardInner.push(cardInner);

    clickedCards.push(cardBack);
    verifyClickedCards();
}

function verifyClickedCards() {
    if(clickedCards.length == 2) {
        let firstCard = clickedCards[0];
        let secondCard = clickedCards[1];

        let firstImgCard = firstCard.querySelector('img');
        let secondImgCard = secondCard.querySelector('img');

        if(firstImgCard.src == secondImgCard.src) {
            clickedCards = [];
            clickedCardInner = [];
            console.log('Right!')
        } else {
            console.log('Wrong');
            setTimeout(() => {
                clickedCardInner[0].classList.remove('rotate');
                clickedCardInner[1].classList.remove('rotate'); 
                clickedCardInner = [];
                clickedCards = []
            }, 750);
        }
    }
}