const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const comingUpRouter = require('./routes/coming-up.router');
const listenerRequestsRouter = require('./routes/listener-requests.router');
const podcastsRouter = require('./routes/podcasts.router');
const positionsRouter = require('./routes/positions.router');
const tagsRouter = require('./routes/tags.router');
const userRouter = require('./routes/user.router');

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
app.use('/api/listener-requests', listenerRequestsRouter);
app.use('/api/podcasts', podcastsRouter);
app.use('/api/positions', positionsRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
