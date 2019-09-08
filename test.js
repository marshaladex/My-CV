const modalControls = (() => {
const openModal = () => {
    modal.classList.remove('hide-modal');
};
const closeModal = () => {
    modal.classList.add('hide-modal');
    email.value = '';
    name.value = '';
    message.value = '';
    };

const openModalBtn = document.querySelector('.contact-modal-open-btn').addEventListener('click', openModal);
    const closeModalBtn = document.querySelector('#close-btn');
    closeModalBtn.addEventListener('click', closeModal);
    const modal = document.querySelector('#modal-with-form'); 
    const name = document.querySelector('#name'); 
    const email = document.querySelector('#email'); 
    const message = document.querySelector('#message'); 
})();