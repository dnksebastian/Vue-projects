const app = Vue.createApp({
    data() {
        return {
            userTask: "",
            taskArr: [],
            listVisibility: true,
            btnCaption: "Hide",
        }
    },
    methods: {
        addTask(){
            this.taskArr.push(this.userTask);
        },
        removeTask(index) {
            this.taskArr.splice(index, 1);
        },
        toggleList(){
            this.listVisibility = !this.listVisibility;
            if(this.listVisibility === true) {
                this.btnCaption = "Hide";
            } else if (this.listVisibility === false) {
                this.btnCaption = "Show";
            }
        },

    },
});

app.mount('#assignment');