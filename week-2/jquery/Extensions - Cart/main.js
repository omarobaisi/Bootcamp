const items = {};

const add = function (item) {
  if (item.data().instock == true) {
    if (items[item.text()]) {
      items[item.text()] += 1;
      for (let cartItem of $(".cart-item")) {
        if (
          cartItem.innerText.indexOf(" ") != -1 &&
          cartItem.innerText.substring(0, cartItem.innerText.indexOf(" ")) ==
            item.text()
        ) {
          cartItem.innerText = cartItem.innerText.substring(
            0,
            cartItem.innerText.indexOf(" ")
          );
          cartItem.innerHTML = `<div class=cart-item>${item.text()} x${
            items[item.text()]
          }</div`;
        } else if (
          cartItem.innerText.indexOf(" ") == -1 &&
          cartItem.innerText == item.text()
        ) {
          cartItem.innerHTML = `<div class=cart-item>${item.text()} x${
            items[item.text()]
          }</div`;
        }
      }
    } else {
      items[item.text()] = 1;
      $("#cart").append(`<div class=cart-item>${item.text()}</div`);
    }
  }
};

$(".item").on("click", function () {
  add($(this));
});

$("#cart").on("click", ".cart-item", function () {
  $(this).remove();
});
