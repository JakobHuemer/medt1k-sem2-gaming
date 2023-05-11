import { UserUpvoteList } from '../comment/stats/user-upvote-list.js';
import { IdManager } from '../../../assets/id-manager.js';
import { CommentManager } from '../comment/comment-manager.js';

export class BasePost {
    _author;
    _title;
    _body;
    _postId;
    _date;
    _commentManager;
    _upvotes = 0;
    _clicks = 0;
    _userUpvoteList
    _level = -1;
    _postManager;

    constructor(author, title, body, postId, postManager) {
        this._author = author;
        this._title = title;
        this._body = body;
        this._postId = postId;
        this._date = new Date();
        this._commentManager = new CommentManager();
        this._userUpvoteList = new UserUpvoteList();
        this._postManager = postManager;
    }

    addVote(user) {
        this._upvotes++;
        this._userUpvoteList.add(user);
        this._author.addUpvote()
    }

    remVote(user) {
        this._upvotes--;
        this._userUpvoteList.remUser(user);
        this._author.remUpvote();
    }

    addClick() {
        this._clicks++;
        this._author.addClick();
    }

    get upvotes() { // :number
        return this._upvotes;
    }

    get clicks() { // :number
        return this._clicks;
    }

    get author() { // :BaseUser
        return this._author;
    }

    get title() { // :string
        return this._title;
    }

    get body() { // :string
        return this._body;
    }

    get postId() { // :number
        return this._postId;
    }

    get date() { // :Date
        return this._date;
    }

    get commentManager() { // :CommentManager
        return this._commentManager;
    }
}