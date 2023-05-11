import { UuidManager } from '../../../assets/uuid-manager.js';
import { BaseUser } from './base-user.js';

export class UserManager {
    _userList = [];
    _UuidManager = new UuidManager();

    constructor() {
        this._userList = [];
    }

    addUser(username, avatarUrl) {
        let uuid = this._UuidManager.gen()
        if (this._userList.find((u) => u.uuid === uuid)) throw new Error(`User with uuid ${uuid} already exists`);
        let user = new BaseUser(uuid, username, avatarUrl, this)
        this._userList.push(user);
    }

    removeUser(user) {
        if (!this._userList.find((u) => u.uuid === user.uuid)) throw new Error(`User with uuid ${user.uuid} not found`);
        this._userList = this._userList.filter((u) => u !== user);
    }

    getUser(uuid) { // : User
        if (!this._userList.find((u) => u.uuid === uuid)) throw new UserManager.UserNotFoundError(uuid);
        return this._userList.find((u) => u.uuid === uuid);
    }

    userExists(uuid) {
        return this._userList.find((u) => u.uuid === uuid) !== undefined;
    }
}

UserManager.UserNotFoundError = class extends Error {
    constructor(uuid) {
        super(`User with uuid ${uuid} not found`);
    }
};

UserManager.UserAlreadyExistsError = class extends Error {
    constructor(uuid) {
        super(`User with uuid ${uuid} already exists`);
    }
};