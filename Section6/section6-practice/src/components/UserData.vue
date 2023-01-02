<template>
  <h1>User Data Component</h1>
  <form>
    <div class="input-wrap">
      <label>Name</label>
      <input type="text" v-model="enteredUserName" />
    </div>
    <div class="input-wrap">
      <label>Age</label>
      <input type="text" v-model="enteredUserAge" />
    </div>
    <button @click.prevent="$emit('update-data', this.enteredUserName, this.enteredUserAge)">Update data</button>
  </form>
</template>

<script>
export default {
  emits: ["update-data"],
  data() {
    return {
      enteredUserName: "",
      enteredUserAge: "",
    };
  },
};
</script>
