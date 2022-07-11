const fetch = function (name) {
  $.ajax({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=DCBBuDJa0m0QtaAPE0Ni2XirNhuPMtDi&limit=1&q=${name}`,
    success: function (data) {
      const gif = data.data[0].embed_url;
      console.log(gif);
      const html = `<iframe src="${gif}"></iframe>`;
      $(".Gif").append(html);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

$("button").click(function () {
  const gifName = $("#gifName").val();
  fetch(gifName);
});
