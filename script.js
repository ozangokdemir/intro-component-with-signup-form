<<<<<<< HEAD
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
=======
firstName = document.getElementById('first-name');
lastName = document.getElementById('first-name');
emailAddress = document.getElementById('first-name');
password = document.getElementById('first-name');

document
    .getElementById('claim')
    .addEventListener('click', function() {
        const elt =  document.querySelectorAll('.field:not(:last-of-type)');
        console.log('Element ciblé :', elt[1].nodeName);
        for (let i=0; i<elt.length; i++) {

            // IF INPUT ELEMENT IS EMPTY
            if (elt[i].value == '') {
                elt[i].style.border = '2px solid hsl(0, 100%, 74%)';
                elt[i].style.border.radius = '20px';
                elt[i].style.background = 'url("images/icon-error.svg") no-repeat 95%';

                // IF THERE'S NO LABEL UNDER THE INPUT
                if (elt[i].nextElementSibling.tagName == 'INPUT') {

                    // CREATING ELEMENT CONTAINING THE ERROR MSG
                    let inputLabel = document.createElement('div');

                    // HANDLE EMAIL FORM SPECIAL ERROR MSG
                    if (i == 2){
                        inputLabel.innerHTML = 'Looks like this is not an email';
                        elt[i].setAttribute('placeholder', 'email@example/com');
                        elt[i].classList.add('error');
                    }
                    // ALL OTHER CASES
                    else{
                        inputLabel.innerHTML = elt[i].getAttribute('placeholder') + ' cannot be empty';
                        elt[i].removeAttribute('placeholder');
                    }

                    // RESTYLING ERROR LABELS AND ADDING THEM AFTER EACH INPUT
                    inputLabel.style.cssText = `
                        align-self: flex-end;
                        margin: .8em 4em 0 0;
                        font-size: 12px;
                        font-style: italic;
                        color: var(--red);
                    `;
                    elt[i].after(inputLabel);
                }

            }
            
            // IF THERE'S A LABEL UNDER THE INPUT
            else {
                elt[i].removeAttribute('style');
                if (elt[i].nextElementSibling.tagName != 'INPUT') {
                    elt[i].nextElementSibling.remove();
                }
            }

        }
    });
>>>>>>> aeb017eb1abffd119341d91bae9a18b034676a64
