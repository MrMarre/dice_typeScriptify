const button = document.querySelector("button");
const thrownDice = document.querySelector("#dice");
let dots;
let throws = 0, currentGoal = 1;
const dice = {
    sides: 6,
    throw() {
        return Math.ceil(Math.random() * this.sides);
    },
};
button.addEventListener("click", () => {
    let result = dice.throw();
    thrownDice.classList.remove(...thrownDice.classList);
    thrownDice.classList.add("dice", `dots-${result}`);
    throws++;
    button.innerHTML = `Kasta ( ${throws} )`;
    console.log(`You threw a ${result}.`);
    if (result === currentGoal && currentGoal < 6) {
        console.log("nice, increasing goal!");
        dots = document.querySelector(`.dots-${result}`).classList.remove("faded");
        currentGoal++;
    }
    else if (result === currentGoal && currentGoal === 6) {
        console.log(`You rolled a ladder in ${throws} throws.`);
        dots = document.querySelector(`.dots-${result}`).classList.remove("faded");
        setTimeout(() => {
            alert(`You rolled a ladder in ${throws} throws.`);
            console.log("resetting game....");
            currentGoal = 1;
            throws = 0;
        }, 100);
    }
});
