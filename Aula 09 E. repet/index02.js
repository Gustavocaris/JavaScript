let valores = [5, 4, 3, 2, 9, 7, 201, 152]

console.log(valores)

/*for (let pos=0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem valor ${valores[pos]}`)
}*/

// OU POSSO FAZER ASSIM TAMBEM

for(let pos in valores) {
    console.log (`A posição ${pos} tem valor ${valores[pos]}`)
}