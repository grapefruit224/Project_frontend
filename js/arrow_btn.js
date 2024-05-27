document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.fixed-btn');
    const icon = btn.querySelector('.arrow-btn');

    btn.addEventListener('mouseover', () => {
        icon.src = 'img/arrow_up_clicked.png';
    });

    btn.addEventListener('mouseout', () => {
        icon.src = 'img/arrow_up.png';
    });

    btn.addEventListener('click', () => {
        document.querySelector('header').scrollIntoView({
            behavior: 'smooth'
        })
        // document.getElementById('header').scrollIntoView({
        //     behavior: 'smooth'
        // });
    });
});