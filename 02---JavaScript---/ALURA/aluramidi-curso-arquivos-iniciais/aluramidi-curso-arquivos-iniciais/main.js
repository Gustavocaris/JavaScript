function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play()

}

document.querySelector('.tecla_pom').onclick = tocaSomPom // não preciso colocar o parenteses, pois ele tem que guardar essa informação


/*referencias devem ser criadas com base nos valores que serão guardadas*/
const listaDeTeclas = document.querySelectorAll('.tecla')


