let fullName = document.querySelector('#full-name')
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let bio = document.querySelector('#bio')
let currentPassword = document.querySelector('#current-password')
let newPassword = document.querySelector('#new-password')
let confirmPassword = document.querySelector('#confirm-password')
let btnSave = document.querySelector('#btn')
let userBody = document.querySelector('#userBody')



function renderUsers(users) {

    for (let user of users) {
        let tr = document.createElement('tr')

        tr.classList.add('trfornull')
        tr.innerHTML = `
       <td class="align-middle">
       <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
         <input type="checkbox" class="custom-control-input" id="${user.userId}">
         <label class="custom-control-label" for="${user.userId}"></label>
       </div>
   </td>
   <td class="align-middle text-center">
     <div class="bg-light d-inline-flex justify-content-center align-items-center align-top" style="width: 35px; height: 35px; border-radius: 3px;"><i class="fa fa-fw fa-photo" style="opacity: 0.8;"></i></div>
   </td>
   <td class="text-nowrap align-middle">${user.fullName}</td>
   <td class="text-nowrap align-middle"><span>${user.userName}</span></td>
   <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-on"></i></td>
   <td class="text-center align-middle">
       <div class="btn-group align-top">
           <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
           <button  class="btn btn-sm btn-outline-secondary badge" id="delete"  type="button"><i class="fa fa-trash"></i></button>
       </div>
   </td>
       `
        userBody.append(tr)
        //tr.innerHTML = null
    }
}
renderUsers(users)


btnSave.onclick = (event) => {
    event.preventDefault()
    let obj = {
        userId: users.length ? users.at(-1).userId + 1 : 1,
        fullName: fullName.value,
        userName: username.value,
        bio: '',
        currentPassword: currentPassword.value,
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value
    }
    console.log(obj);
    users.push(obj)
    let tr = document.createElement('tr')
    tr.innerHTML = `
       <td class="align-middle">
       <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
         <input type="checkbox" class="custom-control-input" id="item-1">
         <label class="custom-control-label" for="item-1"></label>
       </div>
   </td>
   <td class="align-middle text-center">
     <div class="bg-light d-inline-flex justify-content-center align-items-center align-top" style="width: 35px; height: 35px; border-radius: 3px;"><i class="fa fa-fw fa-photo" style="opacity: 0.8;"></i></div>
   </td>
   <td class="text-nowrap align-middle">${obj.fullName}</td>
   <td class="text-nowrap align-middle"><span>${obj.userName}</span></td>
   <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-on"></i></td>
   <td class="text-center align-middle">
       <div class="btn-group align-top">
           <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
           <button class="btn btn-sm btn-outline-secondary badge" id="delete" type="button"><i class="fa fa-trash"></i></button>
       </div>
   </td>
       `
    userBody.append(tr)
    window.localStorage.setItem('users', JSON.stringify(users))
}


/* function deleteItem(event) {
    //event.preventDefault()
    let found = users.find(el => el.userId == event.dataset.id)
    let i = users\ 
    console.log(found);
} */