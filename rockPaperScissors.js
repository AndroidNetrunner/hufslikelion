const userChoice = prompt("가위, 바위, 보자기 중 무엇을 선택하시겠습니까?");

let computerChoice = Math.random();

if (computerChoice < 0.34) {
computerChoice = "바위";

} else if(computerChoice <= 0.67) {
computerChoice = "보자기";

} else {
computerChoice = "가위";
}
console.log("Computer: " + computerChoice);

const compare = (choice1, choice2) => {
    let playerWin;
if (choice1 === choice2){
return "결과는 무승부!";
}

if (choice1 === "바위"){
    if (choice2 === "가위"){
        playerWin = true;
    }else {
        playerWin = false;
    }
}

if (choice1 === "보자기"){
    if (choice2 === "가위"){
        playerWin = false;
    }else {
        playerWin = true;
    }
}

if (choice1 === "가위"){
    if (choice2 === "바위"){
        playerWin = false;
    }else {
        playerWin = true;
    }
}
if (playerWin){
    return '플레이어 승!'
}
else{
    return '컴퓨터 승!'
}
}

console.log(compare(userChoice, computerChoice));