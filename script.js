document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector(".circle");

    circle.addEventListener("mousedown", () => {
        circle.classList.add("pressed");
    });

    circle.addEventListener("mouseup", () => {
        circle.classList.remove("pressed");
    });

    circle.addEventListener("mouseleave", () => {
        circle.classList.remove("pressed");
    });

    circle.addEventListener("touchstart", () => {
        circle.classList.add("pressed");
    });

    circle.addEventListener("touchend", () => {
        circle.classList.remove("pressed");
    });

    circle.addEventListener("touchcancel", () => {
        circle.classList.remove("pressed");
    });

    // Логика для кнопок
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("mousedown", () => {
            button.classList.add("pressed");
        });

        button.addEventListener("mouseup", () => {
            button.classList.remove("pressed");
        });

        button.addEventListener("mouseleave", () => {
            button.classList.remove("pressed");
        });

        button.addEventListener("touchstart", () => {
            button.classList.add("pressed");
        });

        button.addEventListener("touchend", () => {
            button.classList.remove("pressed");
        });

        button.addEventListener("touchcancel", () => {
            button.classList.remove("pressed");
        });
    });

    // Обработка кликов по кнопкам
    document.getElementById('earn').addEventListener('click', function() {
        console.log('Earn button clicked');
    });

    document.getElementById('boost').addEventListener('click', function() {
        console.log('Boost button clicked');
    });

    document.getElementById('friends').addEventListener('click', function() {
        console.log('Friends button clicked');
    });

    document.getElementById('read').addEventListener('click', function() {
        console.log('Read button clicked');
    });
});
