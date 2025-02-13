document.addEventListener('DOMContentLoaded', () => {
    const car = document.querySelector('.car');
    const rideButton = document.getElementById('rideButton');

    rideButton.addEventListener('click', () => {
        car.classList.add('move-right');

        setTimeout(() => {
            window.location.href = 'page3.html';
        }, 2000); // Match animation duration
    });
});
