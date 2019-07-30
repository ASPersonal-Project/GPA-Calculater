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
    console.log("haii")
    if(inputSubject.value===''|| inputResult.value===''){
        alert('File Your Result and Subject Code');
    }
    const li = document.createElement('li');
    li.className = 'list-group-item';
    const Scode = document.createElement('span');
    
    Scode.appendChild(document.createTextNode(inputSubject.value));
    const Result = document.createElement('span');
    Result.className = 'space';
    Result.appendChild(document.createTextNode(inputResult.value));

    
    // console.log(document.getElementsByClassName('collection-'));
    
    // sCode.appendChild(document.createTextNode(" "));
    // sCode.appendChild(document.createTextNode(resultInput.value));
    li.appendChild(Scode);
    
    
    li.appendChild(Result);

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove">';

     li.appendChild(link);




    subjectList.appendChild(li);
    // inputSubject.value = '';
    // inputResult.value = '';
    

    

    e.preventDefault();

    getTotalcreadit_and_valueOfLetter();
    

    // calulateGpa();
    // inputSubject.value = '';
    // inputResult.value = '';
    
}

function removeSubject(e){
    //changeGpa();
    

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){}

        

        e.target.parentElement.parentElement.remove();

    }
   

}

function getTotalcreadit_and_valueOfLetter(){
    //console.log(inputResult.value);
    
    
     const valueOfletter = getDigit(inputResult.value);
     console.log(valueOfletter);

    const code = inputSubject.value;
    //console.log(code);
    const lastCharacterOfCode = code.charAt(code.length-1);
    
    
     const lastNumber = parseInt(lastCharacterOfCode);
     //console.log(lastNumber);
     if(Number.isInteger(lastNumber)){
         totalCredit = totalCredit+lastNumber;
        // console.log(totalCredit);
        getTotalGpa(valueOfletter,totalCredit,lastNumber);
         
         
     }
    //  return totalgpa;
    //console.log(lastNumber);
    // return lastNumber;

}

function changeGpa(){
    const deleteIteminput = document.querySelector('.collection-item');
    const removeCode = deleteIteminput.firstChild.innerHTML; 
    const lastCharacterOfCode = removeCode.charAt(removeCode.length-1);
    const lastNumber = parseInt(lastCharacterOfCode);
    if(Number.isInteger(lastNumber)){
        totalcredit = totalcredit-lastNumber;
        //console.log(totalcredit);
       
        // totalgpa = totalgpa + lastNumber*gpaValue;
        // gpa.value= totalgpa/totalcredit;
        
    }

    
        //console.log(deleteIteminput.firstChild.innerHTML);

}
function getTotalGpa(valueOfletter,totalCredit,lastNumber){
    //console.log('ksnjfls');
    //console.log(valueOfletter);
    totalGpa = totalGpa + lastNumber*valueOfletter;
    gpa.value= totalGpa/totalCredit;
    
}

// function totalgpa(){
//     const totalvalue = lastNumberGpa();
// }

function getDigit(result){
    //console.log(result);
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
    //document.getElementById("p1").value = "gpavalue";
    return  digit;
}

