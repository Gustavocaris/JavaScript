
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours()
    // var hora = 20   -> PRA DEFINIR UMA HORA MANUALMETE
    msg.innerHTML = `agora são ${hora} horas`

    if (hora >= 0 && hora < 12 ) {
        //BOM DIA
        img.src = 'manha.jpg';
        document.body.style.background = '#E6DC0E' 
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'noite.jpg';
        document.body.style.background = '#0EE6B4'
    } else {
        //BOA NOITE
        img.src = 'noite.jpg';
        document.body.style.background = '#160048'
    }
       
}
