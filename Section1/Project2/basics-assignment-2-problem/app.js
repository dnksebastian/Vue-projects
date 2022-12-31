const app = Vue.createApp({
  data() {
    return {
        pValue: '',
        confirmedText: '',
    };
  },
  methods: {
    showAlert() {
        alert('Lorem ipsum');
    },
    changeText(e){
        this.pValue = e.target.value;        
    },
    confirmInput(e) {
        this.confirmedText = e.target.value;
    },
  },
});

app.mount("#assignment");
