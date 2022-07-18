let wisdom = [];
let id = 0;

const addToLocalStorage = function () {
  const stringifyedWidsom = JSON.stringify(wisdom);
  localStorage.wisdom = stringifyedWidsom;
};

const ifEven = function () {
  if (wisdom.length % 2 === 0) {
    addToLocalStorage();
  }
};

const addToDom = function (input) {
  $("body").append(
    `<div><span class="remove">X</span> <span class="inputResult" id=${id}>${input}</span></div>`
  );
  id++;
  removeElement();
};

$("#submit").on("click", function () {
  const input = $("input").val();
  addToDom(input);
  const pushedInput = { text: input };
  wisdom.push(pushedInput);
  ifEven();
});

$("#clear").on("click", function () {
  localStorage.removeItem("wisdom");
});

const removeElement = function () {
  $(".remove").on("click", function () {
    const index = $(this).siblings(".inputResult").attr("id");
    wisdom.splice(index, 1);
    addToLocalStorage();
  });
};
