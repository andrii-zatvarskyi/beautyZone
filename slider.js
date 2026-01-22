const container = document.querySelector(".beauty__section__formats");
const btnPrev = document.querySelector(".beauty__section__arrow__left");
const btnNext = document.querySelector(".beauty__section__arrow__right");
const dots = document.querySelectorAll(".dot");

let activeIndex = 0;
const total = dots.length;

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot-active", i === activeIndex);
  });
}

btnNext.addEventListener("click", () => {
  const last = container.lastElementChild;
  container.insertBefore(last, container.firstElementChild);

  activeIndex = (activeIndex + 1) % total;
  updateDots();
});

btnPrev.addEventListener("click", () => {
  const first = container.firstElementChild;
  container.appendChild(first);

  activeIndex = (activeIndex - 1 + total) % total;
  updateDots();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    let diff = index - activeIndex;

    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        container.insertBefore(
          container.lastElementChild,
          container.firstElementChild
        );
      }
    } else if (diff < 0) {
      for (let i = 0; i < Math.abs(diff); i++) {
        container.appendChild(container.firstElementChild);
      }
    }

    activeIndex = index;
    updateDots();
  });
});

/* init */
updateDots();
