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
    // Sélectionner toutes les images et vidéos des galeries
    const mediaItems = document.querySelectorAll(".image-box img, .image-box video, .media-item img, .media-item video");

    // Créer le modal
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modal.appendChild(modalContent);

    const closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.textContent = "✖";
    modal.appendChild(closeButton);

    // Ajouter le curseur pointer sur les médias
    mediaItems.forEach((item) => {
        item.style.cursor = "pointer";

        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            modalContent.innerHTML = "";

            if (item.tagName === "VIDEO") {
                const video = document.createElement("video");
                video.src = item.src;
                video.controls = true;
                video.autoplay = true;
                video.classList.add("modal-media");
                modalContent.appendChild(video);
            } else {
                const img = document.createElement("img");
                img.src = item.src;
                img.alt = item.alt || "";
                img.classList.add("modal-media");
                modalContent.appendChild(img);
            }

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // Fermer le modal
    closeButton.addEventListener("click", () => {
        closeModal();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fermer avec Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        // Arrêter la vidéo si en cours
        const video = modalContent.querySelector("video");
        if (video) {
            video.pause();
        }
    }

    // Menu burger
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});

