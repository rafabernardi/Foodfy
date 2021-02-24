const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
card.addEventListener("click", function(){
    const imgSrc = card.querySelector('img').src
    const card_title = card.querySelector('.card__title p').textContent
    const card_autor = card.querySelector('.card__autor p').textContent
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = imgSrc
    modalOverlay.querySelector("#title").innerHTML = card_title
    modalOverlay.querySelector("#autor").innerHTML = card_autor

})
}


document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
})


