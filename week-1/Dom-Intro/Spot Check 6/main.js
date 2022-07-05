const list = document.getElementById("list");

const moreItems = () => {
  const li = document.createElement("li");
  li.innerText = "A new item!";
  list.appendChild(li);
};
