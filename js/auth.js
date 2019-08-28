// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyDgys0RWpOLCXPzuW9B0ph5LOJ56Z_-yZs",
//     authDomain: "washly-auth.firebaseapp.com",
//     databaseURL: "https://washly-auth.firebaseio.com",
//     projectId: "washly-auth",
//     storageBucket: "",
//     messagingSenderId: "32346399713",
//     appId: "1:32346399713:web:743103593c3da9f2"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   var provider = new firebase.auth.GoogleAuthProvider();

//   function googleSignin() {
//      firebase.auth()
     
//      .signInWithPopup(provider).then(function(result) {
//         var token = result.credential.accessToken;
//         var user = result.user;
          
//         console.log(token)
//         console.log(user)
//      }).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
          
//         console.log(errorCode)
//         console.log(errorMessage)
//      });
//   }
  
  

//   function register(e){
//      e.preventDefault();
//    var email=document.getElementById("email").value;
//    var password=document.getAnimations("pass").value;
//    if (email.length < 4) {
//       alert('Please enter an email address.');
//       return;
//     }
//     if (password.length < 4) {
//       alert('Please enter a password.');
//       return;
//     }

//    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
//       var token = data.credential.accessToken;
//         var user = data.user;
//         console.log(user);
//         console.log(token);

//         toggleToSignup();

//    }).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorMessage);
//       console.log(errorCode);
//       // ...
//     });
//   }

var fullname = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('pass');

document.querySelector('.signUp-Form').addEventListener('submit', authe); 
    //prevent the normal submission of the form
  
function authe(event){
    event.preventDefault();

    if (fullname.value !== "" && email.value !== "" && password.value !== "") {
        var user = {
            name: fullname.value,
            email: email.value,
            password: password.value
        }

        if (localStorage.getItem(user.email) === null) {
            localStorage.setItem(user.email, JSON.stringify(user));
            console.log("Hiii")
            window.location.assign("/sign-in.html");
        } else {
            document.querySelector("#statement").innerHTML = "USER ALREADY EXISTS"
        }
    } else {
        document.querySelector("#statement").innerHTML = "Fill inputs please"
    }

   
}
 