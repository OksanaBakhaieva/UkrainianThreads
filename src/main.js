document.querySelector('#modal-open').addEventListener('click', toggleModal);
document.querySelector('#modal-close').addEventListener('click', toggleModal);
document.querySelectorAll('.modal-nav-link').forEach(link => {
    link.addEventListener('click', toggleModal);
});

function toggleModal (e) {
    document.querySelector('.modal').classList.toggle('toggleModal');
}
