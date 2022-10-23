const express = require('express');
const app = express();
const urlController = require('./controllers/urlController');
const appRoutes = require('./routes/index');

app.use(express.json());

app.use(appRoutes);
app.listen(process.env.APP_PORT || 3000, () => {
	console.log(`Server listening port ${process.env.APP_PORT}`);
});
