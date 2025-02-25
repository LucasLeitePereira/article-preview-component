const perfil = document.querySelector('.perfil');
const share = document.querySelector('.share');

console.log(perfil);
console.log(share);

let isActive = false;

function shareActive() {
    if (isActive) {
        perfil.style.display = 'flex';
        share.style.display = 'none';
        isActive = false;
    } else {
        perfil.style.display = 'none';
        share.style.display = 'flex';
        isActive = true;

    }
    
}