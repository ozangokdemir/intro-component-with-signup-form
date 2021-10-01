firstName = document.getElementById('first-name');
lastName = document.getElementById('first-name');
emailAddress = document.getElementById('first-name');
password = document.getElementById('first-name');

document
    .getElementById('claim')
    .addEventListener('click', function() {
        const elt =  document.querySelectorAll('.field:not(:last-of-type)');
        console.log('Taille : ', elt.length);
        for (let i=0; i<elt.length; i++) {
            if (elt[i].value == '') {
                elt[i].style.border = '2px solid hsl(0, 100%, 74%)';
                elt[i].style.background = 'url("images/icon-error.svg") no-repeat 95%';
                elt[i].after(document.createElement('p'));
            }
            else {
                elt[i].removeAttribute('style');
            }
        }
    });

// document.getElementById('first-name').appendChild(document.createElement("p"));