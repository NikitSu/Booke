document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
    const playScreen = document.getElementById('play-screen');
    const gameScreen = document.getElementById('game-screen');
    const playButton = document.getElementById('play-button');
    const circle = document.querySelector(".circle");
    const scoreElement = document.getElementById("score");
    let score = 0;

    // Имитация загрузочного экрана на пару секунд
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        playScreen.classList.remove('hidden');
    }, 10000); // 2 секунды

    // Переход на игровой экран при нажатии кнопки Play
    playButton.addEventListener('click', () => {
        playScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
    });

    circle.addEventListener("mousedown", incrementScore);
    circle.addEventListener("touchstart", incrementScore);

    function incrementScore() {
        score++;
        scoreElement.textContent = score;
    }

    // Логика для кнопок
    document.getElementById('earn').addEventListener('click', function() {
        console.log('Earn button clicked');
        // Логика перехода на страницу earn
    });

    document.getElementById('boost').addEventListener('click', function() {
        console.log('Boost button clicked');
        // Логика перехода на страницу boost
    });

    document.getElementById('friends').addEventListener('click', function() {
        console.log('Friends button clicked');
        // Логика перехода на страницу friends
    });

    document.getElementById('read').addEventListener('click', function() {
        console.log('Read button clicked');
        // Логика перехода на страницу read
    });
});
