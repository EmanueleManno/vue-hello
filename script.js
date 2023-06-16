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
            h1Content: 'Bau Bau Micio Micio',
            pic: 'https://www.google.it/url?sa=i&url=https%3A%2F%2Fmypetmall.net%2Fblog%2Fpost%2Fil-gatto-europeo&psig=AOvVaw0PP9Y0VnyPIbmFQyeVuXL1&ust=1687005725020000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDpwpnox_8CFQAAAAAdAAAAABAE'
        }
    }
});

//LA MONTO NELL'ELEMENTO HTML RADICE:
app.mount('#primoesercizio');