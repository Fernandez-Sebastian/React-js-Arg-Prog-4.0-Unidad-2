//Declaro los elementos uque voy a usar en el HTML

let botones = document.querySelectorAll('.boton');
let pantalla = document.getElementById('pantalla'); 

//Declaro las variables que voy a usar

let cadena = '';
let numeroMostrado = '';


botones.forEach((boton) => {
    boton.addEventListener('click',function(){
        let realizoCalculo = false;
        let elemento = boton.textContent;
        if(realizoCalculo){
            pantalla.value='';
            realizoCalculo= false;
        }

        if(elemento === '=' || elemento === 'C' || elemento === 'B' ){
            if (elemento === 'C'){
                    pantalla.value = '0';
                    numeroMostrado = '';
                    cadena = '';
            }else{ 
                if(elemento === '='){
                    cadena += elemento;
                    calcular(cadena);
                    cadena = '';
                    realizoCalculo = true;
                }else{
                    cadena += elemento;
                    calcular(cadena);
                    
                }
            }
        }else{
            cadena += elemento;
            numeroMostrado+= elemento;
            if ( elemento  === '+' || elemento  === '-' || elemento  === '*' || elemento  === '/' ){
                pantalla.value = elemento;
                numeroMostrado = '';
            }else{
                pantalla.value = numeroMostrado;
            }
        }
    })
});

//primero armo el string mientras va haciendo click en los botones. Si hace click en igual, CE o C llama a calcular con lo que venis guardadndo


function calcular(pantalla){
    let cadena = Array.from(pantalla);
    let resultado = '';
    let valor1 = '';
    let valor2 = '';
    for (let i = 0; i<cadena.length;){
        let caracter  = cadena[i];
        if (caracter >= '0' && caracter <= '9'){
            if(valor1 != ''){
                resultado = resultado + ultimoSigno(valor2);
                valor1 = caracter;
                i++;
                caracter = cadena[i];
            }else{
                    valor1 += caracter;
                    i++;
                    caracter = cadena[i];
                }
            while (caracter >= '0' && caracter <= '9'){
                valor1 += caracter;
                i++;
                caracter = cadena[i];
                }
            resultado += valor1;
        }else{
                switch (caracter) {
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                        valor2 += caracter;
                        i++;
                        caracter = cadena[i];
                    break;

                    case '=':
                        let calculo = calcularResultado(resultado);
                        if (calculo == 'Infinity'){
                            document.getElementById('pantalla').value = 'No se puede dividir por 0 ';
                           
                        }else{
                            document.getElementById('pantalla').value = Math.trunc(calculo *100)/100;
                           
                        }
                        resultado = '';
                        valor1 = '';
                        valor2 = '';
                        caracter = '';
                        i++;
                    break;

                    default:
                        
                }
            }
    }
}


function ultimoSigno(signos){
    return signos[signos.length - 1];
}

function calcularResultado(cadena){
    let resultado = eval(cadena);
    return resultado;
}

