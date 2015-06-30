// $(function() {
$(document).on("ready", function(){

  $(".notice").hide()

  $("li.task").on("click", function() {
    $(this).toggleClass("complete")

    // $(this).attr("data-task-id")
    var task_id = $(this).data("task-id")

    // Note: don't actually care about list id here
    $.ajax("/lists/1/tasks/" + task_id + "/complete", {
      method: "PATCH",
      error: function() {
        $(".notice").show().text("Mistakes were made")
      }
    })
  })

})