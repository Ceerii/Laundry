// var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// // function windowOnClick(event) {
// //     if (event.target === modal) {
// //         toggleModal();
// //     }
// // }


// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// // window.addEventListener("click", windowOnClick);

// // result-sign-in-modal
// var modalone = document.querySelector(".modal-one");
// var start = document.querySelector(".start");
// var closeBtn = document.querySelector(".close-btn");

// function openMod() {
//     modalone.classList.toggle("open-modal");
// }

// // function clickWindow(event) {
// //     if (event.target === modalone) {
// //         openMod();
// //     }
// // }


// start.addEventListener("click", openMod);
// closeBtn.addEventListener("click", openMod);
// // window.addEventListener("click", clickWindow);

// // result-sign-up-modal
// var modaltwo = document.querySelector(".modal-two");
// var open = document.querySelector(".open");
// var closeBtns = document.querySelector(".closebtn");

// function showMod() {

//     modaltwo.classList.toggle("open-up-modal");
// }

// // function windowOpen(event) {
// //     if (event.target === modaltwo) {
// //         showMod();
// //     }
// // }


// open.addEventListener("click", showMod);
// closeBtns.addEventListener("click", showMod);
// // window.addEventListener("click", windowOpen);
// // custom-order

// var modalthree = document.querySelector(".modal-three");
// var order = document.querySelector(".custom-order");
// var closecustom = document.querySelector(".custombutton");
// var closedcustom = document.querySelector(".secondcustombutton")


// function showCustom() {
//   modalthree.classList.toggle("open-custom");
// }
// order.addEventListener("click", showCustom);
// closecustom.addEventListener("click", showCustom);
// closedcustom.addEventListener("click",showCustom);

var modal = document.querySelector(".modal");
var loginbutton = document.querySelector(".loginBtn");
var closeButton = document.querySelector(".close-button");


function toggleModal() {
      console.log("working");
    modal.classList.toggle("show-modal");
  
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

loginbutton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick); 