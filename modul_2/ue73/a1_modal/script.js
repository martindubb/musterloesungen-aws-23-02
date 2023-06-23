// global vars
let modal = document.getElementById('modal-cover');
let modalShown = false;

// add headings to sections
let divs = document.getElementsByClassName('lorem');
for(let i=0;i<divs.length;i++) {
    // divs[i].insertBefore('<h2>Teil ' + i+1 + '</h2>', divs[i][0]);
    divs[i].innerHTML = '<h2>Teil ' + (i+1) + '</h2>' + divs[i].innerHTML;
}

// actually show modal
function showModal() {
    modal.style.display = 'flex';
    modalShown = true;
}

// bind handler to close button
document.getElementById('modal-close').addEventListener('click',
    function () {
        modal.style.display = 'none';
    });

// check if element is actually in shown and display modal on the result
function checkDiv(element) {
    if (!modalShown) {
        const element = document.getElementById("last");
        const rect = element.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
            showModal();
        }
    }
}

// start timer
setInterval(checkDiv, 500);
