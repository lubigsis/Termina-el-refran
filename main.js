//Array bidimensional, guardo refranes con la respuesta.
let refranIncompleto =[

    ['Haz el bien sin mirar a...', 'quién'],
    ['La avaricia rompe el...', 'saco'],
    ['Más vale prevenir que...', 'curar'],
    ['No todo lo que brilla es...', 'oro'],
    ['No hay mal que por bien no...', 'venga'],
    ['Al mal tiempo buena...', 'cara'],
    ['Quien tiene un amigo tiene un...', 'tesoro'],
    ['No dejes para mañana lo que puedas hacer...', 'hoy'],
    ['Quien no arriesga no...', 'gana'],
    ['De los errores se...', 'aprende']

];

let refran, respuesta;
let formuladas= 0;
let acertadas =0;

/*-------------------------------------------------------------------DECLARO FUNCIONES------------------------*/

//Formula el refrán al user.
function hazRefran(){
    let e; //creo variable p/almacenar el refrán/rta al azar.

    //extraigo UNA pareja refrán/rta. al azar del array c/ numAleat() y con splice voy eliminando de a un array. p.e. splice(3,1);
    //dentro de numAleat() va 0 pq el array siempre va a comenzar c/ ese valor. Entonces entre los () le digo que tome un n°
    //aleatorio entre 0 hasta el último que tenga. *
    e =  refranIncompleto.splice(numAleatorio(0, refranIncompleto.lenght-1), 1);

    refran = e[0][0]; //guardo refranes y rtas. Hay q' descomponerlo así porque splice devuelve un array de array.
    respuesta = e[0][1];

//se muestra el refrán:
document.getElementById('refranJS').innerHTML = refran;
//se borra lo escrito anteriormente por el user:
document.getElementById('datoJS').value = ''; 

formuladas++;

}

/*------------------------------------------------- */
//Devuelve un número aleatorio entero entre 'min' y 'max' (ambos inclusive). Reveer
function numAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



/*------------------------------------------------- */

function muestraResultado(){
    let resultado;      // para guardar el mensaje con el resultado

    switch(acertadas){
        case 0:
            resultado = 'No acertaste ningún refrán... :(';
            break;
        case 1:
            resultado = 'Bueno, al menos acertaste uno :|';
            break;
        case 2:
            resultado = 'Solo 2 refranes acertados de 5 :/';
            break;
        case 3:
            resultado = 'No está mal, 3/5 acertados. :O';
            break;
        case 4:
            resultado = 'Muy bien, acertaste 4 refranes :)';
            break;
        case 5:
            resultado = '¡EXCELENTE, acertaste todos los refranes! :D';
            break;
    }

    document.getElementById('resolucionJS').innerHTML = resultado;
}




/*----------------------------------------------------------------------------------DESARROLLO----------------*/

hazRefran();

/*
Se programa que al pulsarse el botón "Siguiente refrán" se compruebe si se ha acertado; de se así, 
se incrementa en una unidad 'acertadas'. 
Se comprueba si ya se han realizado los 5 refranes, en cuyo caso, se llama a 'muestraResultado()' 
que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula un nuevo refrán:
*/

document.getElementById('botonJS').addEventListener('click', function(){

    let entrada = document.getElementById('datoJS').value; 

    if (entrada == respuesta){
        acertadas++;
    }
    if (formuladas < 5){
        hazRefran();
    }
    else{
        muestraResultado();
    }
})





/**-----------------------------------------------------------------------INFO. EXTRA-----------------------------*/
//*Ejemplo:
/*
Eliminar 1 elemento desde el índice 3
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"];

*/