function forca(nome:string[]): void{
    let palavra: string= 'paralelepipado' 
    let tentativa: string= ''
    let acertos:number=0
    let letras: string[]=[] 

    for (let i:number=0; i< nome.length; i++){
        
        if(nome[i] == palavra[i]){
            tentativa += nome[i]
            acertos++
        }
        else for(let j:number=0; j< nome.length; j++){
            let l:number=0
            
            if(nome[j] == palavra[i]){
                letras[l] = nome[j]
                l++
            }
        } 
         {
            tentativa += '*'
        }
    }   
    console.log(`Jogo das palavras! \n Você acertou ${acertos} letras:`,tentativa,'\n')
    if(letras.length >= 0){
        console.log(`As letras usadas "${letras}" também pertencem a palavra.`)        
    }
}

const escolha: string[]=['t','a','t','u','l','e','g','a','l','i','p','o','p','o' ]

forca(escolha)