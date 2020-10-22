<template>
<div>
    <form @submit="addToDo">
        <input type="text" v-model="title" name="title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" class="btn" />
    </form>
</div>
</template>

<script>
export default {
    name: "AddToDo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addToDo(e) {
            e.preventDefault();
            const newToDo = {
                id: Math.random(),
                title: this.title,
                completed: false,
            }
            //emit upwards to parent
            this.$emit('add-todo', newToDo);
            this.title = '';
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 5px;
}
</style>
