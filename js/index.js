$(document).ready(function () {
  $("#button").click(function () {
    var toAdd = $("input[name=ListItem]").val();
    if (toAdd.trim() !== "") {
      $("ol").append(
        "<li>" + toAdd + ' <button class="delete-btn">삭제</button></li>'
      );
      $("input[name=ListItem]").val("").focus();
    }
  });

  $("input[name=ListItem]").keyup(function (event) {
    if (event.keyCode == 13) {
      $("#button").click();
    }
  });

  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike");
  });

  $(document).on("click", ".delete-btn", function (e) {
    e.stopPropagation();
    $(this).parent().remove();
  });

  $("input").focus(function () {
    $(this).val("");
  });

  $("ol").sortable();
});
