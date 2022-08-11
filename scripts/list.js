window.onload = function () {
    document.querySelector("#name").innerText = localStorage.getItem("userName");
    document.querySelector("#role").innerText = localStorage.getItem("role");

    getProjects();
}

function getProjects(){
    fetch("https://62e9b89901787ec7121bb21c.mockapi.io/api/projects")
    .then(response => response.json())
    .then(response => {
       response.forEach(el => {           
           let template = `
              <div class="row">
                  <div class="title-description">
                      <h6 class="title">${el.title}</h6>    
                      <p class="description">${el.description}</p>
                  </div>
                  <div class="price">${el.totalCost}</div>
                  <div class="actions">
                      <span class="edit material-icons">edit</span>
                      <span class="delete material-icons">delete_outline</span>
                  </div>
              </div>
            `
    
           document.querySelector("#table-body").insertAdjacentHTML("beforeend", template)
       }); 
    })
}