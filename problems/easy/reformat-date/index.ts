function reformatDateTS(date: string): string {
    const splitDate: string[] = date.split(' ');
    const year: string = splitDate[2];
    let month: string;
    let day: string;
    switch (splitDate[1]) {
        case 'Feb':
            month = '02';
            break;
        case 'Mar':
            month = '03';
            break;
        case 'Apr':
            month = '04';
            break;
        case 'May':
            month = '05';
            break;
        case 'Jun':
            month = '06';
            break;
        case 'Jul':
            month = '07';
            break;
        case 'Aug':
            month = '08';
            break;
        case 'Sep':
            month = '09';
            break;
        case 'Oct':
            month = '10';
            break;
        case 'Nov':
            month = '11';
            break;
        case 'Dec':
            month = '12';
            break;
        default:
            month = '01';
            break;
    }
    
    day = splitDate[0].replace(/st|nd|rd|th/g,'')
    if (day.length === 1) {
        day = 0 + day;
    }
    
    return `${year}-${month}-${day}`;
};