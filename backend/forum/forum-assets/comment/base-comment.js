import { CommentManager } from './comment-manager.js';

export class BaseComment {

    _post;
    _postManager;
    _parent;
    _parentComment; // null if is root
    _commentManager;
    _id;
    _globalId;
    _body;
    _author;
    _date;
    _upvotes = 0;
    _level;
    _isEnd = false; // if level >= 6 so if isEnd no commentManager
    private _isRoot = true; // false if level > 0; 0 means root


    constructor(author, body, parentPost, parent, commentId, level) {
        this._level = level;
        this._parent = parent;
        this._post = parentPost;
        this._id = commentId;
        this._parentComment = parent.parent
        this._globalId = this._parent._parent.preId() + '.' + this._id;
        this._isEnd = true;
        if (level <= 6) {
            this._commentManager = new CommentManager(this);
            this.isEnd = false;
        }
        this._body = body;
        this._author = author;
        this._date = new Date();
        this._level = level;
        this._postManager = parentPost.parent;
        this._parentPost = parentPost;
    }


    get upvotes() {
        return this._upvotes;
    }

    get author() {
        return this._author;
    }

    get body() {
        return this._body;
    }

    get id() {
        return this._id;
    }

    get parent() {
        return this._parent;
    }

    get post() {
        return this._post;
    }

    get globalId() {
        return this._globalId;
    }

    get commentManager() {
        return this._commentManager;
    }

    get date() {
        return this._date;
    }


    get isEnd() {
        return this._isEnd;
    }

    get isRoot(): boolean {
        return this._isRoot;
    }
    get parentPost() {
        return this._parentPost;
    }
    get postManager() {
        return this._postManager;
    }
}