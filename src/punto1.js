function secret(mensaje, funcion, key)
{
    var cifrado = funcion()
    if(Array.isArray(mensaje)){
        if(cifrado==="decrypt")
        {
            for(let i=0; i<mensaje.length;i++)
            {
                mensaje[i]=mensaje[i]-key
            }
            return mensaje
        }
        else if(cifrado==="encrypt")
        {
            for(let i=0;i<mensaje.length;i++)
            {
                mensaje[i]=mensaje[i]+key
            }
            return mensaje
        }
    }
    else return "El mensaje no es un arreglo"
}
function encrypt()
{
    return "encrypt"
}
function decrypt()
{
    return "decrypt"
}


const mcd=(a,b)=>{ return (b===0 ? a :  mcd(b,a%b)) }

