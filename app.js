let button = document.querySelector("#load-more");
let cardWrapper = document.querySelector(".card-wrapper")


//  Getting info from data
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        // Displaying first 4 cards
        cardMaker(data);
        // Displaying 4 more cards on Load more Button
        button.addEventListener("click", function () {
            for (let i = 0; i < 4; i++) {
                data.shift();
            }
            cardMaker(data);
        });
    })

// Card Maker Function
function cardMaker(data) {
    let cardsPerPage = 4;

    for (let i = 0; i < cardsPerPage; i++) {
        cardWrapper.innerHTML += `
         <div class="insta-card flex-column">
        <div class="insta-card-top flex-row margin-bottom">
            <div class="insta-info flex-row">
                <img src="${data[i].profile_image}" alt=""  class="instagram-profile-image margin-right">
                <div class="insta-card-info flex-column">
                    <h3>${data[i].name}</h3>
                    <p>${timeCutter(data[i].date)}</p>
                </div>
            </div>
            <img src="./icons/icons/instagram-logo.svg" alt="" class="instagram-logo">
        </div>
        <div class="insta-card-middle flex-column margin-bottom">
            <img src="${data[i].image}" alt="" class="instagram-image margin-bottom">
            <p class="insta-caption">${data[i].caption}</p>
        </div>
        <hr>
        <div class="insta-card-bottom flex-row margin-top">
        
              <img src="./icons/icons/heart.svg" alt="">
              <p>${data[i].likes}</p>
        </div>
        </div>
    `
   // Hides the Load More button after all items are displayed
   if (cardsPerPage == data.length) {
    button.style.display = "none";
};
};
};


// Cuts the time from the date
function timeCutter(dateString) {
    let date = new Date(dateString).toDateString();
    return date;
}


var popup = document.getElementById("popup");

var btn = document.getElementById("popupButton");


// When the user clicks on the button, open the popup
btn.onclick = function() {
  popup.style.display = "block";

}


// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}