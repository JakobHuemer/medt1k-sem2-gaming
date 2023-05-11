// TODO: Implement

// import { BaseComment } from '../forum/forum-assets/comment/base-comment.js';
// import { CommentManager } from '../forum/forum-assets/comment/comment-manager.js';
// import { UserManager } from '../forum/forum-assets/user/user-manager.js';
// import { BaseUser } from '../forum/forum-assets/user/base-user.js';
// import { BasePost } from '../forum/forum-assets/post/base-post.js';

import { IdManager } from '../assets/id-manager.js';

let idManagerTest = new IdManager(1_000_000, 1_000_100);

for (let i = 0; i < 102; i++) {
    console.log(idManagerTest.gen());
}