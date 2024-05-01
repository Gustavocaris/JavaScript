function tocaSom (idElementoAudio) {
    /*parametro-> nossa função vai depender desse parametro(idElementoAudio)  */

    document.querySelector(idElementoAudio).play()
}

document.querySelector('.tecla_pom').onclick = tocaSom // não preciso colocar o parenteses, pois ele tem que guardar essa informação


/*referencias devem ser criadas com base nos valores que serão guardadas*/
const listaDeTeclas = document.querySelectorAll('.tecla')


for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    
    console.log(instrumento)

    console.log(idAudio)


    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    

    // quando a tecla é apertada
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }


    // quando a tecla é 'SOLTADA' rs
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
