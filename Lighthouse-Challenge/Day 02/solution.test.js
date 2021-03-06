const countColumns = require('./solution');

const givenGrid = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];

const emptyGrid = [];

const smallGrid = [
    ["", "", ""],
    ["", "v", ""]
];

const largeGrid = [
    ["", "", "", "^", "", "", "", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", "", "", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", "", "", "", ""],
];

test('Counts givenGrid columns to be 10', () => {
    expect(countColumns(givenGrid)).toBe(10);
});

test('Counts emptyGrid columns to be 0', () => {
    expect(countColumns(emptyGrid)).toBe(0);
});

test('Counts smallGrid columns to be 3', () => {
    expect(countColumns(smallGrid)).toBe(3);
});

test('Counts largeGrid columns to be 13', () => {
    expect(countColumns(largeGrid)).toBe(13);
})