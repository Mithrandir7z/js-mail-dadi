// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


//inserimento dati nell'array
var emailData = ["giuseppeconte@gmail.com", "matteosalvini@gmail.com", "alessandrodibattista@gmail.com", "marcorizzo@gmail.com"];

//Richiesta all'utente della sua email
var emailInserita;

emailInserita = prompt( "Inserisci la tua email" , "Inserisci: " );

//Scansione dell'array per verificare se l'email è nella tabella
flag = 0;

for (i = 0; i < emailData.length; i++) {
    if ( emailInserita == emailData[i] ) {
        flag = 1;
    }
}

if ( flag == 1 ) {
    alert("L'email inserita è già presente");
} else {
    alert("L'email inserita non è presente");
}