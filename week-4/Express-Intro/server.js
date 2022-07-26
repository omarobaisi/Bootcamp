const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/priceCheck/:name", (req, res) => {
  let name = req.params.name;
  name = store.filter((product) => product.name === name);
  if (name[0]) {
    let price = name[0].price;
    res.send({ price: price });
  } else {
    res.send({ price: null });
  }
});

app.get("/buy/:name", (req, res) => {
  let name = req.params.name;
  name = store.filter((product) => product.name === name);
  name[0].inventory--;
  res.send(name);
});

app.get("/sale/", (req, res) => {
  if (req.query.admin) {
    store
      .filter((product) => product.inventory > 10)
      .map(
        (product) =>
          (product.inventory = product.inventory - product.inventory * 0.1)
      );
  }
  if (req.query.admin && req.query.admin === "true") {
    let chair = store.find((element) => element.name === "chair");
    chair.price = 60;
    let pictureFrame = store.find(
      (element) => element.name === "picture frame"
    );
    pictureFrame.price = 35;
  }
  res.send(store);
});

app.listen(3000, () => {
  console.log("App listining on port 3000");
});
