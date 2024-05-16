const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);



 // Select the previous and next buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Add click event listeners to the previous and next buttons
prevBtn.addEventListener('click', () => {
    changeImage(-1); // Move to the previous image
});

nextBtn.addEventListener('click', () => {
    changeImage(1); // Move to the next image
});

// Function to change the displayed image
function changeImage(n) {
    imgId += n; // Increment or decrement the image ID
    const totalImages = document.querySelectorAll('.img-select a').length;
    if (imgId > totalImages) {
        imgId = 1; // Reset image ID to 1 if it exceeds the total number of images
    }
    if (imgId < 1) {
        imgId = totalImages; // Set image ID to the last image if it becomes less than 1
    }
    slideImage(); // Update the displayed image
}



document.addEventListener("DOMContentLoaded", function() {
    const visualizationBtn = document.getElementById('visualizationBtn');
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const goToProductPageBtn = document.getElementById('goToProductPageBtn');

    visualizationBtn.addEventListener('click', function() {
        modal.style.display = "block";
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    goToProductPageBtn.addEventListener('click', function() {
        window.location.href = 'http://13.201.103.186/';
        modal.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const seeMoreProductsLink = document.getElementById('seeMoreProducts');

    seeMoreProductsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        // Change the window location to product.html
        window.location.href = 'product.html';
    });
});
