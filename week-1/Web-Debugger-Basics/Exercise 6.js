const coffeeShop = {
  beans: 40,
  Balance: 100,
  beansPrice: 30,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 },
  },

  makeDrink: function (drinkType) {
    if (
      this.drinkRequirements[drinkType] &&
      this.beans >= this.drinkRequirements[drinkType].beanRequirement
    ) {
      let newBeans =
        this.beans - this.drinkRequirements[drinkType].beanRequirement;
      this.beans = newBeans;
      this.Balance += this.drinkRequirements[drinkType].price;
      console.log(
        `Make one ${drinkType} for ${this.drinkRequirements[drinkType]}`
      );
      console.log(`We have ${this.beans} beans left`);
    } else if (!this.drinkRequirements[drinkType]) {
      console.log(`Sorry, we don’t make ${drinkType}`);
    } else if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      console.log("Sorry, we’re all out of beans");
    }
  },

  buyBeans: function (numBeans) {
    let payment = numBeans * this.beansPrice;
    if (payment <= this.Balance) {
      this.Balance -= payment;
      this.beans += numBeans;
      console.log(`Just bought ${numBeans} for ${payment}`);
    } else {
      console.log("You don't have enough money to buy this much beans");
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.buyBeans(3);
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(4);
