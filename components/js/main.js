const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === ''){
        errorValidation(username, 'Preencha este campo')
    } else {
        
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querrySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}