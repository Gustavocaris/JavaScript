const boletoPago = false

//console.log('Foi pago', boletoPago)

// Como ele já inicia como "false" eu não preciso do "=== true"
if(boletoPago){
    alert('O boleto está pago')
}else if(boletoPago === false){
    alert('O boleto NÃO está pago')
}