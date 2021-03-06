# Problem 6

Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called `lightCell()` that takes in the coordinates in the form of `'A3'` or `'J9'` and returns the contents of that specific cell. (Ex: `lightCell('B4')`; would return `""`)

*For the purposes of testing, my solution involves passing the GRID variable.*

## Solution

```javascript
const convertColumn = coordinate => {
    const colLetter = coordinate.substr(0, 1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}

const lightCell = (grid, coordinate) => {
    const row = coordinate.substr(1,1) - 1;
    const col = convertColumn(coordinate);
    return grid[row][col];
}
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*