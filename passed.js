setTimeout(() => {
    document.getElementById('body').style.backgroundImage = "url(image/mission_passed.jpg)"
    document.getElementById('body').style.backgroundColor = "none"
    document.getElementById('credits-container').style.display = "none"
    var audio = document.getElementById('audiozin')
    audio.play()
}, 20000)