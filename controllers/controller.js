module.exports = {
  getProperties: (req, res) => {
    const db = req.app.get("db");

    db
      .get_properties()
      .then(properties => {
        res.status(200).send(properties);
      })
      .catch(err => console.error(err));
  },

  addProperty: (req, res) => {
    const db = req.app.get("db");
    let { name, address, city, state, zip } = req.body;

    db
      .add_property(name, address, city, state, zip)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.error(err));
  }
};
