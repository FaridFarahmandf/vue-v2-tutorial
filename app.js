//lesson7

const media = [
    {
        title:"Hop on Pop",
        description: "A delightful children's book.",
        type: "book", 
        contributor: "Dr. Suess",
        showDetail: false
    },
    {
        title:"Liberation",
        description: "a new track of rock music",
        type: "music", 
        contributor: "Muse band",
        showDetail: false
    },
    {
        title:"Mr.robot",
        description: "the boy who is a hacker wants to defeats the governors",
        type: "streaming video", 
        contributor: "Sam Esmaeil",
        showDetail: false
    },
    {
        title:"Belfast",
        description: "immigrating feeling",
        type: "DVD", 
        contributor: "Steven Spielberg",
        showDetail: false
    },
    {
        title:"Dark Knight",
        description: "batman vs joker",
        type: "DVD", 
        contributor: "Christofer Nolan",
        showDetail: false
    },
    {
        title:"when I was a piece of art",
        description: "the man wants suicide",
        type: "book", 
        contributor: "Marios Bargas Yusa",
        showDetail: false
    },
    {
        title:"Friends",
        description: "the sitcom serie",
        type: "streaming video", 
        contributor: "David Schimmer",
        showDetail: false
    },
]

const mediaList = new Vue({
    el:"#media-list",
    data:{
        title: "The museum of media",
        mediaList: media,
    }
})


