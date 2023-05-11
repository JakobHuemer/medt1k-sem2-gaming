export class UserCommentManager {
    _author;
    _comments;

    constructor(author) {
        this._author = author;
        this._comments = [];
    }

    addComment(baseComment) {
        this._comments.push(baseComment);
    }

    remComment(baseComment) {
        if (!this._comments.includes(baseComment))
            throw new UserCommentManager.CommentNotFound(`Comment with id ${ baseComment.globalId } not found`);

        this._comments.splice(this._comments.indexOf(baseComment), 1);
    }
}

UserCommentManager.CommentNotFound = class extends Error {
    constructor(message) {
        super(message);
        this.name = "CommentNotFound";
    }
}