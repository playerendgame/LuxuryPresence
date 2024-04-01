//event listener for Navbar changing colors
window.addEventListener('scroll', () => {

    const verticalScrollPx = window.scrollY || window.pageYOffset;

    if (verticalScrollPx < 200) {
        
        document.querySelector('.navbarContainer').style.backdropFilter = "blur(15px)";
        document.querySelector('.navbarContainer').style.backgroundColor = "transparent";

    }else if(verticalScrollPx > 500 && verticalScrollPx < 1000){

        document.querySelector('.navbarContainer').style.backdropFilter = "none";
        document.querySelector('.navbarContainer').style.backgroundColor = "rgb(28, 39, 54)";

    }
    else if(verticalScrollPx > 500 || verticalScrollPx < 1000){

        document.querySelector('.navbarContainer').style.backdropFilter = "none";
        document.querySelector('.navbarContainer').style.backgroundColor = "rgb(28, 39, 54)";

    }
    
});


//function to play video
function togglePlay(){
    
    const video = document.getElementById('videoPlayer');
    const playIcon = document.querySelector('.playIcon');
    const isPlaying = !video.paused;

    if(isPlaying){

        video.pause();
        playIcon.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>`


    }else{

        video.play();
        playIcon.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>`

    }

}

//function to change from button element to <p> tag element
function submitNewsLetter(){

    const changeButtonElement = document.getElementById('newsletterButton');
    const parentElement = changeButtonElement.parentElement;

    changeButtonElement.remove();

    const messageElement = document.createElement('p');
    messageElement.className = 'lead text-light text-center';
    messageElement.textContent = 'Email Submitted!';

    parentElement.appendChild(messageElement);

    return index.html;

}