
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersChars = '0123456789';
const specialChars = '!@#$%^&*()-_=+[{]}\\|;:,.<>?';

function generatePassword() {
    const length = parseInt(lengthInput.value);
    const includesLowercase = lowercaseCheckbox.checked;
    const includesUppercase = uppercaseCheckbox.checked;
    const includesNumbers = numbersCheckbox.checked;
    const includesSpecial = specialCheckbox.checked;

    let availableChars = '';
    if (includesLowercase) availableChars += lowercaseChars;
    if (includesUppercase) availableChars += uppercaseChars;
    if (includesNumbers) availableChars += numbersChars;
    if (includesSpecial) availableChars += specialChars;

    if (availableChars === '') {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    passwordInput.value = password;
}

copyBtn.addEventListener('click', () => {
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

generateBtn.addEventListener('click', generatePassword);
