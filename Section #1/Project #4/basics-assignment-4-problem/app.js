const app = Vue.createApp({
  data() {
    return {
        userInput: '',
        confirmedUserInput: '',
        isVisible: false,
    };
  },
  methods: {
    getUserInput(e) {
        this.userInput = e.target.value;
        console.log(this.userInput);
    },
    changeVisibility() {
        this.isVisible = !this.isVisible;
        console.log(isVisible);
    },
  },
  computed: {

  },
});

app.mount("#assignment");
