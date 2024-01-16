const express= require('express')
//creation de l'application express
const app= express();
//lancement du middleware 
// la methode use() permet de prendre tout type de requête
/*app.use((req,res,next)=>{
    console.log('je suis un middleware');
    next();
    
})
*/
//la gestion des routes
// gestion de la route racine avec le methode get()
app.get("/",(req,res)=>{
    res.status(404).sendFile("./views/acceuil.html", {root:__dirname})


})

app.get("/",(req,res)=>{
    res.status(404).sendFile("./views/accueil.css", {root:__dirname})


})

app.get("/about",(req,res)=>{
    res.status(200).sendFile("./views/about.html", {root:__dirname})

})
app.get("/acceuil",(req,res)=>{
    res.status(200).sendFile("./views/acceuil.html", {root:__dirname})

})

app.get("/service",(req,res)=>{
    res.status(200).sendFile("./views/service.html", {root:__dirname})
    

})
app.get("/contact",(req,res)=>{
    res.status(200).sendFile("./views/contact.html", {root:__dirname})

})

app.use((req,res)=>{
    res.status(404).sendFile("./views/404.html", {root:__dirname})

})




app.listen(3005,()=>{
    console.log("serveur en ecoute");
})