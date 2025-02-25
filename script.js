const perfil = document.querySelector('.perfil');
const share = document.querySelector('.share');
const picture = document.getElementById('dark');

console.log(picture);

let isActive = false;
let larguraTela;

const share_button = document.querySelector('.dark');

function verificarTamanhoTela () {
    larguraTela = window.innerWidth;
    if (larguraTela >= 1024) {
        share_button.remove();
    } else {
        picture.appendChild(share_button);
    }
}

verificarTamanhoTela();

function shareActive() {
    if (larguraTela <= 1024) {
        if (isActive) {
            perfil.style.display = 'flex';
            share.style.display = 'none';
            isActive = false;
        } else {
            perfil.style.display = 'none';
            share.style.display = 'flex';
            isActive = true;
        }
    } else {
        if (isActive) {
            share.style.display = 'none';
            isActive = false;
        } else {
            share.style.display = 'flex';
            isActive = true;
        }
    }
}

window.addEventListener("resize", verificarTamanhoTela);