const form = document.querySelector('#subject-form');
const subjectList = document.querySelector('.collection');
const subjectInput = document.querySelector('#subject');
const resultInput = document.querySelector('#result');

loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit',addDetails);

}

function addDetails(e){
    if(subjectInput.value===''|| resultInput.value===''){
        alert('File Your Result and Subject Code');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(subjectInput.value));
    
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(resultInput.value));

    const link = document.createElement('a');
    link.className = 'secondary-content';
    link.innerHTML = '<i class="fa fa-remove">';

    li.appendChild(link);




    subjectList.appendChild(li);

    subjectInput.value = '';
    resultInput.value = '';

    e.preventDefault();

}

