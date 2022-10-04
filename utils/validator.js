module.exports = {
  user: (app, req, res) => {
    req.asset('name', 'O nome é obrigatorio.').notEmpty();
    req.asset('email', 'O e-mail está invalido.').notEmpty().isEmail();

    let errors = req.validationErrors();

    if (errors) {
      app.utils.error.send(errors, req, res);
      return false;
    } else {
      return true;
    }
  },
};
