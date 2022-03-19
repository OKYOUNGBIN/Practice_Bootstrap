const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scroeDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")

const GAME_TIME = 5;

let words = ["banana", "key", "car", "javascript", "cat"]
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;

// 무조건 반올림
// Math.round()
// 무조건 올림
// Math.ceil()
// 무조건 내림
// Math.floor()

wordInput.addEventListener("input", (e) =>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if(typedText.toUpperCase() === currentText.toUpperCase()){
        addScore()
        setNewWord()
    }
})

// 게임종료
function gameover(){
    console.log("gameover")
    isPlaying = false;
    clearInterval(timeInterval)
    timeInterval = null;
    messageDisplay.innerHTML = "GAME OVER!"
}

// 시간 카운트 다운
function countDown(){
    console.log(time)
    time = time -1;
    timeDisplay.innerText = time;
    if(time === 0){
        gameover();
    }
}

function setNewWord(){
    time = GAME_TIME;
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing!!"
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex]
    
    if(!isPlaying){
        timeInterval = setInterval(countDown, 1000)
        isPlaying = true;
    }
}

function addScore(){
    score = score + 1;
    scroeDisplay.innerText = score;
}