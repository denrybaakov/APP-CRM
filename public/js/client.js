const modalOrder = document.querySelector('.modalOrder')
const addOrder = document.querySelector('.btnOrder')


console.log('Я скрипт клиенТТТТТТТТ!!!!!!!!!!!!!!!!!!');

addOrder.addEventListener('click', () => modalOrder.classList.remove('hide'))
modalOrder.addEventListener('mousedown', e => {
  if (e.target.className === 'modalOrder') {
    modalOrder.classList.add('hide')
  }
})
