let app = require('./config/server');
const PORTA = 3003;

app.listen(PORTA, function(){
    console.log('Servidor rodando na porta '.concat(PORTA));
});