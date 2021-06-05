/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const aMoves = moves.filter((move, index) => {
        if (index % 2 === 0) {
            return move;
        }   
    });
    const bMoves = moves.filter((move, index) => {
        if (index % 2 !== 0) {
            return move;
        } 
    });
    const maxLength = 9; // 3x3 grid
    let result = '';
    
    const checker = (arr) => {
        const grid = [];
        const target = 3;
        for (let i = 0; i <= target - 1; i++) {
            // Create row
            const row = [];
            for (let l = 0; l < target - 1; l++) {
                row.push(false);
            }
            grid.push(row);
        }
        for (let i = 0; i < arr.length; i++) {
            const move = arr[i];
            const x = move[0];
            const y = move[1];
            // Inject data to row
            grid[x][y] = true;
        }
        let counter = 0;
        // Check Horizontal
        for (let i = 0; i < grid.length; i++) {
            const row = grid[i];
            for (let l = 0; l < row.length; l++) {
                const item = row[l];
                if (item) {
                    counter += 1;
                } else {
                    counter = 0;
                    break;
                }
            }
            if (counter === target) {
                break;
            } 
        }
        if (counter === target) {
           return true;
        } else {
            counter = 0;
            // Check Vertical
            for (let i = 0; i < grid.length; i++) {
                for (let l = 0; l < grid.length; l++) {
                    const item = grid[l][i];
                    if (item) {
                        counter += 1;
                    } else {
                        counter = 0;
                        break;
                    }
                }
                if (counter === target) {
                    break;
                } 
            }
            if (counter === target) {
                return true;
            } else {
                // Check Diagonal
                counter = 0;
                for (let i = 0; i < grid.length; i++) {
                   const item = grid[i][i];
                   if (item) {
                        counter += 1;
                   }
                }
                if (counter === target) {
                    return true;
                } else {
                    counter = 0;
                    let index = grid.length - 1;
                    for (let i = 0; i < grid.length; i++) {
                       const item = grid[i][index];
                       if (item) {
                            counter += 1;
                       }
                       index--;
                    } 
                    if (counter === target) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
    
    const resultA = checker(aMoves);
    const resultB = checker(bMoves);

    if (resultA) {
        result = 'A';
    } else if (resultB) {
        result = 'B';
    } else if (!resultA && !resultB) {
        result = 'Pending';
        if (moves.length === maxLength) {
            result = 'Draw';
        }
    } 
        
    return result;    
};