const contents = document.querySelectorAll('.program-line__content');

function classActiveRemove() {
    contents.forEach(elem => {
        const descr = elem.querySelector('.program-line__descr');
        contents.forEach(elem => {
            if (descr.classList.contains('active')) {
                descr.classList.remove('active');
            }
        });
    });
}

contents.forEach(elem => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        if (descr.classList.contains('active')) {
            descr.classList.remove('active');
        } else {
            classActiveRemove();
            descr.classList.add('active');
        }
    });
});


