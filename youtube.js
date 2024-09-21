document.addEventListener("DOMContentLoaded", function () {
    const animationContainer = document.querySelector('.youtube-animation');
    const youtubePage = document.querySelector('.youtube-page');
  
    // Simulate the logo animation with timeout
    setTimeout(() => {
      // Hide the logo and show the YouTube page
      animationContainer.style.display = 'none';
      youtubePage.classList.add('open');
    }, 1000); // Wait for 3 seconds before opening the YouTube page
  });