const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scroeDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")


let words = ["banana", "key", "car", "javascript", "cat"]
let score = 0;

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
        console.log("같습니다")
        addScore()
        setNewWord()
    }
})

function setNewWord(){
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing!!"
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex]
}

function addScore(){
    score = score + 1;
    scroeDisplay.innerText = score;
}