<template>
<div>
    <div class="todo-item" v-bind:class="{'is-complete':todoVar.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{ todoVar.title}}
            <button @click="$emit('del-todo', todoVar.id)" class="del btn-danger">X</button>
        </p>
    </div>

</div>
</template>

<script>
export default {
    name: "ToDoItem",
    props: ["todoVar"],
    methods: {
        markComplete() {
            this.todoVar.completed = !this.todoVar.completed;
        }
    }
}
</script>

<style scoped>
input {
    margin-right: 15px;
}

.del {
    margin-left: 15px;
}

.todo-item {
    background: #f4f4f4;
    color: #C70039;
    padding: 10px;
    font-weight: bolder;
    text-transform: uppercase;
    border-bottom: 1px #ccc dotted;
}

.is-complete {
    text-decoration: line-through;
}

.del {
    background: #ff0000;
    color: #fff;
    border: none;
}
</style>
