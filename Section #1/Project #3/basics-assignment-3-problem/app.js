const app = Vue.createApp({
  data() {
    return {
      result: 0,
      myTimeout: null,
    };
  },
  watch: {
    result(value) {
        if (value >= 1) {
            this.myTimeout = setTimeout(function() {
                this.result = 0;
            }.bind(this), 5000);
        };
        },
  },
  computed: {
    cResult() {
      if (this.result < 37) {
        return "Not there yet!";
      } else if (this.result > 37) {
        return "Too much!";
      } else {
        return this.result;
      }
    },
  },
  methods: {
    // add5() {
    //   this.result = this.result + 5;
    //   clearTimeout(this.myTimeout);
    // },
    // add1() {
    //     this.result = this.result + 1;
    //     clearTimeout(this.myTimeout);
    // },
    addNum(val) {
        this.result = this.result + val;
        clearTimeout(this.myTimeout);
    }
  },
});

app.mount("#assignment");
