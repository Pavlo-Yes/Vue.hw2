<template>
  <p v-change-color="'red'">
    Header: {{ tit | concatTitle | toUppercase }}
  </p>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "Header",
  data() {
    return {
      tit: 'hi I am tit'
    }
  }, methods: {},
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    toUppercase: function (value) {
      return value.toUpperCase()
    },
    concatTitle: function (el) {
      return el + 'le'
    }
  },
  created() {
    // eventBus.$on('updatedTitle', (data) => {
    //   console.log(data, 'CREATED');
    //   this.tit = data
    // })
    eventBus.$on('change', (data) => {
      console.log(data, 'CREATED');
      this.tit = data
    })
  }
}
</script>

<style scoped>

</style>
