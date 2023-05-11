"use strict"
import { UniqueArray } from './modified-array.js';
export class IdManager {
    _idCache = new UniqueArray();
    _min
    _max

    constructor(min, max) { // throws IdManager.IdManagerException
        if (typeof min !== typeof 1 || typeof max !== typeof 1) {
            throw new this.IdManager.IdManagerException('Type of _min or _max is NaN');
        } else {
            this._min = min;
            this._max = max;

        }
    }

    add(id) { // throws NumberAlreadyExistsError
        this._idCache.add(id);
    }

    remove(id) { // throws NumberNotFoundError
        this._idCache.rem(id);
    }

    gen() {
        if (this._idCache.isEmpty()) {
            this.add(this._min);
            return this._min;
        } else {
            let id = this._idCache.get(this._idCache.length() - 1) + 1;
            if (id > this._max) {
                throw new IdManager.IdManagerException(`IdManager has reached its maximum capacity of ${numberWithCommas(this._max - this._min)} with range ${numberWithCommas(this._min)} to ${numberWithCommas(this._max)}`);
            } else {
                this.add(id);
                return id;
            }
        }
    }

    has(id) {
        return this._idCache.has(id);
    }

}

IdManager.IdManagerException = class extends Error {
    constructor(msg) {
        super(msg);
        this.name = this.constructor.name;
    }
};


function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}