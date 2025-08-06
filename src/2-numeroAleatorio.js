/* 
Crearemos un proyecto que muestre numeros random tomados desde la termina, sino que tome por defecto
*/

const argumentos = process.argv;
const args = argumentos.slice(2)

//valores por defecto 1 y 100

let min=1
let max=100

//verificar si los datos del argumentos son correctos

if(args.length===2){

    //cambiar el tipo de dato a number
    const minParseado = parseInt(args[0])
    const maxParseado = parseInt(args[1])

    //quiero preguntar si minparseado es un numero
    if(!isNaN(minParseado) && !isNaN(maxParseado) && minParseado<maxParseado){
        min = minParseado
        max = maxParseado
    }else{
            console.log('Valores fuera del rango, se usaran los valores por defecto')
        }
    }

    //agregar la logica de los numeros aleatorios
       const aleatorio =  Math.floor(Math.random() * (max - min) + min)

       console.log(`El numero aleatorio generado es: ${aleatorio}. El rango tomado es ${min} y ${max}`)