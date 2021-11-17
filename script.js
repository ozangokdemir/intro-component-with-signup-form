const submitButton = document.getElementById('claim');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');
const password = document.getElementById('pwd');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    
    // FIRST NAMES
    if(!isName(firstName.value)) {
        setError(firstName);
    }
    else {
        unsetError(firstName);
    }

    // LAST NAMES
    if(!isName(lastName.value)) {
        setError(lastName);
    }
    else {
        unsetError(lastName);
    }

    // EMAIL
    if(!isEmail(emailAddress.value)) {
        setError(emailAddress);
    }
    else {
        unsetError(emailAddress);
    }

    // PASSWORD
    if(password.value === '') {
        setError(password);
    }
    else {
        unsetError(password);
    }
}


function setError(element){

    // Deleting placeholder if not email field
    if(element != emailAddress) {
        element.removeAttribute('placeholder');
    }
    else {
        element.setAttribute('placeholder', 'email@example/com');
        element.classList.add('red-placeholder');
    }

    element.classList.add('field-error');
    element.nextElementSibling.style.display = 'block';
    element.nextElementSibling.style.visibility = 'visible';
}

function unsetError(element){

    element.classList.remove('field-error');
    element.nextElementSibling.style.display = 'none';
    element.nextElementSibling.style.visibility = 'hidden';
}


// VERIFYING NAMES (ALPHANUMERICAL)
function isName(name) {
    return /^[a-z ,.'-]+$/i.test(name);
}

// VERIFYING THE EMAIL (EMAILREGEX.COM)
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/* NOT USED HERE
// PASSWORD VERIFICATION (Simple : minimum 8 characters, at least 1 letter and 1 number)
function isPassword(pwd) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd);
}
*/
