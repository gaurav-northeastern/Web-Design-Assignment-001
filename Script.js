var audio = document.getElementById('background');


fun()

function fun() {
    let playMusic = confirm("Do you want to play background music?");
    console.log(playMusic)
    console.log(typeof playMusic)
    //
    if (playMusic) {
        console.log("Playing")
        audio.play();
    }
}




function stopAudio() {
    audio.pause();
}


function playAudio() {
    audio.play();
}



//ChatGpt

