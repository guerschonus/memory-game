const gameContainer = document.getElementById("game");
let nbclick = 0;
let firstColor, secondColor = "";
let choice1,choice2 = "";

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    //newDiv.style.backgroundColor = color;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
function initColor() {
  choice1.style.backgroundColor = ""
  choice2.style.backgroundColor = ""
}

function initClick() {
  nbclick = 0;
}

// TODO: Implement this function!
function handleCardClick(event) {
 nbclick++;
 if (nbclick === 1) {
  choice1 = event.target
  firstColor = event.target.classList.value;
  choice1.style.backgroundColor = firstColor
  console.log(firstColor)
} else if (nbclick === 2 && event.target !== choice1) {
  choice2 = event.target
  secondColor = event.target.classList.value;
  choice2.style.backgroundColor = secondColor
  console.log(secondColor)
  if(choice1.style.backgroundColor === choice2.style.backgroundColor) nbclick=0;
    else {
      secondColor = event.target.classList.value;
      choice2.style.backgroundColor = secondColor
      //setTimeout(initColor, 1000)
      //choice1.style.backgroundColor = ""
      //choice2.style.backgroundColor = ""
      setTimeout(initColor, 1000)
      setTimeout(initClick,1000)
      //nbclick=0;
    }
} else if(nbclick > 2) console.log("You clicked more than 2 times")
 else {nbclick--;console.log("you clicked on the same card")
}
}

/* if (choice1 === choice2) nbclick--; else
  if(nbclick > 2 && choice1.style.backgroundColor!==choice2.style.backgroundColor){
    console.log("You clicked more than 2 times", nbclick);
    choice1.style.backgroundColor=""
    choice2.style.backgroundColor=""
  } else  {
     // you can use event.target to see which element was clicked
     event.target.style.backgroundColor = event.target.classList.value
     console.log("you just clicked", event.target)  
     console.log(event.target.style.backgroundColor)
  
  if(firstColor !== secondColor && nbclick === 2) console.log ("color1!=color2")
  //setTimeout(handleCardClick, 1000);
  //nbclick=0;
    
  }
 
};*/




// when the DOM loads
createDivsForColors(shuffledColors);
const newButton = document.createElement("button");
gameContainer.append(newButton);
