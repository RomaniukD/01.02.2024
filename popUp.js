<<<<<<< HEAD
=======

>>>>>>> 46c119d6dd799967c83069a3defb7f6104326e72
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});
