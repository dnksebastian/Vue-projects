const app = Vue.createApp({
    data() {
        return {
            myName: 'Sebastian',
            myAge: '30',
            myPicture: 'https://source.unsplash.com/random/200x200',

        };
    },
    methods: {
        randomNumber() {
            return Math.random().toFixed(2);
        }
    }
})



app.mount('#assignment');