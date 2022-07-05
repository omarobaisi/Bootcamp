const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true,
  fridge: {
    price: 500,
    works: true,
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "raddish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;
const balance = 500;

// Fix a fridge or an oven
const pay = () => {
  kitchen.fridge.price = kitchen.fridge.price - 250;
};

const message = (name, expiredate) => {
  if (hasOven && works) {
    console.log(
      `Geraldine’s ${name} expired ${expiredate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`
    );
  }
  if (!hasOven && works) {
    console.log(
      `Geraldine’s ${name} expired ${expiredate} day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.`
    );
    pay();
  }
  if (hasOven && !works) {
    console.log(
      `Geraldine’s ${name} expired ${expiredate} day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.`
    );
    pay();
  }
  if (!hasOven && !works) {
    console.log(
      `Geraldine’s ${name} expired ${expiredate} day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.`
    );
    pay();
    pay();
  }
};

const expired = () => {
  kitchen.fridge.items.forEach((item) => {
    if (item.expiryDate > date) message(item.name, item.expiryDate - date);
  });
};

expired();
