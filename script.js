$(document).ready(function () {
var APIkeyYoutube = configVars.APIkeyYoutube
var search = "cocktail music"
var queryURLyoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&key=" + APIkeyYoutube

var queryURLcocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var queryURLsearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

var videos = []

function queryRandomCocktails() {
    $.ajax({
    url: queryURLcocktails,
    method: "GET"
    }).then(function(response) {
      console.log(response)
      $("#title").text(response.drinks[0].strDrink);
      var ingredients = $("<p>").text(response.drinks[0].strIngredient1);
      $("#title").append(ingredients)
      var pic = response.drinks[0].strDrinkThumb
      var photo = $("#photo").attr("src", pic)
      $("#title").prepend(photo)
      console.log(videos)
    })
}

function queryCocktailName() {
  var queryURLsearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName
  var cocktailName = $("#cocktail-search").val().trim();
    $.ajax({
    url: queryURLsearch,
    method: "GET"
  }).then(function(response) {
      console.log(response)
      $("#title").text(response.drinks[0].strDrink);
      var ingredients = $("<p>").text(response.drinks[0].strIngredient1);
      $("#title").append(ingredients)
      var pic = response.drinks[0].strDrinkThumb
      var photo = $("#photo").attr("src", pic)
      $("#title").prepend(photo)
      console.log(videos)
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

$("#random-cocktails").on("click", function() {
  queryRandomCocktails()
})
queryYoutube();

})