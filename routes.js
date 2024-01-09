const route=require("express").Router();
const cruds=require("./app");

route.get("/voitures",cruds.getvoitures)
route.post("/ajout",cruds.ajoutvoiture)
route.post("/ajoutvoitures",cruds.ajoutvoitures)
route.get("/voiture/:id",cruds.cherche)
route.put("voiture/:id",cruds.updatevoiture)
route.delete("voiture/:id",cruds.supprimevoitue)
module.exports={route}