const path = require('path');
const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override')

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
	methodOverride((req, res) => {
		if (req.body && req.body._method) {
			const method = req.body._method;
			return method;
		}
	}),
);

app.get('/', (req, res) => {
  res.render('home')
})

const cohortsRouter = require('./routes/cohortsRouter');
app.use('/cohorts', cohortsRouter);

const PORT = 5656;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`The server is listening at http://${HOST}:${PORT}`)
})