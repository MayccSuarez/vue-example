const courseHeader = {
    props: {
        image: { type: String, required: true},
        title: { type: String, required: true}
    },
    template: [
        '<header class="course-header" v-once>',
            '<img :src="image" :alt="title">',
            '<h2>{{ title }}</h2>',
        '</header>',
    ].join(''),
};

const courseContent = {
    props: ['title', 'subtitle', 'description'],
    template: [
        '<main class="course-content">',
            '<img src="http://lorempixel.com/300/150/" alt="">',
            '<section>',
                '<h3>{{ title }}</h3>',
                '<h4>{{ subtitle }}</h4>',
                '<p> {{ description }}</p>',
            '</section>',
        '</main>'
    ].join(''),
};

const courseFooter = {
    data() {
        return {
            months: 0
        }
    },
    template: [
        '<footer class= "course-footer" > ',
            '<label for="meses">MESES</label>',
            '<input id="meses" type="number" min="0" max="12" v-model="months" />',
            '<button @click="add">AÑADIR</button>',
        '</footer>',
    ].join(''),
    methods: {
        add() {
            this.$emit('add', this.months);
        }
    }
};

const course = {
    props: {
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        description: { type: String, required: true }
    },
    data() {
        return {
            months: 0,
            styleClass: null,
            header: {
                title: 'Curse Default',
                image: 'http://lorempixel.com/64/64/',
            }
        }
    },
    methods: {
        add(months) {
            console.log(months);
            this.$emit('add', { title: this.title, months: months });
        }
    },
    template: [
        '<div class="course" :class="styleClass" >',
            '<course-header :title="header.title" :image="header.image"></course-header>',
            '<course-content :title="title" :subtitle="subtitle" :description="description"></course-content>',
            '<course-footer @add="add"></course-footer>',
        '</div>'
    ].join(''),
    components: {
        courseHeader, courseContent, courseFooter
    }
};

Vue.component('course-js', {
    mixins: [course],
    data() {
        return {
            styleClass: 'course-js',
            header: {
                title: 'Curso Js',
                image: 'http://lorempixel.com/64/64/',
            }
        }
    }
});

Vue.component('course-css', {
    mixins: [course],
    data() {
        return {
            styleClass: 'course-css',
            header: {
                title: 'Curso css',
                image: 'http://lorempixel.com/64/64/',
            }
        }
    }
})

Vue.component('marketplace', {
    template: `
        <div class="marketplace">
            <slot></slot>
        </div>
    `,
});

new Vue({
    el: '#app',
    data: {
        courses: [
            {
                id: 0,
                title: 'Curso de js',
                subtitle: 'js',
                description: 'Curso de programación',
                type: 'course-js'
            },
            {
                id: 1,
                title: 'Curso de js avanzado',
                subtitle: 'js',
                description: 'Curso de programación avanzado',
                type: 'course-js'
            },
            {
                id: 2,
                title: 'Curso de css',
                subtitle: 'css',
                description: 'Curso de diseño',
                type: 'course-css'
            },
            {
                id: 3,
                title: 'Curso de css avanzado',
                subtitle: 'css',
                description: 'Curso de diseño avanzado',
                type: 'course-css'
            }
        ],
        cart: [],
    },
    methods: {
        addToCart(course){
            console.log(course);
            this.cart.push(course);
        }
    }
});