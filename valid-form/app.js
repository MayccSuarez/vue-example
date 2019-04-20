
new Vue({
    el: '#app',
    data: {
       user: {name: '', password: ''},
       errors: [],
       url: 'google.com',
    },
    methods: {
        onLogin() {
            this.errors = [];

            if (this.user.name.length < 5) {
                this.errors.push('Nombre de usuario demasiado corto');
            }

            if (this.user.password.length < 8) {
                this.errors.push('La contraseña debe tener un míno de 8 caracteres');
            }
        }
    },
    computed: {
        isFormEmpty() {
            return ! (this.user.name && this.user.password);
        }
    },
    filters: {
        uppercase(data) {
            return data.toUpperCase();
        }
    }
});