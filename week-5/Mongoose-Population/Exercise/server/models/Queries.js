const { Planet, SolarSystem, Visitor } = require("./solar-system");

//! Find a visitor’s list of visited planets

const allVisitors = [];
Visitor.find({})
  .populate("visitedPlanets")
  .then((visitors) => {
    visitors.forEach((visitor) => allVisitors.push(visitor.name));
    console.log("visitors are: " + allVisitors);
  });

// ! Find all the visitors on a planet

Planet.findOne({ name: "Admetus" })
  .populate("visitors")
  .then((planets) => {
    console.log(planets.name + "was visited by:");
    const visitors = planets.visitors;
    visitors.forEach(Visitor => {
      console.log(Visitor.name + ", ");
    })
  });

// ! Find all the visitors in a system (subdocuments!)

SolarSystem.findOne({ starName: "The Rho Kugill Cluster" })
  .populate({
    path: "planets",
    populate: {
      path: "visitors",
    },
  })
  .then((solarSystems) => {
    const planets = solarSystems.planets;
    planets.forEach(planet => {
      const visitors = planet.visitors;
      console.log(`${solarSystems.starName} visitor:`)
      visitors.forEach(visitor => console.log(visitor.name+", "))
    })
  });

//! Find the name of the star in the system of a visitor’s home planet

Visitor.find({})
  .populate({
    path: "visitedPlanets",
    populate: {
      path: "system",
    },
  })
  .then((visitors) => {
    visitors.forEach((visitor) => {
      const visitedPlanets = visitor.visitedPlanets;
      visitedPlanets.forEach((planet) =>
        console.log(`${planet.name} star name: ${planet.system.starName}`)
      );
    });
  });


//! Find a planet’s system’s star name as well as its visitors

Planet.find({}).populate("system").populate("visitors")
.then(planets => {
  planets.forEach(planet => {
    const system = planet.system.starName;
    const visitors = planet.visitors;
    console.log(`Planet ${planet.name} is from ${system} system and his visitors are`)
    visitors.forEach(visitor => console.log(visitor.name+", "))
  })
})