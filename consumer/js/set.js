new Vue({
    el:'#app',
    data() {
        return {
            
        }
    },
    methods: {
        editName() {
           window.location.href="edit-userName.html"
        },
        editPhone(){
            window.location.href="edit-phone.html"
        },
        editPassword(){
            window.location.href="edit-password.html"
        },
        editIdea(){
            window.location.href="edit-idea.html"
        }
    }
});