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
            h1Content: 'GUARDA CHE BEL GATTO',
            pic: 'https://www.ilverdemondo.it/public/blog/thumbs/gatto-siamese-it-000.jpg',
            picname: 'Gatto',

            h1Content2: 'GUARDA CHE BEL CANE',
            pic2: 'img/cane.jpg',
            picname2: 'Cane'
        }
    }
});

//LA MONTO NELL'ELEMENTO HTML RADICE:
app.mount('#primoesercizio');