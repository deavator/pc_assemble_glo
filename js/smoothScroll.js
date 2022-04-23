function smoothScroll () {
    const navBar = document.querySelector('.header__nav'),
    links = navBar.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = document.querySelector(link.getAttribute('href'));
            if (path) {

                // 1. stand alone smooth scroll
                // path.scrollIntoView({
                //     block: 'start',
                //     behavior: 'smooth'
                // });

                // 2. cross-browser smooth scroll (on-line)
                seamless.scrollIntoView(path, {
                behavior: "smooth",
                block: "start",
                inline: "center",
                });
            }

        });
    });
}

smoothScroll();