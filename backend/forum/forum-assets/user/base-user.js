import { UserCommentManager } from './user-comment-manager.js';

export class BaseUser {
    _uuid;
    _username;
    _userCommentManager;
    _userManager
    _avatarUrl;
    _upvotes;
    _clicks;

    constructor(uuid, username, avatarUrl, userManager) {
        this._uuid = uuid;
        this._username = username;
        this._userCommentManager = new UserCommentManager();
        this._avatarUrl = avatarUrl;
        this._userManager = userManager;
    }


    set username(value) {
        this._username = value;
    }

    set avatarUrl(value) { // : url string
        this._avatarUrl = value;
    }

    get avatarUrl() { // : url string
        return this._avatarUrl;
    }

    get uuid() { // : uuid string
        return this._uuid;
    }

    get username() { // : username string
        return this._username;
    }

    get userCommentManager() { // : UserCommentManager
        return this._userCommentManager;
    }

    get upvotes(): number { // : number
        return this._clicks;
    }

    addUpvote() {
        this._upvotes++;
    }

    remUpvote() {
        this._upvotes--;
    }

    addClick() {
        this._clicks++;
    }

}