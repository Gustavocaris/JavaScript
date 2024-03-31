
// la no onclik

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert ('[error] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('style', 'width: 20rem; height: auto;');
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebehomem.jpg')
                // Kids
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovemfeio.jpg')
                //Jovem
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'homemadulto.jpg')
                //Adulto
            } else {
                img.setAttribute('src', 'homemidoso.jpg')
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebemulher.jpg')
                // Kids
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovemgata.jpg')
                //Jovem
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'mulheradulta.jpg')
                //Adulto
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }



        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}