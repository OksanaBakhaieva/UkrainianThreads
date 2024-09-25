
    const modal = document.getElementById('myModal');
    const openButton = document.getElementById('openModal');
    const closeButton = document.getElementById('closeModal');

    openButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });