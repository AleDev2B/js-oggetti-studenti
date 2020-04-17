// DESCRIZIONE:
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var studenti = [{
  nome: "Gianfranzo",
  cognome: "Telotummi",
  eta: 30
}];

for (var nomeChiave in studenti) {
  console.log(studenti[nomeChiave]);
};

var biciclette = [{
  marca:"Atala",
  telaio:"fibra di carbonio",
  peso:"leggerissima",
  tipologia:"da corsa"
},
{
  marca:"Legnano",
  telaio:"alluminio",
  peso:"leggera",
  tipologia:"stradale"
},
{
  marca:"Bianchi",
  telaio:"acciaio",
  peso:"pesante",
  tipologia:"city bike"
}];

var marcaDaAgg = prompt("ciao frenzo inserisci la marca della bici che hai comprato ;-)");
var telaioDaAgg = prompt("di quale materiale è fatto il telaio?");
var pesoDaAgg = parseInt(prompt("Oje, inserta un número coño"));
var tipologDaAgg = prompt("che modello di bici è?")

biciclette.push({
  marca:marcaDaAgg,
  telaio:telaioDaAgg,
  peso:pesoDaAgg,
  tipologia:tipologDaAgg
});

for (var i = 0; i < biciclette.length; i++) {
var stampaOggetti = biciclette[i];
var stampaMarcaOgg = stampaOggetti.marca;
var stampaTelaioOgg = stampaOggetti.telaio;
var stampaPesooOgg = stampaOggetti.peso;
var stampaTipolOgg = stampaOggetti.tipologia;
console.log(stampaMarcaOgg + " " + stampaTelaioOgg + " " + stampaPesooOgg + " " + stampaTipolOgg);
};
