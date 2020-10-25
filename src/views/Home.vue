<template>
<div id="app">
    <div class="todo-app">
        <AddToDo v-on:add-todo="addTodo" />
        <Todos v-bind:todos="todos" v-on:del-todo="deleteToDo" />
    </div>
</div>
</template>

<script>
import Todos from '@/components/Todos';
import AddToDo from '@/components/AddToDo'
import axios from 'axios';
export default {
    name: 'App',
    components: {
        Todos,
        AddToDo

    },
    methods: {
        deleteToDo(id) {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(
                    this.todos = this.todos.filter(todoVar => todoVar.id !== id)
                )
                .catch(err => console.log(err));

        },
        addTodo(newTodo) {
            const {
                title,
                completed
            } = newTodo;
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                    title,
                    completed
                })
                .then(res => this.todos = [...this.todos, res.data])
                .catch(err => console.log(err));
        },

    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.todos = res.data)
            .catch(err => console.log(err));
    },
    data() {
        return {
            msg: 'To Do App',
            todos: []
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

.btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
}

.btn:hover {
    background: #666;
}

.todo-app {

    width: 25rem;
    background: #C70039;
    color: white;
}
</style>
