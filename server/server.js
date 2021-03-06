const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const comingUpRouter = require('./routes/coming-up.router');
const hostsRouter = require('./routes/hosts.router');
const listenerRequestsRouter = require('./routes/listener-requests.router');
const playersRouter = require('./routes/players.router');
const podcastsRouter = require('./routes/podcasts.router');
const positionsRouter = require('./routes/positions.router');
const quarterbacksRouter = require('./routes/quarterbacks.router');
const runningBacksRouter = require('./routes/runningbacks.router');
const tagsRouter = require('./routes/tags.router');
const teamsRouter = require('./routes/teams.router');
const tiersRouter = require('./routes/tiers.router');
const tightEndsRouter = require('./routes/tightends.router');
const userRouter = require('./routes/user.router');
const wideReceiversRouter = require('./routes/widereceivers.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/coming-up', comingUpRouter);
app.use('/api/hosts', hostsRouter);
app.use('/api/listener-requests', listenerRequestsRouter);
app.use('/api/players', playersRouter);
app.use('/api/podcasts', podcastsRouter);
app.use('/api/positions', positionsRouter);
app.use('/api/quarterbacks', quarterbacksRouter);
app.use('/api/runningbacks', runningBacksRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/tiers', tiersRouter);
app.use('/api/tight-ends', tightEndsRouter);
app.use('/api/user', userRouter);
app.use('/api/wide-receivers', wideReceiversRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
