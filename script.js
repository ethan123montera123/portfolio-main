function toggleSize(img) {
    img.classList.toggle('enlarged');
    if (img.classList.contains('enlarged')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}