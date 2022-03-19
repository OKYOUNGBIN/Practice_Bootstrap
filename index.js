const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scroeDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")

const GAME_TIME = 5;
const API_URL = "https://random-word-api.herokuapp.com/word?number=100";

let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;
let words;

init()

// async await : 명령을 실행하고 다 완료하면 다음 명령어 실행
async function init(){
    // res 명령어를 실행 한 뒤
    const res = await fetch(API_URL);
    
    // data 실행
    const data = await res.json();

    words = data.filter(item => item.length < 7)
    
    // 단어가 다 불러 와지면
    isReady = true;
    console.log(words)

}

// function init(){
//     // fetch 가 통신하는 시간동안 API가 호출
//     // Promise가 로그가 나오는데 API가 호출 되는 동안 console.log가 찍힘
//     // 그걸 보완하기 위해 Promise문법 사용
//     // then이라는 명령어
//     // then앞에 나온 명령어를 수행 후에 then이하의 명령어가 호출
//     const res = fetch(API_URL).then((res)=>{return res.json() }).then((data) => words = data);
// }


// 무조건 반올림
// Math.round()
// 무조건 올림
// Math.ceil()
// 무조건 내림
// Math.floor()

wordInput.addEventListener("input", (e) =>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if(typedText.toUpperCase() === currentText.toUpperCase() && isReady){
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