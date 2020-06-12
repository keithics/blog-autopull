const express = require('express');
const app = express();
const port = 5551;
const {exec} = require('child_process');


app.get('/', (req, res) => {
	res.status(400).send('Bad Request');
});

app.post('/:name', (req, res) => {
	const paramName = req.params.name;
	const validNames = {
		api: {dir: '/my-dir/api', name: 'api'},
		anotherAPI: {dir: '/my-dir/awesome-api', name: 'other-api'},
	};

	const validName = validNames[paramName];
	if (!validName) {
		res.status(400).send('<h1>Bad Request</h1>');
	} else {
		const {dir, name} = validName;
		// modify here
		const cmd = 'cd ' + dir + ' && git pull && pm2 restart ' + name;
		exec(cmd);
		res.send({running:validName.name});
	}


});

app.listen(port, () => console.log(`Auto Pull on port ${port}!`))
module.exports = app;
