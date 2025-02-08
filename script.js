// Countdown Timer
const countdown = () => {
    const endDate = new Date("February 28, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days < 10 ? 0${days} : days;
        document.getElementById("hours").innerText = hours < 10 ? 0${hours} : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? 0${minutes} : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? 0${seconds} : seconds;
    } else {
        document.querySelector(".countdown").innerHTML = "<h2>Giveaway telah berakhir!</h2>";
    }
};

setInterval(countdown, 1000);
