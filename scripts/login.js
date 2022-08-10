function checkIfAnyRoleIsChecked(){
    let list = document.getElementsByName("role");
    let counter = 0;

    for(let radioButton of list){
        if(radioButton.checked === false){
            counter++;
        }
    }

    return counter !== list.length;
}


function cadastrar() {

    if(checkIfAnyRoleIsChecked() === false){
        alert('Marque alguma Role!')
    }

    let payload = {
        fullName: document.querySelector('#fullName').value,
        birthdate: document.querySelector('#birthdate').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }
    
}