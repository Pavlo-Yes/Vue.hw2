<template>
  <div>
    <AddTodoItem @addNewTodo="addNewT"/>
    <p v-for="(val, id) in todos" :key="id">
      <TodoItem :prop="{val, id}"
                @deleteTodo="deleteT"
      />
    </p>
  </div>
</template>

<script>
import TodoItem from "@/components/Todos/TodoItem";
import AddTodoItem from "@/components/Todos/AddTodoItem";

export default {
  name: "Todolist",
  components: {TodoItem, AddTodoItem},
  data() {
    return {
      todos: [
        {first: 'Repeat your lecture'},
        {second: 'Do your homework'},
        {third: 'more practice'}
      ]
    }
  },
  methods: {
    deleteT(id) {
      this.todos.splice(id, 1)
    },
    addNewT(newTodoName, newTodoBody) {
      // const values = Object.entries(newTodoName, newTodoBody);
      this.todos.push(`'${newTodoName}' : '${newTodoBody}'`)
    }
  }
}
</script>

<style scoped>
</style>
