// const fetch = function (type, value) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${type}:${value}`,
//     success: function (data) {
//       for (let item of data.items) {
//         console.log(item.volumeInfo.title);
//         console.log(item.volumeInfo.authors);
//         console.log(item.volumeInfo.industryIdentifiers);
//       }
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// $("button").click(function () {
//   const queryType = $("#queryType").val();
//   const queryValue = $("#queryValue").val();
//   fetch(queryType, queryValue);
// });

$.ajax({
  method: "GET",
  url: `https://api.giphy.com/v1/gifs/search?api_key=DCBBuDJa0m0QtaAPE0Ni2XirNhuPMtDi&limit=1&q=cat`,
  success: function (data) {
    const gif = data.data[0].embed_url;
    console.log(gif);
    const html = `<iframe src="${gif}"></iframe>`;
    $("body").append(html);
  },
  error: function (xhr, text, error) {
    console.log(text);
  },
});
