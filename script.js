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

    const fields =  document.querySelectorAll('.field:not(.btn-claim-trial)');
    
    for (let i=0; i<fields.length; i++) {

        /* IN CASE OF EMAIL FIELD */
        if (fields[i].id == 'email') {
            if(!isEmail(emailAddress.value)) {
                setError(emailAddress);
            }
            else {
                unsetError(emailAddress);
            }
        }

        /* OTHER SIMPLE CASES */
        else if (fields[i].value == '') {
            setError(fields[i]);
        }

        else {
            unsetError(fields[i]);
        }
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

// VERIFYING THE EMAIL (EMAILREGEX.COM)
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}