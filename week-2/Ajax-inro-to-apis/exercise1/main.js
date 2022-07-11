const fetch = function (ISBN) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

$("button").click(function () {
  const ISBN = $("input").val();
  fetch(ISBN);
});
