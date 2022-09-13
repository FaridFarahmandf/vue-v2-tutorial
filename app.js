const HelloVue = new Vue({
    //element
    el:"#helloWorld",
    data: {
        title: "Hello Vue Project!",
        message: "this is the first real vue project"
    }
})

// lesson2 multiple vue constructor 
const example = new Vue({
    el:"#example",
    data: {
        title:"Hello",
        message:"this is the example",
        name: "Farid",
        //lesson3
        img: {
            src:"./assets/images/cat1.jpg",
            alt:"the pretty cat"
        }
    }
})