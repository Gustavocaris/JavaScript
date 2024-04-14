function tocaSom (idElementoAudio) {
    /*parametro-> nossa função vai depender desse parametro(idElementoAudio)  */

    document.querySelector(idElementoAudio).play()
}

document.querySelector('.tecla_pom').onclick = tocaSomPom // não preciso colocar o parenteses, pois ele tem que guardar essa informação


/*referencias devem ser criadas com base nos valores que serão guardadas*/
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    
    console.log(instrumento)

    console.log(idAudio)


    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador = contador +1

    console.log(contador)
}
