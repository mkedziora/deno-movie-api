import Router from 'npm:express@^4.17';
import { getMovieController } from '../../controllers/movie.ts';

const router: Router = Router();

router.get('/movie', getMovieController);

export default router;
