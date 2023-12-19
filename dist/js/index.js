"use strict";
let throws = 0, currentGoal = 1;
const dice = {
    sides: 6,
    throw() {
        return Math.ceil(Math.random() * this.sides);
    },
};
document.querySelector("button").addEventListener("click", () => {
    let result = dice.throw();
    document.querySelector("#dice").classList = "";
    document.querySelector("#dice").classList.add("dice", `dots-${result}`);
    throws++;
    document.querySelector("button").innerHTML = `Kasta ( ${throws} )`;
    console.log(`You threw a ${result}.`);
    if (result === currentGoal && currentGoal < 6) {
        console.log("nice, increasing goal!");
        document.querySelector(`.dots-${result}`).classList.remove("faded");
        currentGoal++;
    }
    else if (result === currentGoal && currentGoal === 6) {
        console.log(`You rolled a ladder in ${throws} throws.`);
        document.querySelector(`.dots-${result}`).classList.remove("faded");
        setTimeout(() => {
            alert(`You rolled a ladder in ${throws} throws.`);
            console.log("resetting game....");
            currentGoal = 1;
            throws = 0;
        }, 100);
    }
});
