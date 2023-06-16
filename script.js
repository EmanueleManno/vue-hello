//VEDO SE FUNZIONA JS:
console.log('JS OK');

//VEDO SE FUNZIONA VUE:
console.log('VUE OK', Vue);

//ESTRAPOLO IL METODO CREATE APP:
const { createApp } = Vue;

//INIZIALIZZO L'APP VUE:
const app = createApp({
    data() {
        return {
            h1Content: 'Bau Bau Micio Micio'
        }
    }
});

//LA MONTO NELL'ELEMENTO HTML RADICE:
app.mount('#primoesercizio');