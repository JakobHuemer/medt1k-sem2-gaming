import { BaseComment } from './base-comment.js';
import { IdManager } from '../../../assets/id-manager.js';

export class CommentManager {
    _comments = [];
    _isRoot = true;
    _parentComment; // : BaseComment
    _postManager;
    _parent; // : BasePost | BaseComment
    _post;
    _level;
    _isEnd;
    _preId;
    _idManager;

    constructor(level, isRoot, parent, post, parentComment) {
        this._level = level;
        this._isRoot = isRoot;
        this._postManager = post.postManager;

        this._parent = parent;
        this._post = post;
        this._parentComment = parentComment;
        this._isEnd = this._level >= 6;
        this._idManager = new IdManager(1_000_000);

    }

    addComment(author, body, parentPost, parent) {
        let commentId = this._idManager.gen()
        let comment = new BaseComment(author, body, parentPost, this ,commentId, this._level);
        this._comments.push();
        author.addComment(comment);
    }


    get preId() {
        return this._preId;
    }

    get isRoot() {
        return this._isRoot;
    }

    get parent() {
        return this._parent;
    }

    get post() {
        return this._post;
    }

    get parentComment() {
        return this._parentComment;
    }

    get postManager() {
        return this._postManager;
    }

    get isEnd() {
        return this._isEnd;
    }

    get level() {
        return this._level;
    }

}

CommentManager.CommentNotFoundError = class extends Error {
    constructor(message) {
        super(message);
        this.name = 'CommentNotFoundError';
    }
};

CommentManager.CommentAlreadyExistsError = class extends Error {
    constructor(message) {
        super(message);
        this.name = 'CommentAlreadyExistsError';
    }
};