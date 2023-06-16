//VEDO SE FUNZIONA JS:
console.log('JS OK');

//VEDO SE FUNZIONA VUE:
console.log('VUE OK', Vue);

//ESTRAPOLO IL METODO CREATE APP:
const { createApp } = Vue;

//INIZIALIZZO L'APP VUE:
const app = createApp();

//LA MONTO NELL'ELEMENTO HTML RADICE:
app.mount('#primoesercizio');