import Vue from 'vue'
import App from './App.vue'

Vue.directive('changeColor', {
    bind(el, binding) {
        el.style.backgroundColor = binding.value
    }
})
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.config.productionTip = false;

export const eventBus = new Vue({
    data() {
        return {
            dataFromEventBus: 'some data'
        }
    },
    methods: {
        updateTitle(value) {
            this.$emit('updatedTitle', value)
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')
