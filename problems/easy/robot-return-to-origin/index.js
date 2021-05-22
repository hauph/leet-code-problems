/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    const position = {x:0,y:0};
    const moveArr = moves.split('');
    for (let i = 0; i < moveArr.length; i++) {
        const move = moveArr[i];
        switch (move) {
            case 'U':
                position.y += 1;
                break;
            case 'D':
                position.y -= 1;
                break;
            case 'L':
                position.x -= 1;
                break;
            default:
                position.x += 1;
                break;
        }
    }
    return position.x === 0 && position.y === 0;
};