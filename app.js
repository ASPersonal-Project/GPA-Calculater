const form = document.querySelector('#subject-form');
const subjectList = document.querySelector('.collection');
const subjectInput = document.querySelector('#subject');
const resultInput = document.querySelector('#result');
const gpa = document.querySelector('#gpa');
var totalgpa = 0;
var totalcredit = 0;

loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit',addDetails);

    subjectList.addEventListener('click',removesubject);

}

function addDetails(e){
    if(subjectInput.value===''|| resultInput.value===''){
        //alert('File Your Result and Subject Code');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(subjectInput.value));
    
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(resultInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove">';

    li.appendChild(link);




    subjectList.appendChild(li);

    // subjectInput.value = '';
    // resultInput.value = '';

    e.preventDefault();
    

    calulateGpa();
    subjectInput.value = '';
    resultInput.value = '';
    
    // gpa.value= totalgpa;
    // console.log(gpa.value)
    // ;





}

function removesubject(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){}

        e.target.parentElement.parentElement.remove();

    }
    // if(e.target.parentElement.classList.contains('delete-item')){
    //     //console.log(e.target);
    //     if(confirm('Are you sure?')){}
    //     e.target.parentElement.parentElement.remove();
    //   }
   

}

function calulateGpa(){
    
    //console.log(resultInput.value);
     const gpaValue = getGpavalue(resultInput.value);
     //console.log(gpaValue);

    const charcter = subjectInput.value;
    const lastCharacterOfCode = charcter.charAt(charcter.length-1);
    
    
     const calculate = parseInt(lastCharacterOfCode);
     if(Number.isInteger(calculate)){
         totalcredit = totalcredit+calculate;
        
         totalgpa = totalgpa + calculate*gpaValue;
         gpa.value= totalgpa/totalcredit;
         
     }
    //  return totalgpa;
    //console.log(calculate);
    // return calculate;

}

// function totalgpa(){
//     const totalvalue = calculateGpa();
// }

function getGpavalue(result){
    console.log(result);
    switch(result){
        case "A+":
                gpavalue = 4.00;
            break;
        case "A":
                gpavalue = 4.00;
            break;
        case "A-":
                gpavalue = 3.70;
            break;
        case "B+":
                gpavalue = 3.30;
            break;
        case "B":
                gpavalue = 3.00;
            break;
        case "B-":
                gpavalue = 2.70;
            break;
        case "C+":
                gpavalue = 2.30;
            break;
        case "C":
                gpavalue = 2.00;
            break;
        case "C-":
                gpavalue = 1.70;
            break;
        case "D+":
                gpavalue = 1.30;
            break;
        case "D":
                gpavalue = 1.00;
            break;
        case "E":
                gpavalue = 0.00;
            break;
        default:
                gpavalue = 0.0;

    }
    //document.getElementById("p1").value = "gpavalue";
    return gpavalue;
}

