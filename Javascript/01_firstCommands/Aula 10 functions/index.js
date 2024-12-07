function parimpar(n) {
    if(n%2 == 0) {
        return 'PAR !'
    } else {
        return 'IMPAR !'    
    }
}

let res = parimpar(8)
console.log(res)

//Em linguagens como JavaScript, uma função pode receber
// dados chamados parâmetros, realizar operações e, opcionalmente, retornar um valor