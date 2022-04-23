function modal () {
    const   modalForm = document.querySelector('.modal'),
            modalBtn = document.querySelector('.modal__button'),
            closeBtn = document.querySelector('.close-bnt'),
            courseBtn = document.querySelector('.course-button__wrap');

    const openBtns = [...arguments, modalBtn, courseBtn];
    

    // === ФУНКЦИИ ========================== 
    function openModal () {
        modalForm.style.display = "flex";
    }
    
    function closeModal () {
        modalForm.style.display = "none";
    }

    // === ОБРАБОТКА СОБЫТИЙ =================
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
        openModal();
        });
    });

    modalForm.addEventListener('click', (e) => {
        const formContent = e.target.closest('.modal__inner');
        if (!formContent) {closeModal();}
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });
    
}
modal();