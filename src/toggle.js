const body = document.querySelector('body');
const toggleBtn = document.getElementById('toggleDarkMode');
const darkModeImage = document.getElementById('darkModeImage');
const darkModeIcon = document.querySelectorAll('#darkModeIcon');


// 초기 모드 설정
const themeKey = 'theme';
const initialMode = localStorage.getItem(themeKey) || 'light';
body.setAttribute('data-theme', initialMode);

// 토글 이미지 변경 경로
const lightModeImagePath = './img/sun_5915194.png';
const darkModeImagePath = './img/moon.png';

// github 아이콘 변경 경로
const lightModeIconPath = './img/github-light.png';
const darkModeIconPath = './img/github-dark.png';

// 다크모드 토글 함수
function toggleDarkMode (){
    const currentMode = body.getAttribute('data-theme');
    const newMode = currentMode === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newMode);
    localStorage.setItem(themeKey   , newMode);



    //이미지 변경(header-toggle, footer-icon)
    if (newMode === 'light'){
        darkModeImage.src = lightModeImagePath;
        darkModeIcon.forEach((icon) => {
            icon.src = lightModeIconPath;
          });
    } else{
        darkModeImage.src = darkModeImagePath;
        darkModeIcon.forEach((icon) => {
            icon.src = darkModeIconPath;
          });
    }


}

toggleBtn.addEventListener('click',toggleDarkMode);