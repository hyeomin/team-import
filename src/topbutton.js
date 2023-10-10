// 맨 위로 이동 버튼 요소 가져오기
const scrollTopBtn = document.getElementById('scrollTopBtn');

// 사용자가 일정 스크롤 위치에 도달할 때 버튼을 표시 또는 숨깁니다.
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// 버튼을 클릭하면 페이지 맨 위로 스크롤합니다.
scrollTopBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});
