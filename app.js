let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados  = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
     let titulo = document.querySelector(elemento);
     titulo.innerHTML = texto ;
     return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
          asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
    limpiarCaja();
    

    }
   return;  
}


function limpiarCaja(){

 document.querySelector('#valorUsuario').value= '';

} 



function generarNumeroSecreto(){

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    comsole.log(listaNumerosSorteados);

//si ya sorteamos todos los numeros

if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    
}else{

  // si el numero generado esta incluido en la lista
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

  }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
  
}
}

function condicionesIniciales(){

    asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p',`indica un numero del 1  ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

}



function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de inicio
   condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}

condicionesIniciales();



