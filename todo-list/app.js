
Vue.component('app-header', {
    template: [
        '<div>',
            '<h1>ToDo List</h1>',
        '</div>'
    ].join('')
});

Vue.component('task-add', {
    template: [
        '<div>',
            '<input type="text" v-model="titleTask">',
            '<button @click="emitNewTask()">Añadir</button>',  
        '</div>'
    ].join(''),
    data() {
        return {
            titleTask: '',
        }
    },
    methods: {
        emitNewTask() {
            if (this.titleTask) {
                this.$emit('new', { title: this.titleTask });
                this.titleTask = '';
            }
        }
    }
});

Vue.component('task-list', {
    template: [
        '<div>',
            '<ol>',
                '<task-item v-for="item in tasks" v-bind:task="item" :key="item.id">',
            '</ol>',  
        '</div>'
    ].join(''),
    props: ['tasks'],
});

Vue.component('task-item', {
    template: `<li>
                    {{ task.title }}
               </li>`,
    props: ['task'],
});



new Vue({
    el: '#app',
    template: [
        '<div>',
            '<app-header />',
            '<task-add v-on:new="addNewTask($event)" />',
            '<task-list v-bind:tasks="tasks">',
        '</div>'
    ].join(''),
    data: {
        tasks: [
            {title: 'Comprar pan'},
            {title: 'Comprar queso'},
            {title: 'Comprar yuca'}
        ]
    },
    methods: {
        addNewTask(task) {
            console.log(task);
            this.tasks.push(task);
        }
    }
});