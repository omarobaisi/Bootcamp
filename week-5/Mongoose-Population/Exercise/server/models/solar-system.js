const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const solarSystemSchema = new Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  starName: String,
});

const planetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "SolarSystem" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});

const visitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const Planet = mongoose.model("Planet", planetSchema);
const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema);
const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = { Planet, SolarSystem, Visitor};

// let s1 = new SolarSystem({
//   planets: [],
//   starName: "The Rho Kugill Cluster",
// });

// let s2 = new SolarSystem({
//   planets: [],
//   starName: "Betler Intinax Field",
// });

// let p1 = new Planet({
//   name: "Actaeon",
//   system: s1,
//   visitors: [],
// });

// let p2 = new Planet({
//   name: "Admetus",
//   system: s1,
//   visitors: [],
// });

// let p3 = new Planet({
//   name: "Oceanu",
//   system: s1,
//   visitors: [],
// });

// let p4 = new Planet({
//   name: "Siren",
//   system: s2,
//   visitors: [],
// });

// s1.planets.push(p1);
// s1.planets.push(p2);
// s1.planets.push(p3);
// s2.planets.push(p4);

// let v1 = new Visitor({
//   name: "Deforrest Tooru",
//   homePlanet: p2,
//   visitedPlanets: [p1, p3],
// });

// p1.visitors.push(v1);
// p2.visitors.push(v1);
// p3.visitors.push(v1);

// s1.save();
// s2.save();
// p1.save();
// p2.save();
// p3.save();
// p4.save();
// v1.save();