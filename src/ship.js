class Ship {
    constructor(length) {
        if (typeof length !== 'number' || length < 2 || length > 5) {
            throw new Error('Invalid ship length')
        }

        this._length = length
        this._hits = 0
        this._sunk = false
    }
    getHits() {
        return this._hits
    }
    getLength() {
        return this._length
    }
    applyHit() {
        if (!this._sunk) {
            this._hits++
        }
        if (this._hits === this._length) {
            this._sunk = true
        }
    }
    isSunk() {
        return this._sunk
    }
}

module.exports = Ship