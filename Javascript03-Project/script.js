function Initialize() {
  player = null;
  playRock = 3;
  playPaper = 3;
  playScissor = 3;

  comObj = null;
  comRock = 3;
  comPaper = 3;
  comScissor = 3;
}

function Play(playObj) {
  comTotal = comRock + comPaper + comScissor;
  if (comTotal == 0) {
    return;
  }
  console.log(playObj);
  if ((playObj == 4) && (playRock != 0)) {
    player = playRock;
  }
  else if ((playObj == 5) && (playPaper != 0)) {
    player = playPaper;
  }
  else if ((playObj == 6) && (playScissor != 0)) {
    player = playScissor;
  }
  else {
    document.getElementById("message").textContent = "You have none of that object left, please use another object";
    console.log("Pick another object");
    return;
  }

  haveObj = false;
  while (!haveObj) {
  comObj = Math.floor(Math.random() * 3) + 1;
  if ((comObj == 1) && (comRock > 0)) {
    haveObj = true;
    console.log(comObj);
  }
  if ((comObj == 2) && (comPaper > 0)) {
    haveObj = true;  
    console.log(comObj);
  }
  if ((comObj == 3) && (comScissor > 0)) {
    haveObj = true; 
    console.log(comObj);
  }
  }
  
  console.log(playObj + " and " + comObj);
  Result(playObj, comObj);
}
//p -> rock = 4, paper = 5, scissor = 6
//c -> rock = 1, paper = 2, scissor = 3
// rp, pr, rs, sr, ps, sp
function Result(one, two) {
  if ((one == 4) && (two == 2)) {
    document.getElementById("message").textContent = "You played rock, which lost to the computer's paper. Thus, you have lost your rock.";
    logResult("You played rock, which lost to the computer's paper. Thus, you have lost your rock.");
    Update(1,0,0,-1,0,0); //Computer wins
  }
  else if ((one == 5) && (two == 1)) {
    document.getElementById("message").textContent = "You played paper, which beat the computer's rock. Thus, you have gained a rock.";
    logResult("You played paper, which beat the computer's rock. Thus, you have gained a rock.");
    Update(-1,0,0,1,0,0); //Person wins
  }
  
  else if ((one == 4) && (two == 3)) {
    document.getElementById("message").textContent = "You played a rock, which beat the computer's scissor. Thus, you have gained a scissor.";
    logResult("You played a rock, which beat the computer's scissor. Thus, you have gained a scissor.");
    Update(0,0,-1,0,0,1);  //Person wins
  }
  else if ((one == 6) && (two == 1)) {
    document.getElementById("message").textContent = "You played scissors, which lost to the computer's rock. Thus, you have lost your scissors.";
    logResult("You played scissors, which lost to the computer's rock. Thus, you have lost your scissors.");
    Update(0,0,1,0,0,-1);  //Computer wins
  }
  
  else if ((one == 5) && (two == 3)) {
    document.getElementById("message").textContent = "You played paper, which lost to the computer's scissors. Thus, you have lost your paper.";
    logResult("You played paper, which lost to the computer's scissors. Thus, you have lost your paper.");
    Update(0,1,0,0,-1,0); //Computer wins
  }
  else if ((one == 6) && (two == 2)) {
    Update(0,-1,0,0,1,0); //Person wins
    document.getElementById("message").textContent = "You played a scissor, which beat the computer's paper. Thus, you have gained a paper.";
    logResult("You played a scissor, which beat the computer's paper. Thus, you have gained a paper.");
  }
  else {
    document.getElementById("message").textContent = "You tied because both you and the computer played the same object.";
    logResult("You tied because both you and the computer played the same object.");
    console.log("Tie!")
  }
}

function Update(cR, cP, cS, pR, pP, pS) {
  comRock += cR;
  comPaper += cP;
  comScissor += cS; 
  playRock += pR;
  playPaper += pP;
  playScissor += pS;
  playTotal = playRock + playPaper + playScissor;
  comTotal = comRock + comPaper + comScissor;
  
  console.log(comRock + " ," + comPaper + " ," + comScissor + " ," + playRock + " ," + playPaper + " ," + playScissor)
  document.getElementById("1").textContent = comRock;
  document.getElementById("2").textContent = comPaper;
  document.getElementById("3").textContent = comScissor;
  document.getElementById("4").textContent = playRock;
  document.getElementById("5").textContent = playPaper;
  document.getElementById("6").textContent = playScissor;
  if (playTotal == 0) {
    document.getElementById("message").textContent =  "YOU LOSE! The computer took all of your objects!"  
    logResult("YOU LOSE! The computer took all of your objects!");
  }
  if (comTotal == 0) {
    document.getElementById("message").textContent =  "YOU WIN! You took all of the computer's objects!"
    logResult("YOU WIN! You took all of the computer's objects!");
    console.log("YOU LOSE! The user took all of your objects!");
  }
}

function logResult(mess,isTrue) {
    list = document.getElementById("logUpdate");
    totalLog = [];
    totalLog.push(mess);
  
    totalLog.forEach((i) => {
      li = document.createElement("li");
      li.innerText = i;
      list.appendChild(li);
    });
}

function Reset() {
  player = null;
  playRock = 3;
  playPaper = 3;
  playScissor = 3;
  comObj = null;
  comRock = 3;
  comPaper = 3;
  comScissor = 3;
  document.getElementById("1").textContent = 3;
  document.getElementById("2").textContent = 3;
  document.getElementById("3").textContent = 3;
  document.getElementById("4").textContent = 3;
  document.getElementById("5").textContent = 3;
  document.getElementById("6").textContent = 3;
  console.log("worked!")
  totalLog = [];
  document.getElementById("logUpdate").textContent = "";
  document.getElementById("message").textContent = "Game Reset";
}
