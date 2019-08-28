var input = document.querySelector('#location');
var place;
var getAddress = document.getElementById("searchIcon");
var latlng;
var laundryPlaces;
var service;
var placeIds;
var getResults;
var inputValue;
var getSearchText;
var getTextResults;
var searchText = document.querySelector('#search-container-button');


var autocomplete = new google.maps.places.Autocomplete(input,
     { types: ['address'],
      componentRestrictions: {country: "ng"}
 });

google.maps.event.addListener(autocomplete, 'place_changed',  async function () {
    place = await autocomplete.getPlace();
    var lats = place.geometry.location.lat();
    var lngs = place.geometry.location.lng(); 
    placeIds = place.place_id;
    laundryPlaces = new google.maps.LatLng(lats,lngs);
    console.log(place.place_id, "the value of the place_id");
    console.log(lats,lngs);
    console.log(place);
    localStorage.setItem('placeId', place.place_id);
    localStorage.setItem('place', place.formatted_address);
     search();
});

var getAddress = document.getElementById("searchIcon");
getAddress.addEventListener('click', function(){
    console.log(getAddress);
   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
         var lat = position.coords.latitude;
         var lng = position.coords.longitude;
         console.log(lat,lng)
         var latlng = new google.maps.LatLng(lat,lng);
         var geocoder = new google.maps.Geocoder();
         geocoder.geocode({
           'latLng': latlng},
           function(answer, status){
             if (status == google.maps.GeocoderStatus.OK) {
               if (answer[0].formatted_address){
                 document.getElementById("location").value=answer[0].formatted_address;
                 localStorage.setItem('geoplace', answer[0].formatted_address);
                 find(latlng);
               }else{
                 console.log(yup);
               }
             }else{
               console.log(nope);
             }
           })
     });
   }else{
     alert("Sorry your browser does notsupport geolocation")
   }
})

function find(el){
    var requests={
        location : el,
        radius: '1000',
        type: ['laundry']
    };
    console.log(requests);

    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(requests, calls); 

    function calls(ans, status){
        console.log(ans);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < ans.length; i++) {
              getAns = ans[i];
              console.log(ans.length);
              // console.log(results.name)

            //   console.log(getResults.place_id );
            }
            localStorage.setItem("fullresult", JSON.stringify(ans))
            localStorage.setItem("totalnumber", ans.length);
            
            
            console.log(localStorage.getItem("totalnumber"));
            console.log(getAns.place_id );
            
            window.location.assign("./result-page.html"); 
           
          }else{
           console.log("no");
          }
    }
}







function search(){
    var request={
        location : laundryPlaces,
        radius: '1000',
        type: ['laundry']
    };
    console.log(request);

    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, callback); 

    function callback(results, status){
        console.log(results);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              getResults = results[i];
              console.log(results.length);
              // console.log(results.name)

            //   console.log(getResults.place_id );
            }
            localStorage.setItem("full-result", JSON.stringify(results))
            localStorage.setItem("total-number", results.length);
           
            
            console.log(localStorage.getItem("total-number"));
            console.log(getResults.place_id );
            
            window.location.assign("./result-page.html"); 
           
          }else{
           console.log("no");
          }
    }
}

searchText.addEventListener("click", showSearch);

function showSearch(){
 inputValue = document.querySelector('#location').value;
console.log(inputValue);
    var search = {
        query: inputValue,
        fields: ['place_id','geometry'],
      };
     console.log(search);

     service = new google.maps.places.PlacesService(document.createElement('div'));
    service.findPlaceFromQuery(search, call); 
    function call(response, status){
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(response);
            console.log(status);
            for (var i = 0; i < response.length; i++) {
                getSearchText = response[i];
              }
            localStorage.setItem("searchResult", JSON.stringify(response));
            localStorage.setItem('textplace', inputValue);
            console.log(getSearchText.place_id );
            
            console.log(getSearchText.geometry.location );
            searchTexts(getSearchText.geometry.location);
        }
        
        
    }
}

function searchTexts(element){
    var textrequest={
        location : element,
        radius: '1000',
        type: ['laundry']
    };
    console.log(textrequest);

    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(textrequest, textcallback); 

    function textcallback(textresults, status){
        console.log(textresults);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < textresults.length; i++) {
              getTextResults = textresults[i];
              console.log(textresults.length);
             
            }
            localStorage.setItem("searchtext", JSON.stringify(textresults))
            localStorage.setItem("searchtextnumber", textresults.length);
            
            
            console.log(localStorage.getItem("searchtextnumber"));
            console.log(getTextResults.place_id );
            
            window.location.assign("./result-page.html"); 
           
          }else{
           console.log("no");
          }
    }
}





