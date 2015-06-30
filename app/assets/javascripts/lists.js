// $(function() {
$(document).on("ready", function(){

  $(".notice").hide()

  var errorHandler = function() {
    $(".notice").show().text("Mistakes were made")
  }

  $("li.task").on("click", function() {
    $(this).toggleClass("complete")

    // $(this).attr("data-task-id")
    var task_id = $(this).data("task-id")

    // Note: don't actually care about list id here
    $.ajax("/lists/1/tasks/" + task_id + "/complete", {
      method: "PATCH",
      error: errorHandler
    })
  })

  $("input").on("keyup", function(evt) {
    if (evt.keyCode === 13) { // pressed enter
      var list_id = $(this).data("list-id")

      $.ajax("/lists/" + list_id + "/tasks", {
        method: "POST",
        data: {
          task_name: $(this).val()
        },
        error: errorHandler,
        success: function(data) {
          var new_item = $("<li class='task'>" + data.content + "</li>")

          $("ul.task-list").append(new_item)
        }
      })
    }
  })

})