document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".beauty__section__formats");
    const slides = Array.from(document.querySelectorAll(".beauty__section__item"));
    const dots = Array.from(document.querySelectorAll(".dots .dot"));

    if (!slider || slides.length === 0 || dots.length === 0) return;

    function setActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle("dot-active", i === index);
        });
    }

    setActiveDot(0);

   
    slider.addEventListener("scroll", () => {
        const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;
        let activeIndex = 0;

        slides.forEach((slide, index) => {
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;

            if (Math.abs(slideCenter - sliderCenter) < slide.offsetWidth / 2) {
                activeIndex = index;
            }
        });

        setActiveDot(activeIndex);
    });

    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            slides[index].scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });
            setActiveDot(index);
        });
    });
});
