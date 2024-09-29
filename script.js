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
});