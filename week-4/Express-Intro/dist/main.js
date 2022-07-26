const fetchFurnitureData = function () {
  let input = $("#furniture-input").val();

  $.get(`priceCheck/${input}`, function (furnitureData) {
    $("body").append(`<div>price: ${furnitureData.price}`);
  });
};
