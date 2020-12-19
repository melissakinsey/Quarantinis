
var APIkeyYoutube = "AIzaSyAwXulHTdij6874NXi4bgSLnaB2vqA9AaU"
var search = "cocktail music"
var queryURLyoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&key=" + APIkeyYoutube

var queryURLcocktails = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

$.ajax({
    url: queryURLyoutube,
    method: "GET"
  }).then(function(response) {
      console.log(response)
  })
