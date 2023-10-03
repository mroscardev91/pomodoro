
let focusButton = document.getElementById("focus");
let shortButton = document.getElementById("short");
let longButton = document.getElementById("long");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let time = document.getElementById("time");
let set;
let count = 59;
let paused = true;
let minCount = 24;
let mode = "focus"

const timer = (value) => {
    value = value < 10 ? `0${value}` : value; 
    return value;
}

time.textContent = `${minCount + 1}:00`;

focusButton.addEventListener("click",() => {
    clearInterval(set);
    paused = true;
    pauseButton.classList.remove("show");
    resetButton.classList.remove("show");
    startButton.classList.remove("hide");
    minCount = 24;
    time.textContent = `${minCount + 1}:00`;
    mode = "focus";
    
});

shortButton.addEventListener("click", () => {
    paused = true;
    clearInterval(set);
    pauseButton.classList.remove("show");
    resetButton.classList.remove("show");
    startButton.classList.remove("hide");
    minCount = 4;
    time.textContent = `${minCount + 1}:00`;
    mode = "short"
    
});

longButton.addEventListener("click", () =>{
    paused = true;
    clearInterval(set);
    pauseButton.classList.remove("show");
    resetButton.classList.remove("show");
    startButton.classList.remove("hide");
    minCount = 14;
    time.textContent = `${minCount + 1}:00`;
    mode = "long"
})

pauseButton.addEventListener("click", ()=>{
    paused = true;
    clearInterval(set);
    startButton.classList.remove("hide");
    pauseButton.classList.remove("show");
    resetButton.classList.remove("show");
})

resetButton.addEventListener("click", ()=>{
    clearInterval(set);
    paused = true;
    startButton.classList.remove("hide");
    pauseButton.classList.remove("show");
    resetButton.classList.remove("show");
    switch (mode){
        case "long":
            minCount = 14;
            break
        case "short":
            minCount = 4;
            break;
        case "focus":
            minCount = 24;
            break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
})

startButton.addEventListener("click", ()=>{
    startButton.classList.remove("show");
    startButton.classList.add("hide");
    resetButton.classList.add("show");
    pauseButton.classList.add("show");

    if (paused) {
        paused = false;
        time.textContent = `${timer(minCount)}:${timer(count)}`;
        set = setInterval(() =>{
            count--;
            time.textContent = `${timer(minCount)}:${timer(count)}`;
            if(count == 0){
                if(minCount != 0){
                    minCount--;
                    count = 60;
                }else{
                    clearInterval(set);
                }
            }
        }, 1000);
    }
});

