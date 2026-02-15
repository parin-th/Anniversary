const photoData = [
    // 2017 (7)
    {url:"images/2017/2017-05-13.jpg", caption:""},
    {url:"images/2017/2017-07-1.JPG", caption:""},
    {url:"images/2017/2017-07-14.JPG", caption:""},
    {url:"images/2017/2017-12-1(1).JPG", caption:""},
    {url:"images/2017/2017-12-1(2).JPG", caption:""},
    {url:"images/2017/2017-12-1(3).JPG", caption:""},
    {url:"images/2017/2017-12-24.JPG", caption:""},
    // 2022 (2)
    {url:"images/2022/2022-12-26.jpg", caption:""},
    {url:"images/2022/2022-12-29.JPG", caption:""},
    // 2023 (3)
    {url:"images/2023/2023-3-12.jpg", caption:""},
    {url:"images/2023/2023-4-22(1).jpg", caption:""},
    {url:"images/2023/2023-4-22(2).JPG", caption:""},
    // 2024 (4)
    {url:"images/2024/2024-1-14.jpg", caption:""},
    {url:"images/2024/2024-2-21(1).jpg", caption:""},
    {url:"images/2024/2024-2-21(2).jpg", caption:""},
    {url:"images/2024/2024-7-1.jpg", caption:""},
    // 2025 (19)
    {url:"images/2025/2025-02-18(1).jpg", caption:""},
    {url:"images/2025/2025-02-18(2).jpg", caption:""},
    {url:"images/2025/2025-02-18(3).jpg", caption:""},
    {url:"images/2025/2025-02-21.jpg", caption:""},
    {url:"images/2025/2025-02-22.jpg", caption:""},
    {url:"images/2025/2025-05-17.jpg", caption:""},
    {url:"images/2025/2025-05-19.jpg", caption:""},
    {url:"images/2025/2025-08-10.jpg", caption:""},
    {url:"images/2025/2025-10-20.jpg", caption:""},
    {url:"images/2025/2025-11-08(1).jpg", caption:""},
    {url:"images/2025/2025-11-08(2).jpg", caption:""},
    {url:"images/2025/2025-11-15.jpg", caption:""},
    {url:"images/2025/2025-11-25(1).JPG", caption:""},
    {url:"images/2025/2025-11-25(2).JPG", caption:""},
    {url:"images/2025/2025-12-22.jpg", caption:""},
    {url:"images/2025/2025-12-23.jpg", caption:""},
    {url:"images/2025/2025-12-24.jpg", caption:""},
    {url:"images/2025/2025-12-25.jpg", caption:""},
    {url:"images/2025/2025-12-27.jpg", caption:""},
];

let currentIndex = 0;
const imgElement = document.getElementById('current-img');
const captionElement = document.getElementById('current-caption');
const countElement = document.getElementById('current-count');

function updateDisplay() {
    // Fade out
    imgElement.classList.add('fade-out');
    captionElement.classList.add('fade-out');

    setTimeout(() => {
        const photo = photoData[currentIndex];
        imgElement.src = photo.url;
        
        // Handle empty captions
        captionElement.innerText = photo.caption || "A special moment together.";
        countElement.innerText = `Memory ${currentIndex + 1} of ${photoData.length}`;
        
        // Fade in
        imgElement.classList.remove('fade-out');
        captionElement.classList.remove('fade-out');
    }, 500);
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % photoData.length;
    updateDisplay();
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + photoData.length) % photoData.length;
    updateDisplay();
}

// Auto-rotate every 5 seconds
let rotationInterval = setInterval(nextPhoto, 5000);

// Reset timer on interaction
function resetTimer() {
    clearInterval(rotationInterval);
    rotationInterval = setInterval(nextPhoto, 5000);
}

window.nextPhoto = nextPhoto;
window.prevPhoto = prevPhoto;

// Set up initial state
updateDisplay();