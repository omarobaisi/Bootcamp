const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const h1 = document.createElement("h1");

const Message = (message) => {
  h1.innerText = message;
  document.body.appendChild(h1);
};

const input = document.getElementById("name");
const button = document.getElementById("check");

button.onclick = () => {
  console.log(input.value);
  if (reservations[input.value] && !reservations[input.value].claimed) {
    Message("Welcome, Bob");
    console.log("Welcome, Bob");
  } else if (reservations[input.value] && reservations[input.value].claimed) {
    Message("Hmm, someone already claimed this reservation");
    console.log("Hmm, someone already claimed this reservation");
  } else {
    Message("You have no reservation");
    console.log("You have no reservation");
  }
};
