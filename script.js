document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const content = document.getElementById('content');

    welcomeScreen.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            content.classList.remove('hidden');
        }, 500);
    });
});
    createRain();
});

function createRain() {
    const body = document.body;
    for (let i = 0; i < 100; i++) {
        const rainDrop = document.createElement('div');
        rainDrop.className = 'rain';
        rainDrop.style.left = `${Math.random() * window.innerWidth}px`;
        rainDrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        rainDrop.style.animationDelay = `${Math.random() * 1}s`;
        body.appendChild(rainDrop);
    }
}
