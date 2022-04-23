function modal () {
    const   modalForm = document.querySelector('.modal'),
            modalInner = document.querySelector('.modal__inner'),
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

    // Создание "Х" для закрытия модального окна
    const xBtn = document.createElement('div');
    xBtn.innerText = 'X';

    modalInner.append(xBtn);

    xBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 25px;
        padding: 10px;
        font-size: 24px;
        color: #fff;
        cursor: pointer;
    `; 

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

    xBtn.addEventListener('click', () => {
        closeModal();
    });
    
}
modal();