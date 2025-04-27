function espera()
{
    return new Promise(resolve => {
        setTimeout (()=>{
            resolve("espera completada")
        }, 2000)
    })
}

async function ejecutar()
{
    console.log("inicio")
    const resultado=await espera()
    console.log(resultado)
    console.log("fin")
}
ejecutar()
