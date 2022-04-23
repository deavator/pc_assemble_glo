function modal () {
    const   modalForm = document.querySelector('.modal'),
            modalBtn = document.querySelector('.modal__button');

    // === ФУНКЦИИ ========================== 
    function openModal () {
        modalForm.style.display = "flex";
    }
    
    function closeModal () {
        modalForm.style.display = "none";
    }

    // === ОБРАБОТКА СОБЫТИЙ =================
    modalBtn.addEventListener('click', () => {
        openModal();
    });

    modalForm.addEventListener('click', (e) => {
        const formContent = e.target.closest('.modal__inner');
        if (!formContent) {closeModal();}
    });

    
}
modal();