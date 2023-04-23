/* const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'HELLO';
ul.firstElementChild.style.background = 'green';

//ul.children[1].innerText = 'Brad';
ul.children[1].style.background = 'yellow';
 */

const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fields
        nameInput.value='';
        emailInput.value='';
    }
}

form.addEventListener('mouseover', onMouseover);

function onMouseover(e){
    e.preventDefault();
    form.classList.add('btn-hover');
}

form.addEventListener('mouseout', onMouseout);

function onMouseout(e){
    e.preventDefault();
    document.querySelector('body').classList.add('bg-dark');
}