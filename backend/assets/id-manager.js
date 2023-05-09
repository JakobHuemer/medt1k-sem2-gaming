"use strict"

export class IdManager {
    idCache = new UniqueArray();
    min
    max

    constructor(min, max) { // throws IdManager.IdManagerException
        if (typeof min !== typeof 1 || typeof max !== typeof 1) {
            throw new this.IdManager.IdManagerException('Type of min or max is NaN');
        } else {
            this.min = min;
            this.max = max;

        }
    }

    add(id) { // throws NumberAlreadyExistsError
        this.idCache.add(id);
    }

    remove(id) { // throws NumberNotFoundError
        this.idCache.rem(id);
    }

    gen() {
        if (this.idCache.isEmpty()) {
            return this.min;
        } else {
            let id = this.idCache.get(this.idCache.length() - 1) + 1;
            if (id > this.max) {
                throw new this.IdManager.IdManagerException(`IdManager has reached its maximum capacity of ${this.max}`);
            } else {
                return id;
            }
        }
    }

    has(id) {
        return this.idCache.has(id);
    }

}

IdManager.IdManagerException = class extends Error {
    constructor(msg) {
        super(msg);
        this.name = this.constructor.name;
    }
};