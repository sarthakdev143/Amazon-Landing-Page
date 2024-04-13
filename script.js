// Retrieve DOM elements
let previous = document.querySelector(".prev");
let next = document.querySelector(".next");
let images = document.querySelectorAll(".img");

// Initialize currentIndex
let currentIndex = 0;

// Function to show current image
function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

// Show the first image initially
showImage(currentIndex);

// Event listener for previous button
previous.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});

// Event listener for next button
next.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});
