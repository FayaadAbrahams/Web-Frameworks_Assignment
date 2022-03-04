const app = Vue.createApp({
    data(){
        return{
            nameSur: 'Fayaad Abrahams',
            address: '39 Rue Street, Stellenbosch'
        };
    },
    methods: {
        // Using the current date, and subtracting the year of my birth to get my age
        ageDefiner(){
            var actualDate = Date.now();
            var newDate = new Date(actualDate);
            return Math.abs(newDate.getUTCFullYear() - 1999);
        },
        // Taking my age calculated above, I add 5 to it
        agePlusFive(){
            var currentAge = this.ageDefiner();
            var futureAge = currentAge + 5;
            return futureAge;
        },
        // Generates a random number, rounded off to nearest whole number
        numGenerator() {
            const numb = Math.floor((Math.random() * 15) + 1);
                return Math.round(numb);
            }
        }
})
app.mount('#events');