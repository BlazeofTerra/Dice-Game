let points = 0;
let pointsP21 = 0;
let pointsP22 = 0;
let rollBtn = document.querySelector("#rollBtn1");
let reset = document.querySelector("#reset1");
let rollBtnP21 = document.querySelector("#rollBtn1P21");
let resetP21 = document.querySelector("#reset1P21");
let rollBtnP22 = document.querySelector("#rollBtn1P22");
let resetP22 = document.querySelector("#reset1P22");
let player1 = document.querySelector("#player1")
let player2 = document.querySelector("#player2")
let resetF = document.querySelector("#resetF")
let resetFP21 = document.querySelector("#resetFP21")
let resetFP22 = document.querySelector("#resetFP22")
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")

function showHide(sh, variables) {
    if(sh == "show") {
        variables.forEach(id => {
            window[id].classList.add("show")
            window[id].classList.remove("hidden")
        });
    } else if(sh == "hidden") {
        variables.forEach(id => {
            window[id].classList.add("hidden")
            window[id].classList.remove("show")
        });
    } else {
        console.log("Error: sh not correct.")
    }
}

player1.addEventListener("click", () => {
    let show = ["p1"]
    let hidden = ["player1", "player2"]

    showHide("show", show);
    showHide("hidden", hidden);
})

player2.addEventListener("click", () => {
    let show = ["p2"]
    let hidden = ["player1", "player2"]

    showHide("show", show);
    showHide("hidden", hidden);
})

resetF.addEventListener("click", () => {
    let show = ["player1", "player2"]
    let hidden = ["p1", "p2"]

    showHide("show", show);
    showHide("hidden", hidden);
})

resetFP21.addEventListener("click", () => {
    let show = ["player1", "player2"]
    let hidden = ["p1", "p2"]

    showHide("show", show);
    showHide("hidden", hidden);
})

resetFP22.addEventListener("click", () => {
    let show = ["player1", "player2"]
    let hidden = ["p1", "p2"]

    showHide("show", show);
    showHide("hidden", hidden);
})

rollBtn.addEventListener("click", () => {
    let roll = Math.ceil(Math.random() * 6)
    points += roll;
    
    if(roll == 1 && points != 20) {
        let lose = document.querySelector("#lose")

        dice.src = `sides/dice ${roll}.svg`;

        lose.classList.remove("hidden")
        lose.classList.add("show")

        rollBtn.disabled = true;
    } else {
        let dice = document.querySelector("#dice");
        let tally = document.querySelector("#tally");

        dice.src = `sides/dice ${roll}.svg`;
        tally.innerText = `Points: ${points}/20`;

        if(points >= 20) {
            let win = document.querySelector("#win")

            win.classList.add("show")
            rollBtn.disabled = true;
        }
    }
})

rollBtnP21.addEventListener("click", () => {
    let roll = Math.ceil(Math.random() * 6)
    pointsP21 += roll;
    
    if(roll == 1 && pointsP21 != 20) {
        let lose = document.querySelector("#loseP21")

        diceP21.src = `sides/dice ${roll}.svg`;

        lose.classList.remove("hidden")
        lose.classList.add("show")

        rollBtnP21.disabled = true;
    } else {
        let dice = document.querySelector("#diceP21");
        let tally = document.querySelector("#tallyP21");

        dice.src = `sides/dice ${roll}.svg`;
        tally.innerText = `Points: ${pointsP21}/20`;

        if(pointsP21 >= 20) {
            let winP21 = document.querySelector("#winP21")

            winP21.classList.add("show")
            rollBtnP21.disabled = true;
        }
    }
})

rollBtnP22.addEventListener("click", () => {
    let roll = Math.ceil(Math.random() * 6)
    pointsP22 += roll;
    
    if(roll == 1 && pointsP22 != 20) {
        let lose = document.querySelector("#loseP22")

        diceP22.src = `sides/dice ${roll}.svg`;

        lose.classList.remove("hidden")
        lose.classList.add("show")

        rollBtnP22.disabled = true;
    } else {
        let dice = document.querySelector("#diceP22");
        let tally = document.querySelector("#tallyP22");

        dice.src = `sides/dice ${roll}.svg`;
        tally.innerText = `Points: ${pointsP22}/20`;

        if(pointsP22 >= 20) {
            let winP22 = document.querySelector("#winP22")

            winP22.classList.add("show")
            rollBtnP22.disabled = true;
        }
    }
})

reset.addEventListener("click", () => {
    let lose = document.querySelector("#lose")
    let win = document.querySelector("#win")
    let tally = document.querySelector("#tally")
    let dice = document.querySelector("#dice");

    dice.src = `sides/blank.png`;

    win.classList.remove("show")
    win.classList.add("hidden")

    lose.classList.remove("show")
    lose.classList.add("hidden")

    rollBtn.disabled = false;
    tally.innerText = `Points: 0/20`;
    points = 0;
})

resetP21.addEventListener("click", () => {
    let lose = document.querySelector("#loseP21")
    let win = document.querySelector("#winP21")
    let tally = document.querySelector("#tallyP21")
    let dice = document.querySelector("#diceP21");

    dice.src = `sides/blank.png`;

    win.classList.remove("show")
    win.classList.add("hidden")

    lose.classList.remove("show")
    lose.classList.add("hidden")

    rollBtnP21.disabled = false;
    tally.innerText = `Points: 0/20`;
    pointsP21 = 0;
})

resetP22.addEventListener("click", () => {
    let lose = document.querySelector("#loseP22")
    let win = document.querySelector("#winP22")
    let tally = document.querySelector("#tallyP22")
    let dice = document.querySelector("#diceP22");

    dice.src = `sides/blank.png`;

    win.classList.remove("show")
    win.classList.add("hidden")

    lose.classList.remove("show")
    lose.classList.add("hidden")

    rollBtnP22.disabled = false;
    tally.innerText = `Points: 0/20`;
    pointsP22 = 0;
})