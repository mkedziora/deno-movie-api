import Router from 'npm:express@^4.17';
import {
	getMovieController,
	postMovieController,
} from '../../controllers/movie.ts';
import { validateParams } from '../../middlewares/validateParams.ts';
import { validateBody } from '../../middlewares/validateBody.ts';

const router: Router = Router();

router.get('/movie', validateParams, getMovieController);

router.post('/movie', validateBody, postMovieController);

export default router;
