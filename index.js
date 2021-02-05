Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

var app = new Vue({
  el: '#app'
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})