// $(function() {
$(document).on("ready", function(){

  $("li.task").on("click", function() {
    $(this).toggleClass("complete")

    // $(this).attr("data-task-id")
    var task_id = $(this).data("task-id")

    $.ajax("/lists/1/tasks/" + task_id + "/complete", {
      method: "PATCH"
    })
  })

})