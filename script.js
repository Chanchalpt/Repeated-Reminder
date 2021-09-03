let play;
function reminder() {
    let num = document.querySelector("#time").value;
    num = num * 60;
    let div = document.getElementById("timerdiv");
    let i = num;
    play = setInterval(() => {
        div.innerHTML = i;
        if (i == 0) {
            let audio = new Audio('sound.wav');
            audio.play();
            i = num;
        }
        else {
            i--;
        }
    }, (1000));
}

function reminderStopper() {
    clearInterval(play);
}