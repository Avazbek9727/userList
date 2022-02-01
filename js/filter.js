let searchDiv = document.querySelector('#searchDiv')
let searchInput = document.querySelector('#searchInput')
let remove = document.querySelectorAll('#delete')

let searchUsers = window.localStorage.getItem('users') 

searchUsers = JSON.parse(searchUsers)
console.log(searchUsers);


searchInput.onkeyup = (event) => {
    //event.preventDefault()
    let searchFullName = searchInput.value 
    let inputValueRegex = new RegExp(searchFullName, 'gi')
    if (event.keyCode == 13) {
        const tes = searchUsers.filter(el => {
            return el.fullName.match(inputValueRegex)
        })

        let userBody = document.querySelector('#userBody')

        userBody.innerHTML = ''
        
        renderUsers (tes)
    }
} 












