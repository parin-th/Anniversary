const photoData = [
            {url:"images/2017/2017-05-13.jpg", date: "May 13, 2017", caption: ""},
            {url:"images/2017/2017-07-1.JPG", date: "July 1, 2017", caption: ""},
            {url:"images/2017/2017-07-14.JPG", date: "July 14, 2017", caption: ""},
            {url:"images/2017/2017-12-1(1).JPG", date: "Dec 1, 2017", caption: ""},
            {url:"images/2017/2017-12-1(2).JPG", date: "Dec 1, 2017", caption: ""},
            {url:"images/2017/2017-12-1(3).JPG", date: "Dec 1, 2017", caption: ""},
            {url:"images/2017/2017-12-24.JPG", date: "Dec 24, 2017", caption: ""},
            {url:"images/2022/2022-12-26.jpg", date: "Dec 26, 2022", caption: ""},
            {url:"images/2022/2022-12-29.JPG", date: "Dec 29, 2022", caption: ""},
            {url:"images/2023/2023-3-12.jpg", date: "March 12, 2023", caption: ""},
            {url:"images/2023/2023-4-22(1).jpg", date: "April 22, 2023", caption: ""},
            {url:"images/2023/2023-4-22(2).JPG", date: "April 22, 2023", caption: ""},
            {url:"images/2024/2024-1-14.jpg", date: "Jan 14, 2024", caption: ""},
            {url:"images/2024/2024-2-21(1).jpg", date: "Feb 21, 2024", caption: "Two years ago"},
            {url:"images/2024/2024-2-21(2).jpg", date: "Feb 21, 2024", caption: "Two years ago"},
            {url:"images/2024/2024-7-1.jpg", date: "July 1, 2024", caption: ""},
            {url:"images/2025/2025-02-18(1).jpg", date: "Feb 18, 2025", caption: "NOLA Trip"},
            {url:"images/2025/2025-02-18(2).jpg", date: "Feb 18, 2025", caption: "NOLA Trip"},
            {url:"images/2025/2025-02-18(3).jpg", date: "Feb 18, 2025", caption: "NOLA Trip"},
            {url:"images/2025/2025-02-21.jpg", date: "Feb 21, 2025", caption: "One year ago"},
            {url:"images/2025/2025-02-22.jpg", date: "Feb 22, 2025", caption: "NOLA Trip"},
            {url:"images/2025/2025-05-17.jpg", date: "May 17, 2025", caption: ""},
            {url:"images/2025/2025-05-19.jpg", date: "May 19, 2025", caption: ""},
            {url:"images/2025/2025-08-10.jpg", date: "Aug 10, 2025", caption: ""},
            {url:"images/2025/2025-10-20.jpg", date: "Oct 20, 2025", caption: ""},
            {url:"images/2025/2025-11-08(1).jpg", date: "Nov 8, 2025", caption: ""},
            {url:"images/2025/2025-11-08(2).jpg", date: "Nov 8, 2025", caption: ""},
            {url:"images/2025/2025-11-15.jpg", date: "Nov 15, 2025", caption: ""},
            {url:"images/2025/2025-11-25(1).JPG", date: "Nov 25, 2025", caption: "Biren's Birthday"},
            {url:"images/2025/2025-11-25(2).JPG", date: "Nov 25, 2025", caption: "Biren's Birthday"},
            {url:"images/2025/2025-12-22.jpg", date: "Dec 22, 2025", caption: "Pinky's Birthday Surprise!"},
            {url:"images/2025/2025-12-23.jpg", date: "Dec 23, 2025", caption: "Pinky's Birthday Surprise!"},
            {url:"images/2025/2025-12-24.jpg", date: "Dec 24, 2025", caption: "Pinky's Birthday Surprise!"},
            {url:"images/2025/2025-12-25.jpg", date: "Dec 25, 2025", caption: "Pinky's Birthday Surprise!"},
            {url:"images/2025/2025-12-27.jpg", date: "Dec 27, 2025", caption: "Pinky's Birthday Surprise!"},
        ];

        let currentIndex = 0;
        let isTransitioning = false;
        const imgElement = document.getElementById('current-img');
        const captionElement = document.getElementById('current-caption');
        const countElement = document.getElementById('current-count');
        const dateElement = document.getElementById('current-date');

        function updateDisplay() {
            if (isTransitioning) return;
            isTransitioning = true;

            // Start fade out
            imgElement.classList.add('fade-out');
            captionElement.classList.add('fade-out');
            dateElement.classList.add('fade-out');

            setTimeout(() => {
                const photo = photoData[currentIndex];
                imgElement.src = photo.url;
                dateElement.innerText = photo.date || "";
                captionElement.innerText = photo.caption || "A beautiful memory.";
                countElement.innerText = `Memory ${currentIndex + 1} of ${photoData.length}`;
                
                // Start fade in
                imgElement.classList.remove('fade-out');
                captionElement.classList.remove('fade-out');
                dateElement.classList.remove('fade-out');
                
                // Allow next transition after fade in finishes
                setTimeout(() => {
                    isTransitioning = false;
                }, 500);
            }, 500);
        }

        function nextPhoto() {
            if (isTransitioning) return;
            currentIndex = (currentIndex + 1) % photoData.length;
            updateDisplay();
            resetTimer();
        }

        function prevPhoto() {
            if (isTransitioning) return;
            currentIndex = (currentIndex - 1 + photoData.length) % photoData.length;
            updateDisplay();
            resetTimer();
        }

        let rotationInterval = setInterval(nextPhoto, 5000);

        function resetTimer() {
            clearInterval(rotationInterval);
            rotationInterval = setInterval(nextPhoto, 5000);
        }

        // Attach events cleanly
        document.getElementById('next-btn').addEventListener('click', nextPhoto);
        document.getElementById('prev-btn').addEventListener('click', prevPhoto);

        // Initial load
        updateDisplay();