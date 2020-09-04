import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.checkObjectId.read);
posts.delete('/:id', postsCtrl.checkObjectId.remove);
posts.patch('/:id', postsCtrl.checkObjectId.update);

export default posts;
