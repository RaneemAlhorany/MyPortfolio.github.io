// Select the image element
const img = document.getElementById('mainImg');
const textElement = document.getElementById('animatText'); // Corrected the variable name

// Text to be animated
const text = "full stack web and android Developer";
let index = 0;
let isDeleting = false;

// Set initial position and direction for the image
let posY = 0;
let direction = 1; // 1 for down, -1 for up

// Function to animate the image
function animate() {
    posY += direction * 0.3; // 0.3 is a speed
    img.style.transform = `translateY(${posY}px)`; // Use transform for smoother animation

    // Reverse direction if the image reaches 25 pixels down or back to the original position
    if (posY >= 25 || posY <= 0) {
        direction *= -1;
    }

    // Loop the animation
    requestAnimationFrame(animate);
}

// Function to animate the text
function animateText() {
    if (isDeleting) {
        if (index > 0) {
            index--;
            textElement.textContent = text.substring(0, index);
        } else
            isDeleting = false;
        
    } else {
        if (index < text.length) {
            textElement.textContent = text.substring(0, index + 1);
            index++;
        } else
            isDeleting = true;
        
    }

    // Loop the animation with a delay
    setTimeout(animateText, isDeleting ? 100 : 200); // Adjust the speed as needed
}

// Start the animations
animate();
animateText();