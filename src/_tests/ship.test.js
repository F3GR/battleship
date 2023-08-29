const Ship = require('../ship')

describe('Ship functionality', () => {
    let ship1, ship2, ship3, ship4, ship5, 
    ship6, ship7, ship8, ship9, ship10

    beforeAll(() => {
        ship1 = new Ship(6)
        ship2 = new Ship(-1)
        ship3 = new Ship('foobar')
        ship4 = new Ship(1)
        ship5 = new Ship(5)
        ship6 = new Ship(4)
        ship7 = new Ship(3)
        ship8 = new Ship(2)
        ship9 = new Ship(5)
        ship10 = new Ship(4)
    })

    describe('Ship length', () => {
        test('Invalid length', () => {
            expect(ship1).toBeUndefined()
            expect(ship2).toBeUndefined()
            expect(ship3).toBeUndefined()
            expect(ship4).toBeUndefined()
        })
        test('Length 5', () => {
            expect(ship5.getLength()).toBe(5)
            expect(ship9.getLength()).toBe(5)
        })
        test('Length 4', () => {
            expect(ship6.getLength()).toBe(4)
            expect(ship10.getLength()).toBe(4)
        })
        test('Length 3', () => {
            expect(ship7.getLength()).toBe(3)
            expect(ship8.getLength()).toBe(2)
        })
        test('Length 2', () => {
            expect(ship8.getLength()).toBe(2)
        })
    })
    describe('Correctly applies hit', () => {
        test('Handles the hit', () => {
            ship5.applyHit()
            ship5.applyHit()
            expect(ship5.getHits()).toBe(2)
            ship6.applyHit()
            expect(ship6.getHits()).toBe(1)
            ship9.applyHit()
            ship9.applyHit()
            ship9.applyHit()
            expect(ship9.getHits()).toBe(3)
            ship10.applyHit()
            ship10.applyHit()
            ship10.applyHit()
            expect(ship10.getHits()).toBe(3)
        })
        test('Handles hit when the ship is sunk', () => {
            ship7.applyHit()
            ship7.applyHit()
            ship7.applyHit()
            ship7.applyHit()
            expect(ship7.getHits()).toBe(3)
            ship8.applyHit()
            ship8.applyHit()
            ship8.applyHit()
            expect(ship8.getHits()).toBe(2)
        })
    })
    describe('Correctly showing sunk status', () => {
        test('Being sunk', () => {
            expect(ship7.isSunk()).toBe(true)
            expect(ship8.isSunk()).toBe(true)
        })
        test('Being afloat', () => {
            expect(ship5.isSunk()).toBe(false)
            expect(ship6.isSunk()).toBe(false)
            expect(ship9.isSunk()).toBe(false)
            expect(ship10.isSunk()).toBe(false)
        })
        test('Being sunk after a hit / multiple hits', () => {
            ship9.applyHit()
            ship9.applyHit()
            expect(ship9.isSunk()).toBe(true)
            ship10.applyHit()
            expect(ship10.isSunk()).toBe(true)
        })
        test('Being afloat after a hit / multiple hits', () => {
            ship5.applyHit()
            expect(ship5.isSunk()).toBe(false)
            ship6.applyHit()
            ship6.applyHit()
            expect(ship6.isSunk()).toBe(false)
        })
    })
})
