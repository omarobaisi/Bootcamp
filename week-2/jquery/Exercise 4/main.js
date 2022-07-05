const add = function (item) {
  if (item.data().instock == true) {
    $("#cart").append(`<div class=cart-item>${item.text()}</div`);
  }
};

$(".item").on("click", function () {
  add($(this));
});
