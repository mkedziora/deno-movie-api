// @deno-types="npm:@types/express@^4.17"
import express from 'npm:express@^4.17';

import router from './src/routes/index.ts';
import { incomingRequestLogger } from './src/middlewares/logger.ts';

const app = express();

app.use(incomingRequestLogger);

app.use(router);

app.use((err, _req, res, _next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({ 'message': err.message });

	return;
});

app.listen(8080, () => {
	console.log('listening on http://localhost:8080/');
});
