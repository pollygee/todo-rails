// $(function() {
$(document).on("ready", function(){

  $("li.task").on("click", function() {
    $(this).addClass("complete")
  })

})