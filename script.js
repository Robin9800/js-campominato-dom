/*Viene generata una griglia di gioco quadrata, in cui ogni cella contiene
un numero tra quelli compresi nel range 1-100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista
dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente
ha cliccato su una cella che non era una b.*/

//Creo una griglia 10x10.
const grid = document.getElementById('grid');

const column = 10;
const row = 10;

const totalCells = column * row;

//Creo una funzione per generare la bombe dentro un array vuoto.
function generatedBombs(max){
    const positions = [];
    //Genera numeri random finchè la lunghezza del contenuto dell'array è inferiore a 16
    while(positions.length < 16){
        const number = generateRandomNumber(1, max);
        //Se nell'array non è incluso il numero appena generato, allora inseriscilo nell'array.
        if(!positions.includes(number)){
            positions.push(number);
        }
    }
    return positions;
}

function generateRandomNumber(min, max){
    const range = max - min + 1;
    return Math.floor(Math.random()*range)+min;
}

/*Ora che sappiamo quante celle dobbiamo creare, dobbiamo ripetere la creazione della cella N volte.
 Usiamo il ciclo for.*/
for(let i= 0; i < totalCells; i++){

    //Creo la cella
    const cell = createCell();

    //Inserisco in ogni cella un testo che rappresenta un numero in ordine crescente.
    cell.innerText = (i+1)

    /*Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
    Aggiungiamo l'evento all'interno del ciclo for perchè deve essere ripetuto per ogni cella.*/
    cell.addEventListener('click', function(){

        //"toggle" accende o spegne lo stile.
        cell.classList.toggle('bg-aqua');
    })

    //Inseriamo la cella all'interno del documento, dentro "grid".
    grid.appendChild(cell);
}

//Creaimo una funziona per creare la cella.
function createCell(){

    //Ora creo la cella. Creano nel documento un div
    const item = document.createElement('div');

     //Aggiungiamo a "cell" una classe e ricreiamo la stessa classe nel css.
    item.classList.add('cell');
    return item
}

