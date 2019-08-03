const form = document.querySelector('#subject-form');
const subjectList = document.querySelector('.list-group');
const inputSubject = document.querySelector('#inputScode');
const inputResult = document.querySelector('#inputResult');
const gpa = document.querySelector('#displaygpa');
var totalGpa = 0;
var totalCredit = 0;

loadEventListeners();

function loadEventListeners(){
    

    form.addEventListener('submit',addDetails);

    subjectList.addEventListener('click',removeSubject);

}

function addDetails(e){
    const li = document.createElement('li');
    li.className = 'list-group-item';
    const Scode = document.createElement('span');
    Scode.appendChild(document.createTextNode(inputSubject.value));
    Scode.appendChild(document.createTextNode("--------------------------------------"));
    Scode.appendChild(document.createTextNode(inputResult.value));
    li.appendChild(Scode);

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove">';
    li.appendChild(link);

    subjectList.appendChild(li);
    e.preventDefault();

    getTotalcreadit_and_valueOfLetter();
     inputSubject.value = '';
     inputResult.value = '';
    }
    


function removeSubject(e){
    
    

    if(e.target.parentElement.classList.contains('delete-item')){
        const deleteIteminput = e.target.parentElement.parentElement.firstChild.innerHTML;
        changeGpa(deleteIteminput);
        if(confirm('Are you sure?')){}
            e.target.parentElement.parentElement.remove();

    }
}

function getTotalcreadit_and_valueOfLetter(){
     const valueOfletter = getDigit(inputResult.value);

    const code = inputSubject.value;
    const lastCharacterOfCode = code.charAt(code.length-1);
     const lastNumber = parseInt(lastCharacterOfCode);
     if(Number.isInteger(lastNumber)){
        totalGpa = totalGpa + valueOfletter*lastNumber;
        console.log(totalGpa);
         totalCredit = totalCredit+lastNumber;
         console.log(totalCredit);
        getTotalGpa(totalGpa,totalCredit);    
     }

}

function changeGpa(removeCode){
    
     console.log(removeCode);
     const CharacterOfList = removeCode.charAt(removeCode.length-40);
     const lastCharacterOfList = removeCode.charAt(removeCode.length-1);
     console.log(lastCharacterOfList);
     const valueOfRemoveLetter = getDigit(lastCharacterOfList);
     const lastNumber = parseInt(CharacterOfList);
     if(Number.isInteger(lastNumber)){
         totalGpa = totalGpa-valueOfRemoveLetter*lastNumber;
         console.log(totalGpa);
         totalCredit = totalCredit-lastNumber;
            console.log(totalCredit);
        getTotalGpa(totalGpa,totalCredit);   
    }
}

function getTotalGpa(totalGpa,totalCredit){
    totalOfGpa= totalGpa/totalCredit;
    console.log(totalOfGpa);
    if(isNaN(totalOfGpa)){
        gpa.value = "0.0000";
    }else{
        gpa.value = totalOfGpa.toFixed(4);
    }
        
    }


function getDigit(result){
    switch(result){
        case "A+":
                digit = 4.00;
            break;
        case "A":
                digit = 4.00;
            break;
        case "A-":
                digit = 3.70;
            break;
        case "B+":
                digit = 3.30;
            break;
        case "B":
                digit = 3.00;
            break;
        case "B-":
                digit = 2.70;
            break;
        case "C+":
                digit = 2.30;
            break;
        case "C":
                digit = 2.00;
            break;
        case "C-":
                digit = 1.70;
            break;
        case "D+":
                digit = 1.30;
            break;
        case "D":
                digit = 1.00;
            break;
        case "E":
                digit = 0.00;
            break;
        default:
                digit = 0.0;

    }
    return  digit;
}

