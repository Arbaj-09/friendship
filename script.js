document.getElementById("greeting-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    alert(`Happy Friendship Day, ${name}!\n\n${message}`);
    document.getElementById("greeting-form").reset();
});

function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;

    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// javascript for poem section

const poem = document.getElementById("poem");

poem.addEventListener("mouseover", function () {
    poem.style.backgroundColor = "#fff";
});

poem.addEventListener("mouseout", function () {
    poem.style.backgroundColor = "#f8f8f8";
});
