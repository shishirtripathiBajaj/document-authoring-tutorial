let cardImgs = document.getElementsByClassName("cards-card-image");
cardImgs.array.forEach(cardImg => {
    cardImg.addEventListener("click", function(){
        alert("card image clicked");
    } );
});