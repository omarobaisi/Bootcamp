const posts = [
  {
    name: "Ahmad",
    text: "good morning",
  },
  {
    name: "saly",
    text: "important topic",
  },
];

const render = function () {
  for (let post of posts) {
    let postBox = $(
      "<div class='post-box'><p class=name>" +
        post.name +
        "</p><p class=text>" +
        post.text +
        "</p></div>"
    );
    $("#postsContainer").append(postBox);
  }
};

render();

$("#submit").on("click", function () {
  posts.push({
    name: $("#nameInput").val(),
    text: $("#textInput").val(),
  });
  $("#nameInput").val("");
  $("#textInput").val("");
  $("#postsContainer").empty();
  render();
});
