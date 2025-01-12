document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

const scrollToTopButton = document.querySelector('.scroll-to-top');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const imageBoxes = document.querySelectorAll(".image-box img, .image-box video");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const modalContent = document.createElement("div");
    modalContent.style.display = "flex";
    modalContent.style.justifyContent = "center";
    modalContent.style.alignItems = "center";
    modal.appendChild(modalContent);

    const closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.textContent = "✖";
    modal.appendChild(closeButton);

    imageBoxes.forEach((item) => {
        item.addEventListener("click", () => {
            modalContent.innerHTML = "";
            const clone = item.cloneNode(true);
            clone.style.margin = "auto";
            modalContent.appendChild(clone);
            modal.classList.add("active");
        });
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});
