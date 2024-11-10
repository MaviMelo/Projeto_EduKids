"use strict";
function forca(nome) {
    let palavra = 'paralelepipado';
    let tentativa = '';
    let acertos = 0;
    let letras = [];
    for (let i = 0; i < nome.length; i++) {
        if (nome[i] == palavra[i]) {
            tentativa += nome[i];
            acertos++;
        }
        else
            for (let j = 0; j < nome.length; j++) {
                let l = 0;
                if (nome[j] == palavra[i]) {
                    letras[l] = nome[j];
                    l++;
                }
            }
        {
            tentativa += '*';
        }
    }
    console.log(`Jogo das palavras! \n Você acertou ${acertos} letras:`, tentativa, '\n');
    if (letras.length >= 0) {
        console.log(`As letras usadas "${letras}" também pertencem a palavra.`);
    }
}
const escolha = ['t', 'a', 't', 'u', 'l', 'e', 'g', 'a', 'l', 'i', 'p', 'o', 'p', 'o'];
forca(escolha);
