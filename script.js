    play = setInterval(() => {
        let audio = new Audio('sound.wav');
        audio.play();

        let temp = time;
        while (temp > 0) {
            console.log("temp: " + temp);
            let div = document.getElementById("timerdiv");
            setTimeout(() => {
                div.innerHTML = temp;
            }, (1000));
            temp--;
        }
    }, (time * 1000));

    // document.body.style.background = color;
    // console.log("button pressed");
    // var para = document.querySelector("p");
    // para.style.color = "red";
}



                    function timer(time, element) {
                        let div = document.getElementById(element);
                        div.innerHTML = time;


                    }