
document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '3474e0aedfcc06909852daf212031082';
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.type = 'text/javascript';
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}`;
    document.head.appendChild(kakaoMapScript);
});