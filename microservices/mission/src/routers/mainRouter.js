const snapRouter = require('./router/missionRouter');

function mainRouter(app){
    app.use('/api/v1/',snapRouter);
}

module.exports = mainRouter;