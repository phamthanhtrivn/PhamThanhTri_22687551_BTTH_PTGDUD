// Coding Challenge #1

// ...
// tham số nằm trong hàm và destructuring: rest -> những cái còn lại (the rest)
// còn lại: spread

console.log("Coding Challenge #1\n\n");

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// 1.
const players1 = game.players[0];
const players2 = game.players[1];

// 2.
const [gk, ...fieldPlayers] = players1;
const [gk2, ...fieldPlayers2] = players2;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5.
const { team1, draw, team2 } = game.odds;

// 6.
const printGoals = (...players) => {
  console.log(`${players.length} goals was scored`);
  players.forEach((player) => {
    console.log(player);
  });
};

// 7.
console.log("7. \n");
const moreLikelyToWin = [team1, draw, team2].indexOf(
  Math.min(team1, draw, team2)
);
const result =
  moreLikelyToWin === 0
    ? game.team1
    : moreLikelyToWin === 2
    ? game.team2
    : "Draw";
console.log(`The team most likely to win is: ${result}`);

// Test data for 6
console.log("\n\nTest data for 6.\n");
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// Coding Challenge #2

console.log("\n\nCoding Challenge #2\n\n");

// 1.
console.log("1.");
game.scored.forEach((player, index) => {
  console.log(`Goal ${++index}: ${player}`);
});

// 2.
console.log("2.");
const odds = Object.values(game.odds);
const avgOdd =
  odds.reduce((arr, cur) => {
    return arr + cur;
  }, 0) / odds.length;

console.log(`Average odds: ${avgOdd.toFixed(2)}`);

// 3.
console.log("3.");
for (const [key, value] of Object.entries(game.odds)) {
  let teamName = key === "draw" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${teamName}: ${value}`);
}

// 4.
console.log("4.");
const scorers = {};
game.scored.forEach((player) => {
  scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);

// Coding Challenge #3
console.log("\n\nCoding Challenge #3\n\n");

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
console.log("1.");
let eventsSets = new Set();
for (const [key, value] of gameEvents) {
  eventsSets.add(value)
}

let events = Array.from(eventsSets);
console.log(events);

// 2. 
console.log("2.");
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log("3.");
const numberEvent = gameEvents.size;
const averageTime = 90 / numberEvent;
console.log(`An event happened, on average, every ${averageTime.toFixed(1)} minutes.`);

// 4.
console.log("4.");
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HAFT] ${key}: ${value}`);
  }
  else {
    console.log(`[SECOND HAFT] ${key}: ${value}`);
  }
}











