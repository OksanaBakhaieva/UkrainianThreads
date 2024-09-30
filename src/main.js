document.querySelector('.header-modal-toggle').addEventListener('click', toggleModal);
document.querySelector('.modal-close-button').addEventListener('click', toggleModal);
document.querySelectorAll('.modal-nav-link').forEach(link => {
    link.addEventListener('click', toggleModal);
});

function toggleModal (e) {
    document.querySelector('.modal').classList.toggle('toggleModal');
}
