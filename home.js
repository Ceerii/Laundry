// var getAddress = document.getElementById("searchIcon");

// getAddress.addEventListener('click', function(e) { 
//     let geoSuccessHandle = ("Do you want to see your address?")
//     alert(geoSuccessHandle)
//     e.preventDefault();
//     var geoSuccessHandler = function (position) { 
//         console.log(position); 
//         var lat = position.coords.latitude;
//         var lng = position.coords.longitude;
//         var latlng = new google.maps.LatLng(lat, lng);
//         var geocoder = new google.maps.Geocoder();
//         geocoder.geocode({
//             'latLng': latlng},
//          function(results, status) {
//           if (status == google.maps.GeocoderStatus.OK) {
//               if (results[1].formatted_address){
//                   console.log(results[6])
//                   document.getElementById("location").value=results[0].formatted_address;
//               }else{
//                   console.log("nah")
//               }
//           }else{
//               console.log("nah")
//           }
//         })

//   };
      
//       var geoErrorHandler = function (error) { 
//         console.log(error);
//       };
      
    //   var positionOptions = {
    //     enableHighAccuracy: true,
    //     timeout: 1000,
    //     maximumAge: 500
    //   };
    //   navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler, positionOptions);
    // });