let backpack = [];
backpack.push('pokeball');
backpack.push('potions');
backpack.push('pokedollars');

// console.log(backpack)

// backpack.shift()
backpack.splice(0,1)

let stone = "water stone";
backpack.push(stone);

backpack.pop();

// console.log(backpack.length)

backpack.push('greatball', 'antidote', 'revive')

let satchel = backpack.splice( 3, 2)

// for(let i = 0; i < backpack.length; i++){
//     console.log(`this is the item at the index of ${i}`,backpack[i])
// }

for(let i = 0; i < 2; i++){
    console.log(backpack[i])
if(backpack.length > 2){
    console.log(backpack[i])
}else {for(let i = 0; i < backpack.length; i++){
    console.log(`this is the item at the index of ${i}`,backpack[i])
    }
 }
}



// console.log(backpack)
// console.log(satchel)

// ------------------------------------------

// let guessMe = 54

// while (guessMe < 100) {
//     console.log("----",guessMe)
    
//     if (guessMe % 4 == 0 || guessMe % 5 == 0) {
//         guessMe += 25
//         console.log('divisible by 4 or 5, added 25', guessMe)
//     } else if (guessMe % 3 == 0) {
//         guessMe -= 27
//         console.log('divisable by 3, subtract 27', guessMe)
//     } else {
//         guessMe += 3
//         console.log('plus 3', guessMe)
//     }
//     guessMe += 22
//     console.log('added 22', guessMe)
// }
// console.log(guessMe)



// console.log everything to know whats being logged



// get in the habit of console logging to understand whats happening in the code 
// when it runns to prevent bugs.
// put a console log into the code and 
// you can commit it out to run in the event of bugs.