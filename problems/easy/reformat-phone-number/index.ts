function reformatNumberTS(number: string): string {
    let _number: string = number.replace(/(\s|-)/g, "");
    let arr: string[] = [];

    while (_number.length > 0) {
        let subStr: string = "";
        if (_number.length > 4) {
            subStr = _number.substr(0, 3);
            arr.push(subStr);
        } else {
            switch (_number.length) {
                case 2:
                case 3:
                    arr.push(_number);
                    subStr = _number;
                    break;
                default:
                    subStr = _number.substr(0, 2);
                    arr.push(subStr);
            }
        }
        _number = _number.replace(subStr, "");
    }

    return arr.join('-');
};