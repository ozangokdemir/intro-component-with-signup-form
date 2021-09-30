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
                elt[i]
                    .style.borderColor = "hsl(0, 100%, 74%)";
                    .
            }
        }

        // if (document.querySelector('.field:not(:last-of-type)') == '') {
        //     console.log('oh yeah');
        // }
        // console.log(document.querySelectorAll('.field:not(:last-of-type)').length);
    });