$.get("/randomWord").then(function (word) {
  console.log(word);
  let books = $.ajax(
    "https://www.googleapis.com/books/v1/volumes?q=search+intitle:" + word
  );
  let gifs = $.ajax(
    "https://api.giphy.com/v1/gifs/search?api_key=DCBBuDJa0m0QtaAPE0Ni2XirNhuPMtDi&q=" +
      word
  );
  Promise.all([books, gifs]).then(function (results) {
    console.log(results);
    const books = results[0].items.map((book) => book.volumeInfo.title);
    const gifs = results[1].data.map((gif) => gif.url);
    books.forEach((book) => $("body").append(`<div>${book}</div>`));
    gifs.forEach((gif) => $("body").append(`<div>${gif}</div>`));
  });
});
