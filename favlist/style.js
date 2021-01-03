// this function reset the fav list
$("#reset").on("click", function(event){
  event.preventDefault();
  $("#favorites").remove();
localStorage.clear("")
})