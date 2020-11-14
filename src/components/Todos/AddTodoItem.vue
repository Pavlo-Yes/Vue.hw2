<template>
  <div>
    <div>
      <label>Todo name: </label>
      <input v-model="newTodoName">
    </div>
    <div>
      <label>Todo text: </label>
      <input v-model="newTodoBody">
    </div>
    <button @click="addTodo([newTodoName, newTodoBody])">Add todo</button>
    <button @click="editTit">Edit tit in Header</button>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "AddTodoItem",
  data() {
    return {
      newTodo: '',
      newTodoName: '',
      newTodoBody: ''
    }

  },
  methods: {
    addTodo(newTodo) {
      const [newTodoName, newTodoBody] = newTodo;
      this.$emit('addNewTodo', newTodoName, newTodoBody);
    },
    editTit() {
      // eventBus.updateTitle('UPDATE !!!!')
      eventBus.$emit('change', 'value')
    }
  }
}
</script>

<style scoped>
</style>
