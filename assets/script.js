jQuery(document).ready(function($){
$('.visitors_bCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
})

document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callAnimation(element, defValue) {
        const animatedElement = document.querySelector(element);
        if (!animatedElement) return; // Check if the element exists
        window.addEventListener('scroll', () => {
            if (isInViewport(animatedElement)) {
                const scrollValue = window.scrollY / 500; // Adjust the division factor as needed for a slower animation
                animatedElement.style.transform = `translate3d(0px, ${defValue + scrollValue}rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
            }
        });
    }
    function scrollElementUpAndDown(element, amplitude, period) {
        const animatedElement = document.querySelector(element);
        if (!animatedElement) return; // Check if the element exists
        window.addEventListener('scroll', () => {
            function animate() {
                // Calculate the new vertical position based on a sine wave and the global scroll position
                const scrollValue = window.scrollY;
                const newY = amplitude * Math.sin(scrollValue * (2 * Math.PI) / period);
                animatedElement.style.transform = `translate3d(0px, ${newY - 10}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
                requestAnimationFrame(animate);
            }
            if (isInViewport(animatedElement)) {
                animate();
            }
        });

    }
    window.addEventListener('scroll', callAnimation('.core_bannerAfter', -0.82976));
    window.addEventListener('scroll', scrollElementUpAndDown('.streamlined_after', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.digitalAfterImg', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.organizedHR_after', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.empoweringHR_after', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.mobil_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.schedule_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.schedule_simplifiedAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.sch_informedAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.banner-img_after', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.timeoff_stmAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.timeoff_effAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.performanc_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.perf_drivingAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.perf_fosterAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.perf_inforAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.surveys_bnrAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.surveys_tapAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.surveys_learnAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.desks_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.rooms_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.parking_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.visit_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.maps_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.emergency_bannerAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.mobile_flagsAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.ani-page-img', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.security-frameimg', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.pi-imgframe', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.culture_faciliateAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.culture_connectAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.culture_bringAfter', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.animationAfterImgs', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.culcmm-frameOne', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.pi-imgframe', 20, 2000));
    window.addEventListener('scroll', scrollElementUpAndDown('.wk-imgframe1', 20, 2000));
       window.addEventListener('scroll', scrollElementUpAndDown('.wksm-img1', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.wksm-imgframe2', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.wrksm-imgframe3', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.empep-img1', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.mhb-bannerframe', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.wka-banframe', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.wkfa-img2frame', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.solover-imgframe1', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.solover-imgframe2', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.soluover-frame4', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.soluover-frame5', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.soluover-frame6', 20, 2000));
        window.addEventListener('scroll', scrollElementUpAndDown('.solov-bannerframe', 20, 2000));
});