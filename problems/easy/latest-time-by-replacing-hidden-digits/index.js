/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    const splitTime = time.split(':');
    let hours = splitTime[0];
    const hoursQuestionMark = hours.match(/\?/g);
    let mins = splitTime[1];
    const minsQuestionMark = mins.match(/\?/g);
    
    if (hoursQuestionMark && hoursQuestionMark.length === 1) {
        const indexOfHours = hours.indexOf('?');
        if (indexOfHours === 0) {
           hours = hours.replace('?', hours[1] >= 4 ? '1' : '2'); 
        } else if (indexOfHours === 1) {
            hours = hours.replace('?', hours[0] === '2' ? '3' : '9');
        }
    } else if (hoursQuestionMark && hoursQuestionMark.length === 2) {
       hours = '23'; 
    }
    
    if (minsQuestionMark && minsQuestionMark.length === 1) {
        const indexOfMins = mins.indexOf('?');
            if (indexOfMins === 0) {
            mins = mins.replace('?', '5');
        } else if (indexOfMins === 1) {
            mins = mins.replace('?', '9');
        }
    } else if (minsQuestionMark && minsQuestionMark.length === 2) {
        mins = '59';
    }
    

    return `${hours}:${mins}`;
};