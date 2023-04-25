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

        //li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value}`));

        //creating an object of user
        let my_obj ={
            name: nameInput.value,
            email: emailInput.value
        }
        
        var myObj_serialized = JSON.stringify(my_obj);

        //Storing the user as object in localstorage
        localStorage.setItem(emailInput.value, myObj_serialized);

        //Displaying the details as object
        li.textContent = my_obj.name +" "+my_obj.email;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';

        //deleteBtn.appendChild(document.createTextNode('delete'));
        deleteBtn.textContent = 'delete';
        li.appendChild(deleteBtn);

        userList.appendChild(li);

        deleteBtn.onclick = () => {
            localStorage.removeItem(my_obj.email);
            userList.removeChild(li);
        };


        //console.log(localStorage.getItem("myObj"));

        //Clear fields
        nameInput.value='';
        emailInput.value='';
    }
}

// function removeElement(e){
    
//     if(confirm('Are you sure?')){
//         var li = e.target.parentElement;
//         //console.log(li.childNodes[0]);
//         var text = JSON.stringify(li.childNodes[0].textContent);
//         //var text = li.childNodes[0].innerText;
//         var array = text.split('-');

//         //console.log(array[1]);

//         localStorage.removeItem(array[1]);

//         userList.removeChild(li);

//     }

// }

form.addEventListener('mouseover', onMouseover);

function onMouseover(e){
    e.preventDefault();
    form.classList.add('btn-hover');
}

// form.addEventListener('mouseout', onMouseout);

// function onMouseout(e){
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark');
// }