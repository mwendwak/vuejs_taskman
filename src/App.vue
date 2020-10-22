<template>
<div id="app">
    <div class="todo-app">
        <Header />
        <AddToDo v-on:add-todo="addTodo" />
        <Todos v-bind:todos="todos" v-on:del-todo="deleteToDo" />
    </div>
</div>
</template>

<script>
import Todos from '@/components/Todos';
import Header from '@/components/layout/Header'
import AddToDo from '@/components/AddToDo'

export default {
    name: 'App',
    components: {
        Header,
        Todos,
        AddToDo

    },
    methods: {
        deleteToDo(id) {
            this.todos = this.todos.filter(todoVar => todoVar.id !== id);
        },
        addTodo(newTodo) {
            this.todos = [...this.todos, newTodo];
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

    width: 18rem;
    background: #C70039;
    color: white;
}
</style>
