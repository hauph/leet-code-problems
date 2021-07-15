/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {    
    let deckLength = deck.length;
    let limit = deckLength % 2 === 0 ? deckLength / 2 : Math.floor(deckLength / 2);
    if (deckLength === 2) {
        limit = deckLength;
    }
    let arr = [];
    let result = false;
    
    const twoDArr = (_deck, x) => {
      if (_deck.length) {
        const subArr = [];
        let num = _deck.shift();
        subArr.push(num);
        for (let i = 0; i < x - 1; i++) {
          const index = _deck.indexOf(num);
          if (index > -1) {
            subArr.push(_deck[index]);
            _deck.splice(index, 1);
          } else {
            break;
          }
        }
        arr.push(subArr);
        twoDArr(_deck, x);
      }
    };
    
    const helper = (x) => {
        if (x <= limit && deckLength % x === 0) {
            const clonedDeck = [...deck];
            arr.length = 0;
            twoDArr(clonedDeck, x);
            if (arr.length * x === deck.length) {
                result = true;
            } else {
                helper(x + 1);
            }
        } else if (x <= limit && deckLength % x !== 0) {
            helper(x + 1);
        }
    }
    
    helper(2);
    
    return result;
};