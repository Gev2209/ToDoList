const addButton = document.getElementById('add_button');
const addFormInput = document.getElementById('add_form_input');
const ulList = document.querySelector('#book_list > ul');
const hideBox = document.getElementById('hide');

const hendleAddBook = () => {
      const { value } = addFormInput;
    if (value.trim()) {
            const li = document.createElement('li');
            const bookName = document.createElement('span');
            const bookBoutton = document.createElement('span');

            bookName.innerText = value;
            bookBoutton.innerText = 'delete';

            bookName.classList.add('name');
            bookBoutton.classList.add('delete');
            li.appendChild(bookName);
            li.appendChild(bookBoutton);
            ulList.appendChild(li);
            addFormInput.value = '';
    }  
}
addButton.addEventListener('click', hendleAddBook)