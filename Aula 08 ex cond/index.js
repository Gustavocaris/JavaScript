function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é <strong>${vel} km/h</strong></p>`
    
    if (vel > 60) {
        res.innerHTML += '<p> Excesso de velocidade! voce foi <strong>Multado!</strong></p>'
    }
    res.innerHTML += '<p> Boa viagem </p>'
    
} 