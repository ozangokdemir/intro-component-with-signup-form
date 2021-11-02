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
                    let inputLabel = document.createElement('div');
                    inputLabel.innerHTML = elt[i].getAttribute('placeholder') + ' cannot be empty';
                    inputLabel.style.cssText = `
                        right: 0px;
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