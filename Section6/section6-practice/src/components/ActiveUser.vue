<template>
  <h1>Active User Component</h1>
  <h2>Username: {{ userName }}</h2>
  <h3>Age: {{ userAge }}</h3>
</template>

<script>
export default {
    props: ["userName", "userAge"],
};
</script>
