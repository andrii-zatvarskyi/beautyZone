  const openBtn = document.querySelector(".logo__section__button");
  const closeBtn = document.querySelector(".modal-button-close");
  const modal = document.querySelector(".backdrop");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("is-hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("is-hidden");
  });


  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("is-hidden");
    }
  });