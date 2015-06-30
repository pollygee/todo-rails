// $(function() {
$(document).on("ready", function(){

  $("li.task").on("click", function() {
    $(this).toggleClass("complete")
  })

})