export class UserUpvoteList {
    list;

    constructor() {
        this.list = [];
    }

    addUser(user) {
        this.list.push(user);
    }

    remUser(user) {
        if (!this.list.find((u) => u.id === user.id)) {
            throw new UserUpvoteList.UserNotFoundError(`User with id ${ user.id } not found`);
        } else
            this.list = this.list.filter((u) => {
                return u.id !== user.id;
            });
    }

    getUser(user) {
        if (!this.list.find((u) => u.id === user.id)) {
            throw new UserUpvoteList.UserNotFoundError(`User with id ${ user.id } not found`);
        } else
            return this.list.find((u) => u.id === user.id);
    }

    hasUser(user) {
        return this.list.find((u) => u.id === user.id) !== undefined;
    }
}

UserUpvoteList.UserNotFoundError = class extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserNotFoundError';
    }
};