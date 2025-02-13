document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    const rideButton = document.getElementById('rideButton');

    rideButton.addEventListener('click', () => {
        // Disable button during animation to prevent multiple clicks
        rideButton.disabled = true;

        // Remove previous animation if exists
        car.classList.remove('car-move');
        
        // Trigger reflow to restart animation
        void car.offsetWidth;
        
        // Add animation class to move car
        car.classList.add('car-move');

        // Navigate to next page after car animation completes
        setTimeout(() => {
            window.location.href = 'page2.html';
        }, 2000); // Match this with your car animation duration
    });
});