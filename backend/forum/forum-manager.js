import fs from 'fs';
import { Post } from './forum-assets/post.js';

export class ForumManager {

    cfg: any;
    constructor() {
        this.cfg = JSON.parse(fs.readFileSync('forum.json', 'utf8'));
    }

    parseForum() {
    }
}