// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//generare 2 numeri in 2 variabili
var generatoUtente;
var generatoComputer;


generatoUtente = Math.floor(Math.random() * 6) + 1;
console.log("numero utente", generatoUtente);

generatoComputer = Math.floor(Math.random() * 6) + 1;
console.log("numero computer", generatoComputer);

//confrontare quale tra i due è il maggiore

if (generatoUtente > generatoComputer) {
    alert("hai vinto!");
} else {
    alert("ha vinto il computer :(");
}

