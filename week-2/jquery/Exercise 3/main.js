$("body").append('<div class="box"></div');
$("body").append('<div class="box"></div');

$("body").on("mouseenter mouseleave", ".box:nth-of-type(1)", function () {
  $(".box:nth-of-type(2)").css("backgroundColor", "orange");
  $(".box:nth-of-type(1)").css("backgroundColor", "purple");
});

$("body").on("mouseenter mouseleave", ".box:nth-of-type(2)", function () {
  $(".box:nth-of-type(1)").css("backgroundColor", "orange");
  $(".box:nth-of-type(2)").css("backgroundColor", "purple");
});
