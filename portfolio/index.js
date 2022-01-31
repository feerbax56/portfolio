import i18Obj from "./translate.js";

let lang

function getTranslate(lang) {
  if (!i18Obj[lang]) return;
  let translation = i18Obj[lang];
  let allDataI18 = document.querySelectorAll("[data-i18n]");
  allDataI18.forEach(function (item) {
   const translationKey = item.getAttribute('data-i18n');
    item.textContent = translation[translationKey];
    if (item.placeholder) {
      item.value = '';
      item.placeholder = translation[translationKey];
    }
  });
}

let ruBtn = document.querySelector('.ru');
let engBtn = document.querySelector('.en');
let langBtnParent = document.querySelector('.switch-lng');

langBtnParent.addEventListener('click', changeClassActiveL);

function changeClassActiveL(event) {
  if (event.target.tagName == 'BUTTON') {
     event.target.classList.remove('active');
    if (event.target.classList[0] === 'en') {
      getTranslate('en');
      lang = '.en';
      ruBtn.classList.remove('active');
      event.target.classList.add('active');
    }
    if (event.target.classList[0] === 'ru') {
      getTranslate('ru');
      lang = '.ru';
      engBtn.classList.remove('active');
      event.target.classList.add('active');
    }
  }
}

// hamburger menu ------------------------------------------------

const hamburger = document.querySelector('.hamburger');
const small = document.querySelector('.small-nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  small.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
small.addEventListener('click', closeMenu);

function closeMenu(event) {
  if (event.target.classList.contains('link')) {
    hamburger.classList.remove('open');
    small.classList.remove('open');
  }
}
// самооценка ------------------------------------------------

let costOfMyPain = `Итоговая оценка: 75/85.

Ваша отметка - 75 балла(ов)
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы
Комментарий проверяющего: на этом месте я заснул

Частично выполненные пункты:
1) после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) — 2 балл(а)
Комментарий проверяющего: картинки фоновые в skills закрываются паддингом от шрифта((
2) сложные эффекты для кнопок при наведении и/или клике — 2 балл(а)
Комментарий проверяющего: сложная только переключение темы


Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.

`;

console.log(costOfMyPain);

// portfolio image ----------------------------------------------

// const portfolioBtn = document.querySelectorAll('.buttonPortfolio');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio');

portfolioBtns[2].classList.add('active');

portfolioBtns.forEach((el) => el.addEventListener('click', changeImagesSeason));

function changeImagesSeason(event) {
  let dataSeason = event.target.dataset.season;
  portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`);
}

for (let i = 0; i < portfolioBtns.length; i++) {
  portfolioBtns[i].addEventListener('click', changeClassActive);
}

function changeClassActive() {
  for (let i = 0; i < portfolioBtns.length; i++) {
    portfolioBtns[i].classList.remove('active');
  }
  this.classList.add('active');
}

// Cash images---------------------------------------------


function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach(function (el) {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${el}/${i}.jpg`;
    }
  });
}
preloadImages();

//switch-theme-----------------------------------------------

const themeButton = document.querySelector('.switch-theme');
const lightItem = document.querySelectorAll('.ligth')
const whiteButton = document.querySelectorAll('.portfolio-btn')

function changeColor() {
  
  themeButton.classList.toggle('white')
  lightItem.forEach(item => item.classList.toggle('ligth-theme'))
  whiteButton.forEach(item => item.classList.toggle('button-ligth-theme'))

  const persistTheme =!!localStorage.getItem('theme')
  const isReload = localStorage.getItem('isReload')

  if (!isReload && persistTheme) {
    localStorage.setItem("theme", "")
  } else {
    localStorage.setItem("theme", "ligth-theme")
  }
  localStorage.setItem("isReload", "")
 
}

themeButton.addEventListener("click", changeColor)

//local storage---------------------------


//--funny btn---------------------


const button = document.querySelector('.ripple')

button.addEventListener('click', function (e) {
  const x = e.clientX
  const y = e.clientY

  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
})
