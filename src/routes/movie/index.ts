import Router from 'npm:express@^4.17';
import { getMovieController } from '../../controllers/movie.ts';
import { validateParams } from '../../middlewares/validateParams.ts';

const router: Router = Router();

router.get('/movie', validateParams, getMovieController);

export default router;
