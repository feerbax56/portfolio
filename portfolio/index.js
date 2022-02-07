// import i18Obj from "./translate.js";

// let lang

// function getTranslate(lang) {
//   if (!i18Obj[lang]) return;
//   let translation = i18Obj[lang];
//   let allDataI18 = document.querySelectorAll("[data-i18n]");
//   allDataI18.forEach(function (item) {
//    const translationKey = item.getAttribute('data-i18n');
//     item.textContent = translation[translationKey];
//     if (item.placeholder) {
//       item.value = '';
//       item.placeholder = translation[translationKey];
//     }
//   });
// }

// let ruBtn = document.querySelector('.ru');
// let engBtn = document.querySelector('.en');
// let langBtnParent = document.querySelector('.switch-lng');

// langBtnParent.addEventListener('click', changeClassActiveL);

// function changeClassActiveL(event) {
//   if (event.target.tagName == 'BUTTON') {
//      event.target.classList.remove('active');
//     if (event.target.classList[0] === 'en') {
//       getTranslate('en');
//       lang = '.en';
//       ruBtn.classList.remove('active');
//       event.target.classList.add('active');
//     }
//     if (event.target.classList[0] === 'ru') {
//       getTranslate('ru');
//       lang = '.ru';
//       engBtn.classList.remove('active');
//       event.target.classList.add('active');
//     }
//   }
// }

// // hamburger menu ------------------------------------------------

// const hamburger = document.querySelector('.hamburger');
// const small = document.querySelector('.small-nav');

// function toggleMenu() {
//   hamburger.classList.toggle('open');
//   small.classList.toggle('open');
// }

// hamburger.addEventListener('click', toggleMenu);
// small.addEventListener('click', closeMenu);

// function closeMenu(event) {
//   if (event.target.classList.contains('link')) {
//     hamburger.classList.remove('open');
//     small.classList.remove('open');
//   }
// }
// // самооценка ------------------------------------------------

let costOfMyPain = `Итоговая оценка: 57.5/70.

Ваша отметка - 57.5 балла(ов)
Отзыв по пунктам ТЗ:

Частично выполненные пункты:
1) При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля — 5 балл(а)
2) есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления — 2 балл(а)
3) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения — 5 балл(а)


Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.

`;

console.log(costOfMyPain);

// // portfolio image ----------------------------------------------

// // const portfolioBtn = document.querySelectorAll('.buttonPortfolio');
// const portfolioBtns = document.querySelectorAll('.portfolio-btn');
// const portfolioImages = document.querySelectorAll('.portfolio');

// portfolioBtns[2].classList.add('active');

// portfolioBtns.forEach((el) => el.addEventListener('click', changeImagesSeason));

// function changeImagesSeason(event) {
//   let dataSeason = event.target.dataset.season;
//   portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`);
// }

// for (let i = 0; i < portfolioBtns.length; i++) {
//   portfolioBtns[i].addEventListener('click', changeClassActive);
// }

// function changeClassActive() {
//   for (let i = 0; i < portfolioBtns.length; i++) {
//     portfolioBtns[i].classList.remove('active');
//   }
//   this.classList.add('active');
// }

// // Cash images---------------------------------------------


// function preloadImages() {
//   const seasons = ['winter', 'spring', 'summer', 'autumn'];
//   seasons.forEach(function (el) {
//     for (let i = 1; i <= 6; i++) {
//       const img = new Image();
//       img.src = `./assets/img/${el}/${i}.jpg`;
//     }
//   });
// }
// preloadImages();

// //switch-theme-----------------------------------------------

// const themeButton = document.querySelector('.switch-theme');
// const lightItem = document.querySelectorAll('.ligth')
// const whiteButton = document.querySelectorAll('.portfolio-btn')

// function changeColor() {
  
//   themeButton.classList.toggle('white')
//   lightItem.forEach(item => item.classList.toggle('ligth-theme'))
//   whiteButton.forEach(item => item.classList.toggle('button-ligth-theme'))

//   const persistTheme =!!localStorage.getItem('theme')
//   const isReload = localStorage.getItem('isReload')

//   if (!isReload && persistTheme) {
//     localStorage.setItem("theme", "")
//   } else {
//     localStorage.setItem("theme", "ligth-theme")
//   }
//   localStorage.setItem("isReload", "")
 
// }

// themeButton.addEventListener("click", changeColor)

// //local storage---------------------------


// //--funny btn---------------------


// const button = document.querySelector('.ripple')

// button.addEventListener('click', function (e) {
//   const x = e.clientX
//   const y = e.clientY

//   const buttonTop = e.target.offsetTop
//   const buttonLeft = e.target.offsetLeft

//   const xInside = x - buttonLeft
//   const yInside = y - buttonTop

//   const circle = document.createElement('span')
//   circle.classList.add('circle')
//   circle.style.top = yInside + 'px'
//   circle.style.left = xInside + 'px'

//   this.appendChild(circle)

//   setTimeout(() => circle.remove(), 500)
// })


// video-player--------------------------

// Get our elements
const player= document.querySelector('.video-player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const volumeImg = player.querySelectorAll('.volume-icon')
const playBtn = document.querySelector('.player__button.play')
const videoBtn = document.querySelector('.play-btn')
const volume = document.querySelector('.volume-icon')
// Build out functions

function togglePlay(){
const method = video.paused ? 'play' : 'pause'
  video[method]()
}

  function updateButton(){
    if(video.paused){
      playBtn.classList.remove('pause');
      playBtn.classList.add('play');
      videoBtn.style="display:block;";
  }else {
      playBtn.classList.remove('play');
      playBtn.classList.add('pause');
      videoBtn.style="display:none;";
  }
  }

  function skip(){
video.currentTime += parseFloat(this.dataset.skip);
  }

  function handleRangeUpdate(){
    video[this.name] = this.value;
  }

  function handleProgress(){
const percent = video.currentTime / video.duration;
progressBar.style.flexBasis = Math.floor(percent * 1000) / 10 + '%';
}

function scrub(e){
  console.log(e)
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime ;
}

function changeVolume(){
  
  if (volume.value==0){
      volume.classList.remove('volume-icon');
      volume.classList.add('mute');
  }else{
      volume.classList.remove('mute');
      volume.classList.add('volume-icon');
  }
}


let v = video.volume;

function toggleVolume(){
    
    if (video.volume!==0){
        volume.classList.remove('volume-icon');
        volume.classList.add('mute');
        v = video.volume;
        video.volume=0;
        volume.value=0;
   }else{   
        volume.classList.remove('mute');
        volume.classList.add('volume-icon');
      }
}


video.addEventListener('click', togglePlay);
videoBtn.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
// toggle.addEventListener('click', volume);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=> mousedown && scrub (e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
videoBtn.addEventListener('click', updateButton);
volume.addEventListener('input', changeVolume);
volume.addEventListener('click', toggleVolume);