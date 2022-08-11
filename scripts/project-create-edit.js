// Pega os paramêtros da URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Type: 'Create' | 'edit'
const screenType = params.id ? 'edit' : 'create';

function createOrEdit() {
    // Inicia a massa de dados (payload)
    let payload = {
        title: document.querySelector("#title").value,
        totalCost: document.querySelector("#totalCost").value,
        description: document.querySelector("#description").value,
        idClient: "1"
    }

    // Enviar para API
    fetch(`https://62e9b89901787ec7121bb21c.mockapi.io/api/projects${screenType == 'edit' ? ('/' + params.id) : ''}`, {
        method: screenType === 'edit' ? 'PUT' : 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        if(screenType === 'edit'){
            alert('Editado com sucesso!');
        } else {
            alert('Cadastrado com sucesso!')
        }

        window.location.href = "list.html";
    })
    
}

window.onload = function(){
    setScreenTypesTexts();
    fillInputs();
}

function fillInputs(){
    if(screenType === 'edit'){
        fetch(`https://62e9b89901787ec7121bb21c.mockapi.io/api/projects/${params.id}`)
        .then(response => response.json())
        .then(project => {
            document.querySelector("#title").value = project.title;
            document.querySelector("#totalCost").value = project.totalCost;
            document.querySelector("#description").value = project.description;
        })
    }

}

function setScreenTypesTexts(){
    // MODO CRIAR
    if (screenType == 'create'){
        document.querySelector('#main-title').innerText = "Vamos cadastrar seu novo projeto!";
        document.querySelector('#action-button').innerText = "Cadastrar";
    }

    // MODO EDITAR
    if(screenType == 'edit'){
       document.querySelector('#main-title').innerText = "Editar projeto";
       document.querySelector('#action-button').innerText = "Salvar";
    }
}