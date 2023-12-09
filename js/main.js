let elForm = document.querySelector(".js-form");
let elName = document.querySelector(".input-name");
let elNumber = document.querySelector(".input-number");
let elType = document.querySelector(".js-select");

let elList = document.querySelector(".js-list");

let newArray = [];

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    newArray.push({
        name : elName.value,
        contact : elNumber.value,
        type : elType.value,
    })
    elName.value = '';
    elNumber.value = '';
    elType.value = 'Type';
    
    renderDatas(newArray, elList);
})

function renderDatas(array, node) {
    node.innerHTML = '';
    array.forEach((item) => {
        let elItem = document.createElement("li");
        let newWrapper = document.createElement("div");
        let newUser = document.createElement("h3");
        let newPhoneNumber = document.createElement("a");
        let newType = document.createElement("p");
        
        newUser.textContent = `${item.name}`;
        newPhoneNumber.textContent = `${item.contact}`;
        newPhoneNumber.href = `tel:${item.contact}`;
        newType.textContent = `Type : ${item.type}`;
        newUser.classList.add("userName");
        newPhoneNumber.classList.add("userPhone");
        newType.classList.add("userType");
        
        newWrapper.append(newUser, newPhoneNumber);
        elItem.append(newWrapper, newType);
        elItem.classList.add("flex", "list-item");
        node.appendChild(elItem);
    });
    
    elAllSum.textContent = newArray.length;
    
    let resultFamily = newArray.filter((item) => item.type == 'family');
    elFamilySum.textContent = resultFamily.length;
    
    let resultWork = newArray.filter((item) => item.type == 'work');
    elWorkSum.textContent = resultWork.length;
    
    let resultFriend = newArray.filter((item) => item.type == 'friend');
    elFriendSum.textContent = resultFriend.length;
}

let elAllBtn = document.querySelector(".btn-orange");
let elFamilyBtn = document.querySelector(".btn-red");
let elWorkBtn = document.querySelector(".btn-green");
let elFriendBtn = document.querySelector(".btn-blue");

let elAllSum = document.querySelector(".btn-1");
let elFamilySum = document.querySelector(".btn-2");
let elWorkSum = document.querySelector(".btn-3");
let elFriendSum = document.querySelector(".btn-4");

elAllBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    
    renderDatas(newArray, elList);
})

elFamilyBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    
    let result = newArray.filter((item) => item.type == 'family');
    elFamilySum.textContent = result.length;
    renderDatas(result, elList);
})

elWorkBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    
    let result = newArray.filter((item) => item.type == 'work');
    elWorkSum.textContent = result.length;
    renderDatas(result, elList);
})

elFriendBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    
    let result = newArray.filter((item) => item.type == 'friend');
    elFriendSum.textContent = result.length;
    renderDatas(result, elList);
})

renderDatas(newArray, elList);

let elSortAz = document.querySelector(".btn-az");
let elSortZa = document.querySelector(".btn-za");

elSortAz.addEventListener('click', (evt) => {
    evt.preventDefault();
    let res = newArray.sort((a,b) => a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt());
    renderDatas(res, elList);
})
elSortZa.addEventListener('click', (evt) => {
    evt.preventDefault();
    let res = newArray.sort((a,b) => b.name.toLowerCase().charCodeAt() - a.name.toLowerCase().charCodeAt());
    renderDatas(res, elList);
})