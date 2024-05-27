document.addEventListener('DOMContentLoaded', () => {
    // 모달 요소 가져오기
    const modal = document.getElementById('myModal');
    const btn = document.querySelector('.subs_btn');
    const span = document.querySelector('.close');
    const close = document.querySelector('.close-btn');

    // 구독 버튼 클릭 이벤트 추가
    btn.addEventListener('click', (event) => {
        modal.style.display = 'block';
        console.log(event);
    });

    // 모달 닫기 버튼 클릭 이벤트 추가
    close.addEventListener('click', () => {
        modal.style.display = 'none';
        console.log('wow!')
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});