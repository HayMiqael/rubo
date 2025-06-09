import './style.scss'

const volumeButton = document.querySelector('.volume-btn')
const bgVideo = document.querySelector('.bg_video')

let isMuted = true

volumeButton.addEventListener('click', () =>{
    isMuted = !isMuted

    if (isMuted){
        volumeButton.src = './volume_off.svg'
        bgVideo.muted = true
    }
    if (!isMuted){
        volumeButton.src = './volume_on.svg'
        bgVideo.muted = false
    }
})