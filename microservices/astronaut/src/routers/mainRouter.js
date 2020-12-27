const snapRouter = require('./router/astronautRouter');

function mainRouter(app){
    app.use('/api/v1/',snapRouter);
}

module.exports = mainRouter;