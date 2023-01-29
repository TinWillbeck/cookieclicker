let gold = 0;
let goldLabel = document.querySelector(".gold-label");
let multiplier = 1;
let multiplierLabel = document.querySelector(".multiplier-label")
let autoClicker =0;
let autoClickerLabel = document.querySelector(".autoClicker-label")

let button = document.querySelector(".cookie-button");
let mutliplierButton = document.querySelector(".buy-multiplier")
let autoclickerButton = document.querySelector("buy-autoclicker")

let inventory = [];
let inventoryList = document.querySelector(".inventory-list");

button.addEventListener("click", addGold);
mutliplierButton.addEventListener("click", buyMultiplier);
autoclickerButton.addEventListener("click", buyAutoclicker);

function buyMultiplier(){
    if (gold >= 10*multiplier+multiplier){
        gold -= 10*multiplier+multiplier;
        multiplier++;
        update();
    }
}

function buyAutoclicker(){
    if (gold >= 10){
        gold -= 10;
        autoClicker++;
        update();
    }
}
// function Autoclick(){
//     gold += autoClicker;
// }

function autoClick() {
gold += autoClicker;
update()
}

setInterval (autoClick, 1000);

function update(){
    updateInventory();
    goldLabel.innerHTML = gold;
    multiplierLabel.innerHTML = multiplier;
}

function updateInventory(){
    inventoryList.innerHTML = "";
    for (let index = 0; index < inventory.length; index++) {
        let newLI = document.createElement("li");
        newLI.innerHTML = inventory[index];
        inventoryList.append(newLI);
    }
}

function addGold(){
    gold = gold +(1*multiplier);
    update();
    
}

update();
