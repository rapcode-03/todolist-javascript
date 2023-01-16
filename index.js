const inputUser = document.getElementById("input-user");
const listGroup = document.querySelector(".list-group");
const form = document.querySelector("form");
const list_item = [];

function manageLocalStorage(action, item){
    switch(action){
        case 'tambah':
            list_item.push(item);
            break;
        case 'hapus':
           list_item = list_item.filter(function(todoItem){
                todoItem != item
            });
            break;
    }
    localStorage.setItem("to do items", JSON.stringify(list_item));
}


form.addEventListener("submit", function(event){
    listGroup.innerHTML += `
    <li class="list-group-item  d-flex justify-content-between align-items-center">
                <h3>${inputUser.value}</h3>
                <span class="fs-3 text-danger"><i class="bi bi-x-square-fill" id="remove"></i></span>
            </li>`;

    manageLocalStorage("tambah",inputUser.value);
    

    inputUser.value ="";
    event.preventDefault();

});

listGroup.addEventListener("click", function(event){
if(event.target.id =="remove") {
    event.target.parentElement.parentElement.remove();
    manageLocalStorage('hapus',event.target.parentElement.parentElement.textContent.trim());
}
});
