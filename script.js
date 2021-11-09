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