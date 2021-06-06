function dayOfTheWeekTS(day: number, month: number, year: number): string {
    let monthWord: string = "January";
    switch(month) {
        case 2:
            monthWord = "February";
            break;
        case 3:
            monthWord = "March";
            break;
        case 4:
            monthWord = "April";
            break;
        case 5:
            monthWord = "May";
            break;
        case 6:
            monthWord = "June";
            break;
        case 7:
            monthWord = "July";
            break;
        case 8:
            monthWord = "August";
            break;
        case 9:
            monthWord = "September";
            break;
        case 10:
            monthWord = "October";
            break;
        case 11:
            monthWord = "November";
            break;
        case 12: 
            monthWord = "December";
            break;
    }
    
    const d: number = Date.parse(`${monthWord} ${day}, ${year}`);
    const utcDay: number = new Date(d).getUTCDay();
    let result: string = "Sunday";
    switch (utcDay) {
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;
    }
    
    return result;
};