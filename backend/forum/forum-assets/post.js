export class Post {
    postId: number;
    title: string;
    body: string;
    date: Date;
    author: string;
    views: number;
    upvotes: number;

    constructor(postId, title, body, author) {
        this._date = new Date();
        this._views = 0;
        this._upvotes = 0;
        this._postId = postId;
        this._title = title;
        this._body = body;
        this._author = author;
    }


    set views(value) {
        this._views = value;
    }

    set upvotes(value) {
        this._upvotes = value;
    }

    get postId() {
        return this._postId;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }

    get author() {
        return this._author;
    }

    get date() {
        return this._date;
    }

    get views() {
        return this._views;
    }

    get upvotes() {
        return this._upvotes;
    }
}