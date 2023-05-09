class UniqueArray {

    array
    constructor() {
        this.array = [];
    }

    add(id) {
        if (this.array.includes(id)) {
            throw new NumberAlreadyExistsError(`Number: ${id} already exists in UniqueArray`);
        }
        this.array.push(id);
    }

    rem(id) {
        if (!this.array.includes(id)) {
            throw new this.NumberNotFoundError(`Number: ${id} could not be found in UniqueArray`);
        }
        this.array = this.array.filter(item => item !== id);
    }

    has(id) {
        return this.array.includes(id);
    }

    cls() {
        this.array = [];
    }

    get(index) {
        return this.array[index];
    }


    length() {
        return this.array.length();
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

UniqueArray.NumberNotFoundError = class extends Error {
    constructor(msg) {
        super(msg);
    }
}
UniqueArray.NumberAlreadyExistsError = class extends Error {
    constructor(msg) {
        super(msg);
    }
};