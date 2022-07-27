var movies = require("./movies");

movies.forEach((e) => {
  console.log(`Movie: ${e.title}, year ${e.year}`);
});
