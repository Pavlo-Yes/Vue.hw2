<template>
  <div>
    <p v-bind:id="prop.id | consoleLog">
      {{ prop.val }}
      <button @click="removeTodo(prop)">Remove todo</button>
    </p>
  </div>
</template>

<script>

export default {
  name: "TodoItem",
  props: {
    prop: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {}
  },
  methods: {
    removeTodo(prop) {
      this.$emit('deleteTodo', prop.id)
    },
  },
  filters: {
    consoleLog(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
</style>
