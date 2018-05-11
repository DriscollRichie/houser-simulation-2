module.exports = {


  getProperties: (req, res) => {
    const db = req.app.get('db')

    db.get_properties().then(properties => {
      res.status(200).send(properties)
    }).catch(err => console.error(err))
  }
}