// Creazione di una nuova istanza Vue
const { createApp } = Vue;

createApp({
    // Definizione dei dati per la nostra app Vue
    data() {
        return {
        // Definizione del messaggio da visualizzare
            message: 'Hello, Vue!'
        }
    }
}).mount('#app') // Selezione dell'elemento HTML con id 'app'
