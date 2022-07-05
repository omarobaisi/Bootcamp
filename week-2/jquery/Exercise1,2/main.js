const add = function () {
  if ($("input").val()) {
    $("ul").append(`<li>${$("input").val()}</li>`);
  }
};

$("button").click(function () {
  add();
});

$("ul").on("click", "li", function () {
  $(this).remove();
});
