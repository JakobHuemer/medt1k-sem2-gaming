export class UuidManager {
    _list
    _base
    _first = '000000000000000000000000';
    _current = this._first;
    // example of uuid:

    constructor(base) {
        this._base = base;
        this._list = [];
    }

    gen() {
        this._current = this.#incrementString(this._base, this._current);
        this._list.push(this._current);
        return this._current;
    }

    has() {
        return this._list.includes(this._current);
    }

    #incrementString(base, string) {
        let baseList = [...Array(10).keys()].map(String).concat([...Array(26).keys()].map(i => String.fromCharCode(i + 97))).concat([...Array(26).keys()].map(i => String.fromCharCode(i + 65)));
        baseList = baseList.slice(0, base);
        let carry = 1;
        let result = '';
        for (let i = string.length - 1; i >= 0; i--) {
            let char = string[i];
            if (carry === 0) {
                result = char + result;
            } else {
                let index = baseList.indexOf(char);
                let newIndex = (index + carry) % base;
                carry = Math.floor((index + carry) / base);
                result = baseList[newIndex] + result;
            }
        }
        if (carry === 1) {
            result = '1' + result;
        }
        return result;
    }
}