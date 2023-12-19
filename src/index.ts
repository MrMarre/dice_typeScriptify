const button = document.querySelector("button") as HTMLButtonElement;
const thrownDice = document.querySelector("#dice") as HTMLElement;

let dots: any;

let throws: number = 0,
  currentGoal: number = 1;

// Tuple
const dice: {
  sides: number;
  throw(): number;
} = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides);
  },
};

button.addEventListener("click", (): void => {
  // Throw dice
  let result: number = dice.throw();

  // Show dice in UI
  thrownDice.classList.remove(...thrownDice.classList);
  thrownDice.classList.add("dice", `dots-${result}` as string);

  // increase throws + 1
  throws++;
  button.innerHTML = `Kasta ( ${throws} )`;
  console.log(`You threw a ${result}.`);

  // compare
  if (result === currentGoal && currentGoal < 6) {
    console.log("nice, increasing goal!");

    // remove faded state
    dots = (
      document.querySelector(`.dots-${result}` as string) as HTMLElement
    ).classList.remove("faded");
    currentGoal++;
  } else if (result === currentGoal && currentGoal === 6) {
    console.log(`You rolled a ladder in ${throws} throws.`);

    // remove faded state on dice 6
    dots = (
      document.querySelector(`.dots-${result}`) as HTMLElement
    ).classList.remove("faded");

    setTimeout((): void => {
      // Announce winner
      alert(`You rolled a ladder in ${throws} throws.` as string);

      // reset game
      console.log("resetting game....");
      currentGoal = 1;
      throws = 0;
    }, 100) as unknown as void;
  }
});
