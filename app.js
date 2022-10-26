const express = require('express');
const app = express();
const appRoutes = require('./routes');

app.use(express.json());

app.use(appRoutes.urlRoutes);

app.listen(process.env.APP_PORT || 3000, () => {
	console.log(`Server listening port ${process.env.APP_PORT}`);
});
