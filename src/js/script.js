document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.gallery-img');
    const lightbox = document.querySelector('#lightbox');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const fullImgPath = thumbnail.dataset.fullImg;
            const img = document.createElement('img');
            img.src = fullImgPath;
            lightbox.innerHTML = '';
            lightbox.appendChild(img);
            lightbox.showModal();
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.close();
    });
});