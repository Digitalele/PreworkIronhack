//Move the rover with f, b, r, l.

var commands = window.prompt("Move the Rover mate..!")

//split command array
var splitCommands = [];

//obstacles
// var myObst = {
//     position : [Math.floor((Math.random() * 9)+1), Math.floor((Math.random() * 10))] // this secure that rock dont generate in [0,0] (the initial rover position)
// };

//Rover obj
var myRover = {
  //         x  y
  position: [0, 0],
  direction: 'N'
};

//Up
function goUp(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      rover.direction = 'N'
      break;
    case 'E':
      rover.position[1]++
      rover.direction = 'N'
      break;
    case 'S':
      rover.position[1]++
      rover.direction = 'N'
      break;
    case 'W':
      rover.position[1]++
      rover.direction = 'N'
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  console.log("Up")
}

function goDown(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      rover.direction = 'S'
      break;
    case 'E':
      rover.position[1]--
      rover.direction = 'S'
      break;
    case 'S':
      rover.position[1]--
      rover.direction = 'S'
      break;
    case 'W':
      rover.position[1]--
      rover.direction = 'S'
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  console.log("Down")
}

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      rover.direction = 'W'
      break;
    case 'W':
      rover.position[0]--
      rover.direction = 'W'
      break;
    case 'S':
      rover.position[0]--
      rover.direction = 'W'
      break;
    case 'E':
      rover.position[0]--
      rover.direction = 'W'
      break;
  } 
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      rover.direction = 'E'
      break;
    case 'W':
      rover.position[0]++
      rover.direction = 'E'
      break;
    case 'S':
      rover.position[0]++
      rover.direction = 'E'
      break;
    case 'E':
      rover.position[0]++
      rover.direction = 'E'
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

//slpit commands array
for (i=0; i < commands.length; i++) {
  splitCommands += commands[i].split(', ')  
}

//iter commands
for (i=0; i < splitCommands.length; i++) {
  if (splitCommands[i] === "f") {
    goUp(myRover)
    wrapEdge(myRover)
  } else if (splitCommands[i] === "r") {
    goRight(myRover)
    wrapEdge(myRover)
  } else if (splitCommands[i] === "b") {
    goDown(myRover)
    wrapEdge(myRover)
  } else if (splitCommands[i] === "l") {
    goLeft(myRover)
    wrapEdge(myRover)
  } else {console.log("Something was wrong");}
}

function wrapEdge(myRover) {
  if(myRover.direction === 'N' && myRover.position[1] === 10) {
    myRover.position[1] = -11;
    console.log(myRover.direction + " N to S");
  } else if (myRover.direction === 'S' && myRover.position[1] === -10) {
    myRover.position[1] = 11;
    console.log(myRover.direction + "S to N");
  } else if(myRover.direction === 'W' && myRover.position[0] === -10) {
    myRover.position[0] = 11;
    console.log(myRover.direction + "W to E");
  } else if(myRover.direction === 'E' && myRover.position[0] === 10) {
    myRover.position[0] = -11;
    console.log(myRover.direction + "E to W");
  } 
}

// function obst(myObst, myRover){
//   console.log(myObst[0]);
//     for(i=0; i<myObst[0].length; i++){
//       obstacles += myObst[0][i]; 
//       console.log(obstacles);
//     } 
// }
