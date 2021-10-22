firstName = document.getElementById('first-name');
lastName = document.getElementById('first-name');
emailAddress = document.getElementById('first-name');
password = document.getElementById('first-name');

document
    .getElementById('claim')
    .addEventListener('click', function() {
        const elt =  document.querySelectorAll('.field:not(:last-of-type)');
        console.log('Premier élement : ', elt[1].firstElementChild);
        for (let i=0; i<elt.length; i++) {
            if (elt[i].value == '') {
                elt[i].style.outline = '2px solid hsl(0, 100%, 74%)';
                elt[i].style.background = 'url("images/icon-error.svg") no-repeat 95%';

                /* if (elt[i].firstElementChild) {
                    elt[i].after(document
                        .createElement('p')
                        .appendChild(document.createTextNode(elt[i].getAttribute('placeholder') + ' cannot be empty')
                    ));
                } */

                elt[i].appendChild(document.createElement('p'));

                        
            }
            else {
                elt[i].removeAttribute('style');
                elt[i].removeChild(document.querySelector('.field p'));
            }
        }
    });

// document.getElementById('first-name').appendChild(document.createElement("p"));