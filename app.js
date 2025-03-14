
let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //objeto
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario)) // imprimir el tipo del dato
    //console.log(numeroDeUsuario);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario === numeroSecreto); // el triple igual me compara valor y tipo del dato
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled') // Activar un botón desabilitado
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor' )
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; // El # me indica que es id
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;    
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos lo números posibles');
    }else {
        // Si el número generado esta incluido en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del número secreto!'); 
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    // Limpiar la caja.
    limpiarCaja();
    // Indicar mensaje de intervalo de números.
    // Generar el número aleatorio. 
    // Inicializar el número de intentos. 
    condicionesIniciales(); 
    // Deshabilitar el botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}