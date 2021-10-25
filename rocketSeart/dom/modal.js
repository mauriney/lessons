/* Criar um evento que ao clicar no botão abrir janela ele remove a class invisible e ao clicar ESC ele adiciona novamente */

const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

buttonOpenModal.onclick = function () {
    console.log('erro 1')
    modalWrapper.classList.remove('invisible')
    console.log('erro 2')
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})