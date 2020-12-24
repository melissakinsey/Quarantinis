$(document).ready(function () {
var APIkeyYoutube = configVars.APIkeyYoutube

var queryURLcocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

var searchVideo = []
var cocktails = []
var favCocktails = []

function queryRandomCocktails() {
    $.ajax({
    url: queryURLcocktails,
    method: "GET"
    }).then(function(response) {
      //cocktails.push(response.drinks[0].strDrink)
      //console.log(cocktails)
    //for (i = 0; i < 10; i++) {
    //localStorage.setItem("cocktail" + [i], (JSON.stringify(cocktails[i])))
    //}
    $("#cocktail-name").text(response.drinks[0].strDrink);        
    $("#ingredients").empty();
          var ingredients1 = $("<p>").text(response.drinks[0].strIngredient1 + ": " + response.drinks[0].strMeasure1);
          $("#ingredients").append(ingredients1)
          var ingredients2 = $("<p>").text(response.drinks[0].strIngredient2 + ": " + response.drinks[0].strMeasure2);
          $("#ingredients").append(ingredients2)
          if (response.drinks[0].strIngredient3 !== null) {
          var ingredients3 = $("<p>").text(response.drinks[0].strIngredient3 + ": " + response.drinks[0].strMeasure3);
          $("#ingredients").append(ingredients3)
          }
          if (response.drinks[0].strIngredient4 !== null) {
            var ingredients4 = $("<p>").text(response.drinks[0].strIngredient4 + ": " + response.drinks[0].strMeasure4);
            $("#ingredients").append(ingredients4)
            }
            if (response.drinks[0].strIngredient5 !== null) {
          var ingredients5 = $("<p>").text(response.drinks[0].strIngredient5 + ": " + response.drinks[0].strMeasure5);
          $("#ingredients").append(ingredients5)
          }
          if (response.drinks[0].strIngredient6 !== null) {
          var ingredients6 = $("<p>").text(response.drinks[0].strIngredient6 + ": " + response.drinks[0].strMeasure6);
          $("#ingredients").append(ingredients6)
          }
          if (response.drinks[0].strIngredient7 !== null) {
          var ingredients7 = $("<p>").text(response.drinks[0].strIngredient7 + ": " + response.drinks[0].strMeasure7);
          $("#ingredients").append(ingredients7)
          }
          if (response.drinks[0].strIngredient8 !== null) {
          var ingredients8 = $("<p>").text(response.drinks[0].strIngredient8 + ": " + response.drinks[0].strMeasure8);
          $("#ingredients").append(ingredients8)
          }
          $(".recipe").text(response.drinks[0].strInstructions)


      var pic = response.drinks[0].strDrinkThumb
      var photo = $(".demo-blog .coffee-pic .mdl-card__media")
      photo.attr("style", "background-image: url(" + pic + ")")
    })
}

function queryCocktailName() {
  console.log(cocktails)
  var cocktailName =  $("#cocktail-search").val().trim() || cocktails[cocktails.length-1];
  var queryURLsearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName
  console.log(cocktailName)
    $.ajax({
    url: queryURLsearch,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    $("#cocktail-name").text(response.drinks[0].strDrink);        

    $("#ingredients").empty();
    var ingredients1 = $("<p>").text(response.drinks[0].strIngredient1 + ": " + response.drinks[0].strMeasure1);
    $("#ingredients").append(ingredients1)
    var ingredients2 = $("<p>").text(response.drinks[0].strIngredient2 + ": " + response.drinks[0].strMeasure2);
    $("#ingredients").append(ingredients2)
    if (response.drinks[0].strIngredient3 !== null) {
    var ingredients3 = $("<p>").text(response.drinks[0].strIngredient3 + ": " + response.drinks[0].strMeasure3);
    $("#ingredients").append(ingredients3)
    }
    if (response.drinks[0].strIngredient4 !== null) {
      var ingredients4 = $("<p>").text(response.drinks[0].strIngredient4 + ": " + response.drinks[0].strMeasure4);
      $("#ingredients").append(ingredients4)
      }
    if (response.drinks[0].strIngredient5 !== null) {
    var ingredients5 = $("<p>").text(response.drinks[0].strIngredient5 + ": " + response.drinks[0].strMeasure5);
    $("#ingredients").append(ingredients5)
    }
    if (response.drinks[0].strIngredient6 !== null) {
    var ingredients6 = $("<p>").text(response.drinks[0].strIngredient6 + ": " + response.drinks[0].strMeasure6);
    $("#ingredients").append(ingredients6)
    }
    if (response.drinks[0].strIngredient7 !== null) {
    var ingredients7 = $("<p>").text(response.drinks[0].strIngredient7 + ": " + response.drinks[0].strMeasure7);
    $("#ingredients").append(ingredients7)
    }
    if (response.drinks[0].strIngredient8 !== null) {
    var ingredients8 = $("<p>").text(response.drinks[0].strIngredient8 + ": " + response.drinks[0].strMeasure8);
    $("#ingredients").append(ingredients8)
    }
    $(".recipe").text(response.drinks[0].strInstructions)


var pic = response.drinks[0].strDrinkThumb
var photo = $(".demo-blog .coffee-pic .mdl-card__media")
photo.attr("style", "background-image: url(" + pic + ")")

  })
}

$("#plus-sign").on("click", function () {
  var newCocktail = $("#cocktail-name").html()
  favCocktails.push(newCocktail)
  console.log(newCocktail)
  localStorage.setItem("favCocktails", JSON.stringify(favCocktails))
  console.log(favCocktails)
  renderFavorites();
})
 
function renderFavorites () {
  var favorites = JSON.parse(localStorage.getItem("favCocktails"))
console.log(favorites)
  for ( i = 0; i < favorites.length; i++) {
     var fav = $("<p>").text(favorites[i]).addClass("favorites").attr("data-name", favorites[i])
     console.log(fav)
     //.on("click", searchCocktails())
  }
  //MUST FIND A DIV TO PUT THIS IN
  $("#favorites").append(fav)
}

function queryYoutube() { 
  var queryURLyoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=cocktail+music" + searchVideo[searchVideo.length-1] + "&key=" + APIkeyYoutube
console.log(queryURLyoutube)
  $.ajax({
  url: queryURLyoutube,
  method: "GET"
}).then(function(response) {
    console.log(response)
    console.log(response.items[0].id.videoId)
    var videoSource = "http://www.youtube.com/embed/" + response.items[0].id.videoId
    $("#player").attr("src", videoSource)
})
}

$("#search").on("click", function() {
  queryCocktailName();
})
$("#random-cocktails").on("click", function() {
  queryRandomCocktails()
})

$(document).on("click", ".music-button", function() {
  var searchYoutube = $(this).attr("data-name");
  console.log(searchYoutube)
  searchVideo.push(searchYoutube);
  queryYoutube();
})

$(document).on("click", ".favorites", function() {
  var cocktailName = $(this).attr("data-name")
  cocktails.push(cocktailName)
  queryCocktailName()
})

/*
//purna's code starts here
var cocktailName;
//local stortage function
favCocktailList();
//$("<div>Cocktail List</div>").appendTo("#cocktailList")
// This function displays the city entered by the user into the DOM
function renderCocktails(){
  $("#cocktailList").empty();
  $("#cocktailInput").val(""); //where we can dump our fav cocktail
  for (i=0; i<cocktails.length; i++){
      var a = $("<p>");
      a.addClass("list-group-item list-group-item-action list-group-item-primary cocktail");
      a.attr("data-name", cocktails[i]);
      a.text(cocktails[i]);
      $("#cocktailList").prepend(a);
  }
}
// This function pulls the cocktails list array from local storage
function favCocktailList() {
  var storedCocktails = JSON.parse(localStorage.getItem("cocktails"));
  if (storedCocktails !== null) {
      cocktails = storedCocktails;
  }
  renderCocktails();
  }
  // This function saves the cocktails array to local storage
function storeCocktailArray() {
  localStorage.setItem("cocktails", JSON.stringify(cocktails));
  }
  // This function saves the currently display cocktai to local storage
function storeCurrentCoctail() {
  localStorage.setItem("currentcoctail", JSON.stringify(cocktailName));
}
  // Click event handler for cocktail search button
$("#random-cocktails").on("click", function(event){
  event.preventDefault();
  cocktailName = $("#cocktailInput").val().trim();
   if (cocktails.length >= 5){
      cocktails.shift();
      cocktails.push(cocktailName);
  }else{
  cocktails.push(cocktailName);
  }
  storeCurrentCoctail();
  storeCocktailArray();
  renderCocktails();
});
*/
//purna's code ends here


})