$("span").each(function (i, color) {
  console.log(color.dataset.color);
  color.style.background = color.dataset.color;
  color.classList.add("picker");

  color.addEventListener("click", function () {
    $(".box").css("background", color.dataset.color);
  });
});
