const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
card.addEventListener("click", function(){
    const imgSrc = card.querySelector('img').src
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = imgSrc
    modalOverlay.querySelector(".modal-content").insertAdjacentElement("beforeend", card.querySelector('.card__title'))

})
}


document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
})


