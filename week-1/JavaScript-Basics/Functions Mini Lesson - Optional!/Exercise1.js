people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const age = (person) => {
  let age;
  if (person.age < 21) {
    age = "Underage";
  } else if (person.age > 55) {
    age = "55+";
  } else {
    age = person.age;
  }
  return age;
};

const catchPrase = (person) => {
  let catchphrase = person.catchphrase;
  catchphrase = catchphrase.charAt(0).toUpperCase() + catchphrase.slice(1);
  catchphrase = "${catchphrase}";
  return catchphrase;
};

const getSummary = function (person) {
  let summary = "";
  summary += `${person.name.toUpperCase()} `;
  summary += `is ${age(person)} `;
  summary += `from ${person.city.toUpperCase()}, ${person.country.toUpperCase()} `;
  summary += `and his catchprase is ${catchPrase(person)}`;

  return summary;
};

for (let person of people_info) {
  getSummary(person);
}
