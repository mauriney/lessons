const express = require('express')

const app = express();


app.set("view engine", "ejs")

app.get("/", function(req, res){
    const items = [
        {
            title: "L",
            message: "Pariatur sit est cillum fugiat aliqua tempor excepteur."
        },
        {
            title: "O",
            message: "Pariatur sit est cillum fugiat aliqua tempor excepteur."
        },
        {
            title: "R",
            message: "Pariatur sit est cillum fugiat aliqua tempor excepteur."
        },
        {
            title: "E",
            message: "Pariatur sit est cillum fugiat aliqua tempor excepteur."
        },
        {
            title: "M",
            message: "Pariatur sit est cillum fugiat aliqua tempor excepteur."
        },
    ]

    const subtitle = "Deserunt ex adipisicing amet est in. Deserunt ex adipisicing amet est in."
    
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    })
})

app.get("/sobre", function(req, res){
    res.render("pages/about")
})


app.listen(8080)
console.log('Servidor local rodando')