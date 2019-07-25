const form = document.querySelector('#subject-form');
const subjectList = document.querySelector('.collection');
const subjectInput = document.querySelector('#subject');
const resultInput = document.querySelector('#result');
const gpa = document.querySelector('#gpa');

loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit',addDetails);

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
    link.className = 'secondary-content';
    link.innerHTML = '<i class="fa fa-remove">';

    li.appendChild(link);




    subjectList.appendChild(li);

    // subjectInput.value = '';
    // resultInput.value = '';

    e.preventDefault();
    

    calulateGpa();
    // gpa.value= totalgpa;
    // console.log(gpa.value)
    // ;





}

function calulateGpa(){
    
    //console.log(resultInput.value);
     const gpaValue = getGpavalue(resultInput.value);
     //console.log(gpaValue);

    const charcter = subjectInput.value;
    const lastCharacterOfCode = charcter.charAt(charcter.length-1);
    //console.log(typeof(lastCharacterOfCode));
    
     const calculate = parseInt(lastCharacterOfCode);
     if(Number.isInteger(calculate)){
         //console.log("hai");
         const totalgpa = calculate*gpaValue;
         gpa.value= totalgpa;
         console.log(totalgpa);
     }
    //console.log(calculate);
    // return calculate;

}

function getGpavalue(result){
    console.log(result);
    switch(result){
        case "A+":
                gpavalue = 4.00;
            break;
        case "A":
                gpavalue = 4.00;
            break;
        case "B+":
                gpavalue = 4.00;
            break;
        case "B":
                gpavalue = 4.00;
            break;
        case "B-":
                gpavalue = 4.00;
            break;
        case "C+":
                gpavalue = 4.00;
            break;
        case "C":
                gpavalue = 4.00;
            break;
        case "C-":
                gpavalue = 4.00;
            break;
        case "D+":
                gpavalue = 4.00;
            break;
        case "D":
                gpavalue = 4.00;
            break;
        case "E":
                gpavalue = 4.00;
            break;
        default:
                gpavalue = 0.0;

    }
    //document.getElementById("p1").value = "gpavalue";
    return gpavalue;
}

