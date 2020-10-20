<template>
<div class="todos">
    <div v-bind:key="todo.id" v-for="todo in todos">
        <ToDoItem v-bind:todoVar="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
</div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'
export default {
    name: 'ToDos',
    props: ["todos"],
    components: {
        ToDoItem
    }
}
</script>

<style scoped>

</style>
