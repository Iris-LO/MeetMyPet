require('dotenv').config();

const router = require('./router');

const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session'); 
const redis = require('redis');
const redisStore = require('connect-redis')(session);	
const generateUuid = require('./services/generateUuid');

var app = express(); 
app.use(cookieSession({
	name: 'session',
	keys: ['key1', 'key2']
}))

// Express 
const server = express();
const port = process.env.PORT || 3001;

// rend les infos envoyées en JSON disponibles dans request.body en format JSON
server.use(express.json());
server.use(bodyParser.json());
server.use(cookieParser());

server.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://ec2-100-26-211-150.compute-1.amazonaws.com:3000');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
	next();
	server.options('*', (req, res) => {
		// XHR methods autorisées :
		res.send();
	});
});

const redisClient = redis.createClient();
server.use(session({
	genid: (req) => {
		return generateUuid()
	},
	store: new redisStore({ host: 'localhost', port: 6379, client: redisClient }),
	name: '_meetmypet', 
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: { 
		secure: false, 
		maxAge: 1000 * 60 * 60 * 24,
		httpOnly: false,
	}, 
	saveUninitialized: true
}));

redisClient.on('error', (err) => {
	console.log('Redis error: ', err);
});

// Rends disponible /uploads pour le front (avatars)
server.use(express.static(process.cwd() + '/uploads'));
server.use(router);

server.launch = () => {
    server.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));
};

// NB : DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process
process.on('unhandledRejection', (err) => {
    console.log('Interception d\'un rejet de promesse');
    console.error(err);
});

module.exports = server;
