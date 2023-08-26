import Router from 'npm:express@^4.17';

import movie from './movie/index.ts';

const router: Router = Router();

router.use(movie);

export default router;
