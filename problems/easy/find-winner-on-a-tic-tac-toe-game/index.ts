function tictactoeTS(moves: number[][]): string {
    const aMoves: number[][] = moves.filter((move, index) => {
        if (index % 2 === 0) {
            return move;
        }   
    });
    const bMoves: number[][] = moves.filter((move, index) => {
        if (index % 2 !== 0) {
            return move;
        } 
    });
    const maxLength: number = 9; // 3x3 grid
    let result: string = '';
    
    const checker = (arr: number[][]): boolean => {
        const grid: boolean[][] = [];
        const target: number = 3;
        for (let i: number = 0; i <= target - 1; i++) {
            // Create row
            const row: boolean[] = Array(target).fill(false);
            grid.push(row);
        }
        for (let i: number = 0; i < arr.length; i++) {
            const move: number[] = arr[i];
            const x: number = move[0];
            const y: number = move[1];
            // Inject data to row
            grid[x][y] = true;
        }
        let counter: number = 0;
        // Check Horizontal
        for (let i: number = 0; i < grid.length; i++) {
            const row: boolean[] = grid[i];
            for (let l: number = 0; l < row.length; l++) {
                const item: boolean = row[l];
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
            for (let i: number = 0; i < grid.length; i++) {
                for (let l: number = 0; l < grid.length; l++) {
                    const item: boolean = grid[l][i];
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
                for (let i: number = 0; i < grid.length; i++) {
                   const item: boolean = grid[i][i];
                   if (item) {
                        counter += 1;
                   }
                }
                if (counter === target) {
                    return true;
                } else {
                    counter = 0;
                    let index: number = grid.length - 1;
                    for (let i: number = 0; i < grid.length; i++) {
                       const item: boolean = grid[i][index];
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
    
    const resultA: boolean = checker(aMoves);
    const resultB: boolean = checker(bMoves);

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