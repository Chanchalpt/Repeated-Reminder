let stop = false; 
function reminder() {
    stop = false;
    let num = document.querySelector("#time").value;
    num = num * 60;
    document.getElementById("inputArea").style.display = "none";
    document.getElementById("timer").style.display = "block";
    countDown(num, "timerdiv");
}




function countDown(secs, elem){
    let time = secs;
    let element = document.getElementById(elem);
    element.innerHTML = convertHMS(secs);
    if(secs < 1){
        reminder();
        let audio = new Audio('sound.wav');
        audio.play();
        audio.stop();
    }
    secs--;
    if(stop != true){
        var timer = setTimeout('countDown('+secs+', "'+elem+'")',1000);
    }
    else{
        
    }
}


function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}


function reminderStopper() {
    stop = true;
    document.getElementById("inputArea").style.display = "block";
    document.getElementById("timer").style.display = "none";
}












// let play;
// function reminder() {
//     let num = document.querySelector("#time").value;
//     num = num * 60;
//     let div = document.getElementById("timerdiv");
//     let i = num;
//     play = setInterval(() => {
//         div.innerHTML = i;
//         if (i == 0) {
//             let audio = new Audio('sound.wav');
//             audio.play();
//             i = num;
//         }
//         else {
//             i--;
//         }
//     }, (1000));
// }

// function reminderStopper() {
//     clearInterval(play);
// }


















//     play = setInterval(() => {
//         let audio = new Audio('sound.wav');
//         audio.play();

//         let temp = time;
//         while (temp > 0) {
//             console.log("temp: " + temp);
//             let div = document.getElementById("timerdiv");
//             setTimeout(() => {
//                 div.innerHTML = temp;
//             }, (1000));
//             temp--;
//         }
//     }, (time * 1000));

//     // document.body.style.background = color;
//     // console.log("button pressed");
//     // var para = document.querySelector("p");
//     // para.style.color = "red";
// }



                    // function timer(time, element) {
                    //     let div = document.getElementById(element);
                    //     div.innerHTML = time;


                    // }