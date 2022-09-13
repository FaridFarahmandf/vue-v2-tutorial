//lesson4
const books = new Vue({
    el:"#books",
    data: {
        title: "The imaginary library",
        author: "Matt Heige",
    },
    methods: {
        clickHandler: function() {
            alert(this.title);
        }
    }
})