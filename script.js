// script.js
document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
        const now = new Date();
        const options = { 
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        };
        const dateTimeString = now.toLocaleString('zh-CN', options);
        const [dateString, timeString] = dateTimeString.split(' ');
        const dayOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];

        const timeElement = document.getElementById('current-time');
        timeElement.innerHTML = `
            <div class="time">${timeString}</div>
            <div class="date">${dateString} ${dayOfWeek}</div>
        `;
    };

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.link-card, .quote');
        elements.forEach((element) => {
            const { top, bottom } = element.getBoundingClientRect();
            element.classList.toggle('animate', top < window.innerHeight && bottom > 0);
        });
    };

    setInterval(updateTime, 1000);
    updateTime();

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    document.querySelectorAll('.social-icons a').forEach(icon => {
        icon.addEventListener('mouseover', () => icon.style.transform = 'translateY(-3px) rotate(5deg) scale(1.1)');
        icon.addEventListener('mouseout', () => icon.style.transform = 'translateY(0) rotate(0) scale(1)');
    });

    document.querySelector('.avatar').addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(360deg)';
        setTimeout(() => this.style.transform = 'scale(1) rotate(0)', 1000);
    });
});