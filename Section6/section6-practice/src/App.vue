<template>
  <section>
    <active-user :user-name="user.name" :user-age="user.age"></active-user>
  </section>
  <section>
    <user-data @update-data="updateUser"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Jan Kowalski",
        age: 12,
      },
    };
  },
  methods: {
    updateUser(enteredUserName, enteredUserAge) {
      this.user.name = enteredUserName;
      this.user.age = enteredUserAge;
    },
  },
};
</script>
