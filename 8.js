const arr = [1,2,3,1,3,4,5,6,7,]
let suma = arr.reduce(function(acumulador,valoractual){
    return acumulador + valoractual
}, 0)
console.log(suma)

