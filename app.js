const addButton = document.getElementById('add_button');
const addFormInput = document.getElementById('add_form_input');
const ulList = document.querySelector('#book_list > ul');
const hideBox = document.getElementById('hide');
let liElements = document.getElementsByTagName('li')

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

const handleDeteleBook = event => {
        const {target} = event
        console.log(target.className)
        if (target.className === 'delete') {
            // console.log(target,'delete button')
            const li = target.parentElement
            console.log(li)
            ulList.removeChild(li)
        }
        }
        
        ulList.addEventListener('click', handleDeteleBook)
        //------------------------------------------------
        // hide books functional
        const handelHideBooks = event => {
            const { target } = event;
            // if (target.checked) {
            //    ullist.style.display = 'none' 
            // } else {
            //     ullist.style.display = 'block' 
            // };
             ulList.style.display = target.checked ? 'none' : 'block' 
            // console.log(target.checked)
        }
        hideBox.addEventListener('input',handelHideBooks)
        
        const handleSearche = () => {
            const {value} = searchBar
            console.log(value)
        }
        searchBar.addEventListener('keyup',handleSearche)
//////////////////////////////////////////////////////////////////

const handleSearch = () => {
    const query = searchBar.value.trim().toLowerCase();
    for (let i = 0; i < liElements.length; i++) {
      const lis = liElements[i];
      const bookName = lis.querySelector('.name').innerText.toLowerCase();
      if (bookName.includes(query)) {
        lis.style.display = 'block';
      } else {
        lis.style.display = 'none';
      }
    }
  };

  searchBar.addEventListener('keydown',handleSearch)
  