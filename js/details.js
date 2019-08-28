var user;
var geo;
var textsearch;
// resultModals();
getPlaceDetails();
getGeoDetails();
getTextDetails();
// toggleModal(element);
// let output = [];
// var loginBtn = document.querySelector("#loginBtn");
// var registerBtn = document.querySelector("#registerBtn");
// var loginForm = document.querySelector(".modal-one");
// var registerForm = document.querySelector(".modal-two");
// var modalthree = document.querySelector(".modal-three");
// var order = document.querySelector(".custom-order");
// var closecustom = document.querySelector(".custombutton");
// var closedcustom = document.querySelector(".secondcustombutton");

function  getPlaceDetails(){
document.querySelector(".resultInputText").value= localStorage.getItem('place');
     user = JSON.parse(localStorage.getItem("full-result"));
     
    console.log( JSON.parse(localStorage.getItem("full-result")));
    console.log(user);
    console.log(user.length);
    const cardTemplate = user.map(  function(card){
        return(`
        <div class="resultCards">
        <div class="resultCards-image">
            <img src="/washly-new-app-master/img/L1.png" alt="">
        </div>
        <div class="resultCards-content">
        <p>${card.name}</p>
        <p>${card.rating}</p>
            <button href="#" onclick="displayPlaceDetails('${card.place_id}')" class="trigger">View</button>
        </div>
    </div>
        `)
    })

    document.querySelector('.cards').innerHTML = cardTemplate.join('');
    document.querySelector(".totalno").innerHTML=`${user.length}`;
}

function  getGeoDetails(){
  document.querySelector(".resultInputText").value=localStorage.getItem("geoplace");
  geo = JSON.parse(localStorage.getItem("fullresult"));
 console.log( JSON.parse(localStorage.getItem("fullresult")));
 console.log(geo);
 console.log(geo.length);
 const cardsTemplate = geo.map(  function(cards){
     return(`
     <div class="resultCards">
     <div class="resultCards-image">
         <img src="/washly-new-app-master/img/L1.png" alt="">
     </div> 
     <div class="resultCards-content">
     <p>${cards.name}</p>
     <p>${cards.rating}</p>
         <button href="#" onclick="displayPlaceDetails('${cards.place_id}')" class="trigger">View</button>
     </div>
 </div>
     `)
 });

 document.querySelector('.cards').innerHTML = cardsTemplate.join('');
 document.querySelector(".totalno").innerHTML=`${geo.length}`;
}

function  getTextDetails(){
  document.querySelector(".resultInputText").value=localStorage.getItem("textplace");
  textsearch = JSON.parse(localStorage.getItem("searchtext"));
 console.log( JSON.parse(localStorage.getItem("searchtext")));
 console.log(textsearch);
 console.log(textsearch.length);
 const textTemplate = textsearch.map(  function(ans){
     return(`
     <div class="resultCards">
     <div class="resultCards-image">
         <img src="/washly-new-app-master/img/L1.png"alt="">
     </div>
     <div class="resultCards-content">
     <p>${ans.name}</p>
     <p>${ans.rating}</p>
         <button href="#" onclick="displayPlaceDetails('${ans.place_id}')" class="trigger">View</button>
     </div>
 </div>
     `)
 });

 document.querySelector('.cards').innerHTML = textTemplate.join('');
 document.querySelector(".totalno").innerHTML=`${textsearch.length}`;
}

// loginBtn.addEventListener("click", function(e) {
//     e.preventDefault();
//     toggleModal(modal);
// });

// registerBtn.addEventListener("click", function(e) {
//     toggleModal(registerForm);
// });


// function toggleModal(element) {
//     element.classList.toggle("show-modal");
// }

// function resultModals() {

//     var modal = document.querySelector(".modal");
//     var closeButton = document.querySelectorAll(".close-button");

//     // for(let i = 0; i < trigger.length; i++) {
//     //     trigger[i].addEventListener("click", function() {
//     //         toggleModal(modal);
//     //     });
        
//     // }
   
//         closeButton.addEventListener("click", function() {
//             toggleModal(modal);
//         });
// }
function displayPlaceDetails(id) {
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({
      placeId: id
    }, function (place, status) {
      console.log('Place details:', place);
      console.log(status)
    });
  }



if(window.location.pathname == '/result-page.html') {
    resultModals();
}

// function showCustom() {
//   modalthree.classList.toggle("open-custom");
// }
// order.addEventListener("click", showCustom);
// closecustom.addEventListener("click", showCustom);
// closedcustom.addEventListener("click",showCustom);


//Modals
