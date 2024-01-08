const generate = document.getElementById('generate')
const userPassword = document.getElementById('password')
const len = document.getElementById('len')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const copyText = document.getElementById('copy-text')

copyText.addEventListener('click', ()=>{
    copyToClipboard()
})



function generateRandomPassword(length) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/{}[]|';

    let allChars = '';
    if(upper.checked){
        allChars += upperCaseChars
    }
    if(lower.checked){
        allChars+=lowerCaseChars
    }
    if(number.checked){
        allChars+=numberChars
    }
    if(symbol.checked){
        allChars+=symbolChars
    }
    console.log(allChars)
    // const allChars = lowerCaseChars + upperCaseChars + numberChars + symbolChars;

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

generate.addEventListener('click', () => {
    if(len.value == ''){
        alert('Enter password length!')
        return
    }
    if(!upper.checked && !lower.checked && !symbol.checked && !number.checked){
        alert('Check atleast one option!')
    }
    const newPassword = generateRandomPassword(len.value);
    userPassword.value = newPassword
})

function copyToClipboard(){
    userPassword.select()
    userPassword.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(userPassword.value)
}
