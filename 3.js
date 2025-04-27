function saludo(nombre)
{
    let saludo = "Hola nombre"
    let nuevosaludo= saludo.replace(/nombre/g,nombre)
    console.log(nuevosaludo)
}
let nombre="Vicente"
saludo(nombre)

