// Get a NodeList of all elements with the 'type-item' class
const typeItems = document.querySelectorAll('.type-item');


// Loop through each type-item element
typeItems.forEach((typeItem) => {
    // Get the associated video ID from the data attribute
    const videoId = typeItem.dataset.videoId;

    // Find the corresponding video element
    const projectVideo = document.getElementById(videoId);

    if (projectVideo) {

        
        // Add click event listener to the current type-item element
        typeItem.addEventListener('click', () => {
            // Toggle the 'full-screen' class on the video element
            projectVideo.classList.add('full-screen');
            projectVideo.muted = !projectVideo.muted

        });

        projectVideo.addEventListener('click', () => {
            projectVideo.classList.remove('full-screen');
            projectVideo.muted = !projectVideo.muted
        })

        // Add event listener to the current type-item element for hover effects
        typeItem.addEventListener('mouseover', () => {
            // Add the 'active' class to the video element
            projectVideo.classList.add('active');
        });

        // Add event listener to remove the 'active' class when mouse leaves the type-item
        typeItem.addEventListener('mouseout', () => {
            // Remove the 'active' class from the video element
            //projectVideo.classList.remove('full-screen');
            projectVideo.classList.remove('active');
        });
    }
});



