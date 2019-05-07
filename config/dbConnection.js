const Sequelize = require('sequelize');
module.exports.salt = 'Rp:]|e.}P0&OT$<OrXdLGjOiKL,q%;@<e9[dE%WTgDj1(g&b3Km9t1J4$:Ms.;qR';
module.exports.connection = new Sequelize('adv', 'root', 'password', {
    host: 'localhost',
    dialect:'mysql'
  });