(function(){
    var bodyParser = require('body-parser');

    module.exports = function(app) {
        app.set('port', process.env.PORT || 8000); // Set Port

        // set security headers
        app.disable('x-powered-by');
    };
})();