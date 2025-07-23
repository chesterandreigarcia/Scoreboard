let minutes = 10;
let seconds = 0;
let isRunning = false;
let timer;

let Home = 0;
let Away = 0;

let Quarter = 0;

function UpdatePeriod() {
    document.getElementById("quarter").innerHTML = Quarter;
}

function UpdateHomeScore() {
    document.getElementById("home-score").innerHTML = Home;
}

function HomePlus1() {
    Home++;
    UpdateHomeScore();
}

function HomePlus2() {
    Home += 2;
    UpdateHomeScore();
}

function HomePlus3() {
    Home +=3;
    UpdateHomeScore();
}

function HomeMinus1() {
    if (Home > 0) {
        Home--;
        UpdateHomeScore();
    }
}

function HomeReset() {
    Home = 0;
    UpdateHomeScore();
}


function UpdateAwayScore() {
    document.getElementById("away-score").innerHTML = Away;
}

function AwayPlus1() {
    Away++;
    UpdateAwayScore();
}

function AwayPlus2() {
    Away += 2;
    UpdateAwayScore();
}

function AwayPlus3() {
    Away +=3;
    UpdateAwayScore();
}

function AwayMinus1() {
    if (Away > 0) {
        Away--;
        UpdateAwayScore();
    }
}

function AwayReset() {
    Away = 0;
    UpdateAwayScore();
}





function UpdateTimerDisplay() {
    document.getElementById("minutes").innerHTML = minutes;
    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    } 
}




function ResetTimer() {
    clearInterval(timer); 
    isRunning = false;
    minutes = 10;
    seconds = 0;
    Quarter = 0;
    UpdateTimerDisplay();
    UpdatePeriod();
}

function StartTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert("buzzer");
                minutes = 10;
                seconds = 0;
                UpdateTimerDisplay();
                return;
            }
            Quarter++;
            if (Quarter === 5) {
                clearInterval(timer);
                isRunning = false;
                alert("end of the game!");
                minutes = 10;
                seconds = 0;
                Quarter = 0;
                UpdateTimerDisplay();
                UpdatePeriod();
            }
            seconds = 59;
            minutes--;
        }else{
            seconds--;
        }
        UpdateTimerDisplay();
        UpdatePeriod();
    }, 1000);
}

function PauseTimer() {
    isRunning = false;
    clearInterval(timer);
}