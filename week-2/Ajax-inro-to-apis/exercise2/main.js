const fetch = function (type, value) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${type}:${value}`,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

$("button").click(function () {
  const queryType = $("#queryType").val();
  const queryValue = $("#queryValue").val();
  fetch(queryType, queryValue);
});
