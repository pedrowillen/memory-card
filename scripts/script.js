document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');
    let cardsBack = document.querySelectorAll('.card-back');
    
    for(var i = 0; i < cardsBack.length; i++) {
        cardsBack[i].setAttribute('id', `${i}`)
    }

    cards.forEach(card => card.addEventListener('click', handleMove));
})

function handleMove (event) {
    console.log(event.target)
}