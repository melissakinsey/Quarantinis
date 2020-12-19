$(document).ready(function () {
var APIkeyYoutube = configVars.APIkeyYoutube
var search = "cocktail music"
var queryURLyoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&key=" + APIkeyYoutube

var queryURLcocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var queryURLsearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

var videos = []
var cocktails = []

queryYoutube();


function queryRandomCocktails() {
    $.ajax({
    url: queryURLcocktails,
    method: "GET"
    }).then(function(response) {
      console.log(response)
      cocktails.push(response.drinks[0].strDrink)
      console.log(cocktails)
    for (i = 0; i < 10; i++) {
    localStorage.setItem("cocktail" + [i], (JSON.stringify(cocktails[i])))
    }
    

    $("#ingredients").empty();
          var ingredients1 = $("<p>").text(response.drinks[0].strIngredient1 + ": " + response.drinks[0].strMeasure1);
          $("#ingredients").append(ingredients1)
          var ingredients2 = $("<p>").text(response.drinks[0].strIngredient2 + ": " + response.drinks[0].strMeasure2);
          $("#ingredients").append(ingredients2)
          if (response.drinks[0].strIngredient4 !== null) {
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
  var cocktailName = $("#cocktail-search").val().trim();
  var queryURLsearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName
  console.log(cocktailName)
    $.ajax({
    url: queryURLsearch,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    $("#ingredients").empty();
    var ingredients1 = $("<p>").text(response.drinks[0].strIngredient1 + ": " + response.drinks[0].strMeasure1);
    $("#ingredients").append(ingredients1)
    var ingredients2 = $("<p>").text(response.drinks[0].strIngredient2 + ": " + response.drinks[0].strMeasure2);
    $("#ingredients").append(ingredients2)
    if (response.drinks[0].strIngredient4 !== null) {
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



function queryYoutube() { 
    $.ajax({
  url: queryURLyoutube,
  method: "GET"
}).then(function(response) {
    console.log(response)
    console.log(response.items[0].id.videoId)
   if (videos < 5) {for (i = 0; i < 5; i++) {
    videos.push(response.items[i].id.videoId)
    }
    }
})
}

$("#search").on("click", function() {
  queryCocktailName();
})
$("#random-cocktails").on("click", function() {
  queryRandomCocktails()
})
$("#jazz").on("click", function() {
  var videoSource = "http://www.youtube.com/embed/" + videos[0]
  $("#player").attr("src", videoSource)
})

$("#christmas").on("click", function() {
  var videoSource = "http://www.youtube.com/embed/" + videos[3]
  $("#player").attr("src", videoSource)
})

$("bossa").on("click", function() {
  var videoSource = "http://www.youtube.com/embed/" + videos[4]
  $("#player").attr("src", videoSource)
})





})