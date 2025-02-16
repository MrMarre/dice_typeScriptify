let throws = 0,
  currentGoal = 1;

const dice = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides);
  },
};

document.querySelector("button").addEventListener("click", () => {
  // Thow dice
  let result = dice.throw();

  // Show dice in UI
  document.querySelector("#dice").classList = "";
  document.querySelector("#dice").classList.add("dice", `dots-${result}`);

  // increace throws + 1
  throws++;
  document.querySelector("button").innerHTML = `Kasta ( ${throws} )`;
  console.log(`You threw a ${result}.`);

  // jämför
  if (result === currentGoal && currentGoal < 6) {
    console.log("nice, increasing goal!");

    // remove faded state
    document.querySelector(`.dots-${result}`).classList.remove("faded");

    currentGoal++;
  } else if (result === currentGoal && currentGoal === 6) {
    console.log(`You rolled a ladder in ${throws} throws.`);

    // remove faded state
    document.querySelector(`.dots-${result}`).classList.remove("faded");

    setTimeout(() => {
      // Announc winner
      alert(`You rolled a ladder in ${throws} throws.`); //here's a bug

      // reset game
      console.log("resetting game....");
      currentGoal = 1;
      throws = 0;
    }, 100);
  }
});
