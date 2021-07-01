function replaceElementsTS(arr: number[]): number[] {
    const result: number[] = [];
    const helper = (index) => {
        if (index < arr.length) {
            let highest: number = arr[index] === result[result.length - 1] ? 0 : arr[index];
            for (let i = index + 1; i < arr.length; i++) {
                const currNum: number = arr[i];
                if (highest < currNum) {
                    highest = currNum;
                }
            }
            if (index < arr.length - 1) {
                result.push(highest);
            } else if (index === arr.length - 1) {
                result.push(-1);
            }
            helper(index + 1);
        }
    };
    helper(0);
    return result;
};