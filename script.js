
APIkeyYoutube = configVars.APIkeyYoutube
var search = "cocktail music"
var queryURLyoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&key=" + APIkeyYoutube

var queryURLcocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

$.ajax({
    url: queryURLyoutube,
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
