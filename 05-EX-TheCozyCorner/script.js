const musicas = document.querySelectorAll(".card")

musicas.forEach(musica => {
    musica.addEventListener('click', tocarMusica);
});

function tocarMusica(){
    let checkPlay = this.classList.contains('active')
    let audio = this.lastChild

    if(checkPlay) {
        this.classList.remove('active')
        audio.pause()
        return
    }

    this.classList.add('active')
    audio.play()
}