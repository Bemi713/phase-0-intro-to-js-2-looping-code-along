// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}
//

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
        debugger;
    }
    return gifts;
}


wrapGifts(gifts);

writeCards(["Charlie", "Saimp", "Ali"], "birthday");

let countDown = 10
while (countDown > 10) {
    console.log(countDown--);
}