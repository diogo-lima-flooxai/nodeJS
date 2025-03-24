module.exports = {
  user:(app, req, res) =>{
    req.assert('name', 'O nome é obrigatório.').notEmpty();
    req.assert('name', 'O email está invalido.').notEmpty().isEmail();

    let errors = req.validationErrors();

    if(errors){
      app.utils.send(errors, req, res);
      return false
    } else {
      return true;
    }
  }
}