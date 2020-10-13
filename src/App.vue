<template>
<div id="app">
    <div class="todo-app">
        <Todos v-bind:todos="todos" v-on:del-todo="deleteToDo" />
    </div>
</div>
</template>

<script>
import Todos from '@/components/Todos';

export default {
    name: 'App',
    components: {
        Todos
    },
    methods: {
        deleteToDo(id) {
            this.todos = this.todos.filter(todoVar => todoVar.id !== id);
        }
    },
    data() {
        return {
            msg: 'To Do App',
            todos: [{
                    id: 1,
                    title: 'Make Bread',
                    completed: true
                },
                {
                    id: 2,
                    title: 'Brew Coffee',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Wipe Table',
                    completed: false
                }
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

}

.todo-app {

    width: 18rem;
    background: #C70039;
    color: white;
}
</style>
