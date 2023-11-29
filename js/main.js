    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        console.log(hamburger.classList)
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Image Slider
    const imgSlider = document.getElementsByClassName('img__slider');
    let currentStep = 0;
    const totalImages = imgSlider.length;
    const prevButton = document.querySelector('.precedent');
    const nextButton = document.querySelector('.suivant');

    function removeActiveImages() {
        for (let i = 0; i < totalImages; i++) {
            imgSlider[i].classList.remove('active');
        }
    }

    function updateSlider() {
        removeActiveImages();
        imgSlider[currentStep].classList.add('active');
    }

    nextButton.addEventListener('click', function () {
        currentStep = (currentStep + 1) % totalImages;
        updateSlider();
    });

    prevButton.addEventListener('click', function () {
        currentStep = (currentStep - 1 + totalImages) % totalImages;
        updateSlider();
    });

    // Auto-advance Slider
    setInterval(function () {
        currentStep = (currentStep + 1) % totalImages;
        updateSlider();
    }, 5000);

    function imageClicked() {
        alert('Image clicked!');
    }

