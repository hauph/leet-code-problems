type Obj = {
    [key: string]: number
}

function arrayRankTransformTS(arr: number[]): number[] {
    const cloneArr: number[] = [...arr];
    cloneArr.sort((a, b) => a - b);
    let currentNum: number;
    let rank: number = 0;
    const obj: Obj = {};
    cloneArr.forEach((num, index) => {
        if (currentNum === undefined) {
            rank = 1;
        } else if (currentNum !== undefined && currentNum !== num){
            rank += 1;
        }
        currentNum = num;
        obj[num] = rank;
    });

    return arr.map((num) => {
        return obj[num.toString()];
    })
};