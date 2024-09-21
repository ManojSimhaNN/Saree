function showSidebar(){
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display='none'
}

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,                // Enables infinite looping
    autoplay: {
        delay: 3000,           // Slides change every 3 seconds
        disableOnInteraction: false,  // Autoplay continues even after interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,       // Enables clickable pagination bullets
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,          // Show 1 slide at a time
    spaceBetween: 30,          // 30px space between slides
});

function showMoreProducts() {
    // Get all hidden products
    var hiddenProducts = document.querySelectorAll('.hidden');

    // Loop through and display them
    hiddenProducts.forEach(function(product) {
        product.classList.remove('hidden');
    });

    // Hide the load more button after products are shown
    document.querySelector('.load-more-btn').style.display = 'none';
}