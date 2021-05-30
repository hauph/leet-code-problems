function convertToBase7TS(num: number): string {
    let str: string = '';
    if (num >= 0 && num < 7 || num < 0 && num > -7) {
        str = num.toString();
    } else {
        let remainder: number = num % 7;
        let arr: number[] = [];
        arr.push(remainder);
        let x: number = num / 7;
        x = Number(x.toString().split('.')[0]);
        while (x / 7 !== 0) {
            remainder = x % 7;
            arr.push(remainder);
            x = x / 7;
            x = Number(x.toString().split('.')[0]);
        }
        arr = arr.reverse();
        for (let i = 0; i < arr.length; i++) {
            let item: string = arr[i].toString();
            if (i > 0 && item.indexOf('-') > -1) {
                item = item.replace('-', '');
            }
            str += item;
        }
    }
    
    return str;
};