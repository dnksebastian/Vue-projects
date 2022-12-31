const app = Vue.createApp({
  data() {
    return {
        userInput: '',
        confirmedUserInput: '',
        isVisible: 'visible',
        userColor: '',
    };
  },
  methods: {
    getUserInput(e) {
        this.userInput = e.target.value;
    },
    getConfirmedInput(e) {
        this.confirmedUserInput = e.target.value;
        // console.log(this.confirmedUserInput);
    },
    changeVisibility() {
      if (this.isVisible === 'visible') {
        this.isVisible = 'hidden';
      } else if (this.isVisible === 'hidden') {
        this.isVisible = 'visible'
      };
    },
    getUserColor(e) {
      this.userColor = e.target.value;
      console.log(this.userColor);
    },
  },
});

app.mount("#assignment");
