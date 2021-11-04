const playSong = document.getElementsByClassName('play');
const stopSong = document.getElementsByClassName('stop');
const volumen = document.querySelector('.volumen');
let info = document.querySelector('.info');

let audio

for (elemento of playSong) {
    elemento.addEventListener('click', function() {
        let cancion = this.getAttribute('id');
        audio = new Audio(`./audio/${cancion}.mp3`);
        audio.play();
    });
};

for (elemento of stopSong) {
    elemento.addEventListener('click', function() {
        audio.pause();
    })
}

volumen.addEventListener('click', function() {
    let valorVol = this.value;
    audio.volume = valorVol;
})