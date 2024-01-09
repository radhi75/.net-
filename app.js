const db=require("./connectDB");
module.exports={
  getvoitures:((req, res) => {
    const query=
    db.query('SELECT * FROM voiture', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  }),




ajoutvoiture:((req, res) => {
  const newCar = req.body;
  newCar.date_creation = new Date();
  db.query('INSERT INTO voiture SET ?', newCar, (err, results) => {
    if (err) throw err;
    res.json({ message: 'Voiture ajoutée avec succès', carId: results.insertId });
  });
}),


ajoutvoitures:((req, res) => {
  const cars = req.body;
  const currentTimestamp = new Date();
  const carsWithTimestamp = cars.map(car => ({ ...car, date_creation: currentTimestamp}));
  const carsValues = carsWithTimestamp.map(car => [car.nom, car.description, car.prix, car.quantite, car.categorie, car.date_creation, car.date_mise_a_jour]);

  db.query('INSERT INTO voiture (nom, description, prix, quantite, categorie, date_creation, date_mise_a_jour) VALUES ?', [carsValues], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Liste de voitures ajoutée avec succès' });
  });
}),
  

cherche:((req, res) => {
  const carId = req.params.id;
  db.query('SELECT * FROM voiture WHERE id = ?', carId, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
}),


updatevoiture:((req, res) => {
  const carId = req.params.id;
  const updatedCar = req.body;
  updatedCar.date_mise_a_jour = new Date();
  db.query('UPDATE voiture SET ? WHERE id = ?', [updatedCar, carId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Voiture mise à jour avec succès' });
  });
}),


 supprimevoitue:((req, res) => {
    const carId = req.params.id;
    db.query('DELETE FROM voiture WHERE id = ?', carId, (err, results) => {
      if (err) throw err;
      res.json({ message: 'Voiture supprimée avec succès' });
    });
  })
}
