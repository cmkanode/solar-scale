(function(){
    var express = require('express');
    var path = require('path');

    var app = express();
    var config = require('./config/server-config')(app);

    var router = require('./routes/index')(app);

    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;
})();
