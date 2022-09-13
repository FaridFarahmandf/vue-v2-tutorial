//lesson4
const books = new Vue({
    el:"#books",
    data: {
        title: "The imaginary library",
        author: "Matt Heige",
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur libero ipsa, illum ea rerum aliquam quis optio omnis. Inventore, laboriosam.",
        toggleShow: true,
    },
    methods: {
        // clickHandler: function() {
        //     alert(this.title);
        // }
        //lesson 5
        toggleHandler: function() {
            this.toggleShow = !this.toggleShow;
        }
    }
});